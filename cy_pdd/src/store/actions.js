import {
  getHomeCasual,
} from 'api'
import {
  HOME_CASUAL
} from './mutation-types'
export default {
  /**
   * 获取首页轮播图
   */
  async reqHomeCasual({commit}) {
    const request = await getHomeCasual()
    commit(HOME_CASUAL, request.message.data)
  }
}