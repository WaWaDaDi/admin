<template>
  <div>
    <el-skeleton :rows="100" :loading="isLoading" animated>
      <el-menu @select="handleSelect" :router="true" :default-active="activeIndex" :collapse="isCollapse"
        style="border-right: 0px;">

        <template v-for="item in menuList">

          <template v-if="item.children.length === 0">
            <el-menu-item :index="item.path">
              <i :class="item.icon" style="padding-right: 6px;"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <el-submenu :index="item.path">
              <template slot="title">
                <i :class="item.icon" style="padding-right: 6px;"></i>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subItem in item.children">
                <el-menu-item :index="subItem.path">
                  <i :class="subItem.icon" style="padding-right: 6px;"></i>
                  <span>{{ subItem.name }}</span>
                </el-menu-item>
              </template>

            </el-submenu>
          </template>

        </template>

      </el-menu>
    </el-skeleton>
  </div>
</template>

<script>
import { get_menus } from '@/api/index';
export default {
  data: function () {
    return {
      isLoading: true,
      isCollapse: true,
      menuList: [],
      activeIndex: sessionStorage.getItem('activeIndex') || '/',
    };
  },
  mounted: function () {
    if (parseInt(window.innerWidth) < 768) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }


    window.addEventListener('resize', () => {

      if (parseInt(window.innerWidth) < 768) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    });
    this.getMenu();
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      sessionStorage.setItem('activeIndex', index);
    },

    async getMenu() {
      const res = await get_menus();
      this.menuList = res.data;
      this.isLoading = false;
    },

  }
}
</script>