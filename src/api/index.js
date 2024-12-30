import { v4 as uuidv4 } from 'uuid';

export const get_menus = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        message: 'OK',
        data: menus,
      });
    }, 1000);
  });
}


var menus = [
  {
    id: uuidv4(),
    name: '首页',
    path: '/',
    icon: 'iconfont icon-shouye',
    children: [],
  },
  {
    id: uuidv4(),
    name: '组织架构',
    path: '/org',
    icon: 'iconfont icon-zuzhijiagou-',
    children: [
      {
        id: uuidv4(),
        name: '部门',
        path: '/org',
        icon: 'iconfont icon-bumenpaixu',
        children: [],
      },
      {
        id: uuidv4(),
        name: '岗位',
        path: '/org/duties',
        icon: 'iconfont icon-gangweiguanli1',
        children: [],
      },

    ],
  },
  {
    id: uuidv4(),
    name: '权限管理',
    path: '/right',
    icon: 'iconfont icon-quanxianguanli-',
    children: [
      {
        id: uuidv4(),
        name: '主页',
        path: '/right',
        icon: 'iconfont icon-zhuye',
        children: [],
      },
      {
        id: uuidv4(),
        name: '授权',
        path: '/right/give',
        icon: 'iconfont icon-shouyu',
        children: [],
      },
      {
        id: uuidv4(),
        name: '配置',
        path: '/right/config',
        icon: 'iconfont icon-peizhi',
        children: [],
      }
    ],
  }

];