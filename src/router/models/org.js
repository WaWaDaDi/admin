const org = {
  path: 'org',
  component: () => import('@/views/org/container.vue'),
  meta: {
    title: '组织架构',
  },
  children: [
    {
      path: '',
      component: () => import('@/views/org/index.vue'),
      meta: {
        title: '部门',
      }
    },
    {
      path: 'duties',
      component: () => import('@/views/org/duties.vue'),
      meta: {
        title: '岗位',
      }
    },
  ],
};
export default org;