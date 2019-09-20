/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 15:04:13
 * @LastEditTime: 2019-09-20 15:04:13
 * @LastEditors: your name
 */

import axios from 'axios';

const instance = axios.create({
    baseURL: "/api",
    timeout: 1000,
})

// 请求拦截器
instance.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use((Response) => {
    return Response.data;
}, (error) => {
    return Promise.reject(error);
})

export default instance;