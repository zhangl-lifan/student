/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-19 21:34:20
 * @LastEditors: Please set LastEditors
 */
import request from '../utils/request';

//注册
export function getlogin(message){
  console.log(message); 
  let url='/emstu/teacher/register'
  // return axios.post(url,message)
    return request.post(url,message)
}

//登录
export function login(message){
  let url='/emstu/teacher/login'
   //return axios.post(url,message)
   return request.post(url,message)
}

