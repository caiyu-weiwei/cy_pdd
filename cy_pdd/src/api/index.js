import ajax from './ajax'

// 基础路径
const BASE_URL = 'http://127.0.0.1:3000'

// 请求方法

// 请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')

// 请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')

// 请求推荐列表
export const getRecommendList = () => ajax(BASE_URL + '/api/recommendlist')