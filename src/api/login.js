import { v4 as uuidv4 } from "uuid";
import request from '@/utils/request'

/// 登录
export const login = async (obj) => {
  return request({
    url: '/api/login/login',
    method: 'post',
    data: obj
  })
};



/// 检查登录
export const check_login = (obj = {}) => {
  return request({
    url: '/api/login/checklogin',
    method: 'get',
    parmas: obj
  })
};