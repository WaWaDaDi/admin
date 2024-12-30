import { Loading } from 'element-ui';


let loading = null;


export const loading_open = (message = '加载中') => {
  loading = Loading.service({
    lock: true,
    text: message,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });

};



export const loading_close = () => {
  if (loading)
    loading.close();
}