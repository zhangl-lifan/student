/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-19 21:32:21
 * @LastEditors: Please set LastEditors
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