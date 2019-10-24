import ajax from './ajax'

// 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

// 请求方法

// 首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')
