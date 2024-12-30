import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import nProgress from 'nprogress'
import { get_token } from '../utils/auth';
import { check_login } from '@/api/login'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



///前置守卫
router.beforeEach((to, from, next) => {
  nProgress.start();
  document.title = to.meta.title + ' - ' + '蛙蛙在线学习平台';

  if (!to.meta.not_check) {
    if (!get_token()) {
      next('/login');
      return;
    }
    check_login()
      .then((res) => {
        sessionStorage.setItem('user', JSON.stringify(res.data));
      }); // 检查登录
  }
  next();
});

///后置守卫
router.afterEach((to, from) => {
  nProgress.done();
})



export default router
