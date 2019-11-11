import {
  getHomeCasual,
  getHomeNav,
} from 'api'
import {
  HOME_CASUAL,
  HOME_NAV
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
  }
}