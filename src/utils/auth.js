import Cookies from "js-cookie";

const key = 'auth_Token';


// 获取token
export const set_token = (token) => {
  Cookies.set(key, token);
};

// 获取token
export const get_token = () => {
  return Cookies.get(key);
}


// 删除token
export const remove_token = () => {
  Cookies.remove(key);
}
