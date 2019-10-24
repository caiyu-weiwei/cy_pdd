import {
  HOME_CASUAL
} from './mutation-types'
export default {
  /**
   * 首页轮播
   * @param {*} state 
   * @param {*} param1 
   */
  [HOME_CASUAL](state, {homecasual}) {
    state.homecasual = homecasual
  }
}