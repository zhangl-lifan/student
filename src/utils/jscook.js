/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 11:59:10
 * @LastEditTime: 2019-09-20 14:46:02
 * @LastEditors: Please set LastEditors
 */

import Cookies from '../../node_modules/js-cookie/src/js.cookie'

export function getCookie(){
    Cookies.set('name')
}
export function setCookie(val){
    Cookies.set('name',val,{ expires: 7 })
}