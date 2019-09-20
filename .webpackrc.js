/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 14:49:19
 * @LastEditTime: 2019-09-19 20:42:31
 * @LastEditors: Please set LastEditors
 */
const path = require('path')

export default {
  proxy: {
    "/api": {
      "target": "http://148.70.121.59:9001",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": ""
      }
    }
  },
  "alias": {
    "@": path.join(__dirname, "./src")
  }
}