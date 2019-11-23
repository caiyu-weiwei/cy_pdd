import {
  HOME_CASUAL,
  HOME_NAV,
  RECOMMEND_LIST,
  SYNC_USER_INFO
} from './mutation-types'
export default {
  /**
   * 首页轮播
   * @param {*} state 
   * @param {*} param1 
   */
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual
  },
  /**
   * 首页二级导航
   * @param {*} state
   * @param {*} param1
   */
  [HOME_NAV](state, {homenav}) {
    state.homenav = homenav
  },
  /**
   * 推荐模块商品列表
   * @param {*} state 
   * @param {*} param1 
   */
  [RECOMMEND_LIST](state, {recommendlist}) {
    state.recommendlist = state.recommendlist.concat(recommendlist)
  },
  [SYNC_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  }
}