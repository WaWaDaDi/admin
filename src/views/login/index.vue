<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form-control">
        <div class="login-form-title">
          LOG IN
        </div>
      </div>
      <div class="login-form-control">
        <el-tag size="mini">账号</el-tag>
        <el-input type="text" prefix-icon="el-icon-user" v-model="account" maxlength="11"></el-input>
      </div>
      <div class="login-form-control">
        <el-tag size="mini">密码</el-tag>
        <el-input type="password" prefix-icon="el-icon-lock" v-model="password" maxlength="32"></el-input>
      </div>
      <div class="login-form-control">
        <el-button style="width:100%" type="primary" @click="login()">登录</el-button>
      </div>
    </div>

  </div>
</template>



<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #e4e0f2, #8ba4f0);
  overflow: hidden;
}



.login-form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  backdrop-filter: blur(14px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.login-form-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}


.login-form-control {
  padding: 10px 0;
}
</style>
<script>

import { v4 as uuidv4 } from 'uuid';
import { login } from '@/api/login';
import { set_token } from '@/utils/auth';
import { loading_open, loading_close } from '@/utils/message';

export default {

  data: () => {
    return {
      account: '19353464797',
      password: '123456',
    }

  },

  methods: {
    async login() {

      //打开加载
      loading_open('登录中...');

      //调用登录接口
      const res = await login({
        account: this.account,
        password: this.password,
      });
      //判断返回结果
      if (res.code === 0) {
        set_token(res.data.token);
        this.$router.push('/');
        console.log(res);
      } else {
        this.$message.error(res.message);
      }

      //关闭加载
      loading_close();
    }



  }
}
</script>