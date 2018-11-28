/**
 * Created by main on 2018/11/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  chat: false,
  showSearch: false, // 展示搜索页面
  headerTitle: '发现',
  rankings: [],
  titleDesc: {
    bookshelf: '书架',
    discover: '发现',
    category: '分类',
    search: '搜索'
  },
  bookshelf: [], // 保存书架的内容
  bookRealId: '', // 保存书的源Id
  bookId: '', // 保存书的id
  bookInfo: {} // 保存书的信息
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
