import org from './models/org';
import right from './models/right';
import user from './models/user';

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout.vue'),
    ///子路由
    children: [
      {
        path: '',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
        }
      },
      org,
      right,
      user,

    ],
  },
  {
    path: '/home',
    component: () => import('@/views/layout.vue'),
    meta: {
      title: '首页',
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      not_check: true,
      title: '登录',
    }
  },
  {
    path: '/403',
    component: () => import('@/views/error-pages/403.vue'),
    meta: {
      not_check: true,
      title: '暂无权限',
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-pages/404.vue'),
    meta: {
      not_check: true,
      title: '页面不存在',
    }
  },
  {
    path: '*',
    component: () => import('@/views/error-pages/404.vue'),
    meta: {
      not_check: true,
      title: '页面不存在',
    }
  },


];


export default routes;