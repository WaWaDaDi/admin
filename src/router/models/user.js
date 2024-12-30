const user = {
    path: 'user',
    component: () => import('@/views/user/container.vue'),
    meta: {
        title: '用户管理',
    },
    children: [
        {
            path: '',
            component: () => import('@/views/user/info.vue'),
            meta: {
                title: '用户信息',
            },
        }
    ],
};


export default user;

