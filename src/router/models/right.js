const right = {
  path: 'right',
  component: () => import('@/views/right/container.vue'),
  meta: {
    title: '权限管理',
  },
  children: [
    {
      path: '',
      component: () => import('@/views/right/index.vue'),
      meta: {
        title: '主页',
      }
    },
    {
      path: 'give',
      component: () => import('@/views/right/give.vue'),
      meta: {
        title: '授权',
      }
    },
    {
      path: 'config',
      component: () => import('@/views/right/config.vue'),
      meta: {
        title: '配置',
      }
    },
  ],
};

export default right;