/**
 * Created by main on 2018/11/26.
 */
import * as types from './mutation-types'
import axios from 'axios'

export default {
  showChat({commit}, user) {
    // 修改当前聊天用户信息
    commit(types.RECEVIVE_CURRENT_USER, user)
    commit(types.TOGGLE_CHAT, true)
  },
  getRanking({commit}) {
    axios.get('/api/ranking')
      .then(res => {
        res = res.data
        // console.log(res, 'rankingget')
        if (res.ok) {
          commit(types.SET_RANKING, res.rankings)
        }
      })
  }
}
