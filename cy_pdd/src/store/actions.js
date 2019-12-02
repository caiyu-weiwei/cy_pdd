import {
  getHomeCasual,
  getHomeNav,
  getRecommendList,
  reqUserInfo,
  reqLogout
} from 'api'
import {
  HOME_CASUAL,
  HOME_NAV,
  RECOMMEND_LIST,
  SYNC_USER_INFO,
  RESET_USER_INFO
} from './mutation-types'
export default {
  /**
   * 获取首页轮播图
   */
  async reqHomeCasual({commit}, callback) {
    const result = await getHomeCasual()
    commit(HOME_CASUAL, {homecasual: result.data.data})
    callback && callback()
  },
  /**
   * 获取首页二级导航图片
   * @param {*} param0 
   */
  async reqHomeNav({commit}) {
    const result = await getHomeNav()
    commit(HOME_NAV, result.message.data)
  },
  /**
   * 获取推荐模块商品列表
   * @param {*} param0 
   */
  async reqRecommendList({commit}, params) {
    console.log(params)
    const result = await getRecommendList(params)
    commit(RECOMMEND_LIST, {recommendlist: result.data.data})
    params.callback && params.callback()
  },
  /**
   * 同步用户信息
   * @param {*} param0 
   * @param {*} userInfo 
   */
  syncUserInfo({commit}, userInfo) {
    commit(SYNC_USER_INFO, {userInfo})
  },
  /**
   * 异步获取用户信息
   * @param {*} param0 
   */
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    const {code, data:userInfo} = result.data
    if (code === 200) {
      commit(SYNC_USER_INFO, {userInfo})
    }
  },

  /**
   * 退出登录
   * @param {*} param0 
   */
  async logout({commit}) {
    const result = await reqLogout()
    const {code} = result.data
    if (code === 200) {
      commit(RESET_USER_INFO)
    }
  }
}