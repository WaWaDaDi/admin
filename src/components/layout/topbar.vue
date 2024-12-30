<template>
  <div class="layout-topbar">
    <div class="topbar-container">
      <div class="topbar-fold">
        <i class="el-icon-s-fold"></i>
      </div>
      <div class="topbar-breadcrumb">
        <el-breadcrumb separator="/">
          <template v-for="(item, index) in routes">
            <el-breadcrumb-item v-if="index < routes.length - 1 && item.path != curr_url" :to="item.path">{{ item.name
              }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else>{{ item.name
              }}</el-breadcrumb-item>
          </template>

        </el-breadcrumb>
      </div>
      <div class="topbar-user">
        <div class="topbar-user-content">
          <el-dropdown>


            <div style="display: flex; align-items: center;">
              <div>
                <el-avatar shape="square" size="medium"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
              <div>
                <span class="el-dropdown-link">
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <div>{{ curr_user.name }}</div>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <div>
                      <el-link href="/user">个人信息</el-link>
                    </div>
                  </el-dropdown-item>
                  <el-dropdown-item divided>
                    <div @click="logout">退出登录</div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </div>

            </div>


          </el-dropdown>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
import { remove_token } from '@/utils/auth';

export default {


  data: function () {
    return {
      routes: [],
      curr_url: '/',
      curr_user: JSON.parse(sessionStorage.getItem('user') || '{}'),

    }
  },


  mounted: function () {
    this.get_routes();
  },

  watch: {
    $route(to, from) {
      this.get_routes();
    }
  },
  methods: {
    get_routes() {
      this.routes = [];
      let last = this.$route.matched[this.$route.matched.length - 1];
      if (last.path === '/') {
        this.routes.push({
          path: '/',
          name: '首页',
        });
      } else {

        for (let i = 0; i < this.$route.matched.length; i++) {
          let item = this.$route.matched[i];
          if (i === 0) {
            this.routes = [{
              path: '/',
              name: "首页"
            }];
          } else {

            this.routes.push({
              path: item.path,
              name: item.meta.title
            });

          }
        }
        this.curr_url = this.$route.path;
      }
    },

    logout() {

      this.$confirm('您确定要退出登录吗？', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        remove_token();
        location.href = '/login';
      }).catch(() => {

      })

    }
  }
}
</script>