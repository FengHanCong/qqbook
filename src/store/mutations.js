/**
 * Created by main on 2018/11/20.
 */
import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.TOGGLE_SETDRAWER](state, val) { // 显示/隐藏 侧边栏
    state.chat = val
    console.log('123')
  },
  [types.TOGGLE_SEARCH_VIEW](state, val) {
    // state.showSearch = val
  },
  [types.TOGGLE_CHAT](state, val) { // 显示，隐藏，页面
    state.chat = val
  },
  [types.RECEVIVE_CURRENT_USER](state, user) {

  },
  [types.SET_BOOK_INFO] (state, bookInfo) {
    state.bookInfo = bookInfo
  },
  [types.SET_INDEX] (state, bookInfo) {
    let flag = false
    state.bookshelf.forEach((val) => {
      if (val._id === bookInfo._id) {
        flag = true
      }
    })
    if (flag) {
      let index = state.bookshelf.findIndex(m => {
        return m._id === bookInfo._id
      })
      Vue.set(state.bookshelf[index], 'readedLastChapter', bookInfo.readedLastChapter)
    }
  },
  // 将rankings存放到vuex中
  [types.SET_RANKING] (state, rankings) {
    state.rankings = rankings
    // console.log(state.rankings)
  },
  // 加入书架
  [types.SET_BOOK_SHELF] (state, bookInfo) {
    let flag = true
    state.bookshelf.forEach((val) => {
      if (val._id === bookInfo._id) {
        flag = false
      }
    })
    if (flag) {
      state.bookshelf.push(bookInfo)
    }
    console.log(state.bookshelf)
  },
  // 删除书
  [types.DEL_BOOK_SHELF] (state, bookInfo) {
    // console.log(bookInfo)
    let index = state.bookshelf.findIndex(m => {
      return m._id === bookInfo._id
    })
    state.bookshelf.splice(index, 1)
    // console.log(state.bookshelf)
  }
}
