import ajax from './ajax'

// 基础路径
const BASE_URL = '/local_api'

// 请求方法

// 请求首页轮播图
export const getHomeCasual = () => ajax(BASE_URL + '/api/homecasual')

// 请求首页导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav')

// 请求推荐列表
export const getRecommendList = (params) => ajax(BASE_URL + '/api/recommendlist', params)

// 获取短信验证码
export const getMessageCode = (params) => ajax(BASE_URL + '/api/send_code', params)

// 短信验证码登录
export const phoneCodeLogin = (phone, code) => ajax(BASE_URL + '/api/login_code', {phone, code}, 'POST')

// 用户名、密码登录
export const captchaLogin = (userName, pwd, captcha) => ajax(BASE_URL + '/api/login_captcha', {userName, pwd, captcha}, 'POST')

// 异步获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/api/user_info')

// 退出登录
export const reqLogout = () => ajax(BASE_URL + '/api/logout')