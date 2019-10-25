import {
  HOME_CASUAL,
  HOME_NAV
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
  }
}