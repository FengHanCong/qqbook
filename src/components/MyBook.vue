<template>
  <div class="bookShelfView" ref="bookShelfView">
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">书架</h1>
    </header>
    <div class="bookShelfWrapper">
      <!--代替图标，在书架没有书之前显示-->
      <div class="icon-container icon" @click="findBook" v-if="bookshelf.length > 0 ? false : true">
        <mu-icon size="56" value="import_contacts" color="blue"></mu-icon>
        <span>找书</span>
      </div>
      <!--书架列表-->
      <div class="bookShelfListWrapper">
        <!--列-->
        <div class="bookShelfList" v-for="(item, index) in bookshelf" :key="index" @click="turn(item)">
          <!--小说图片-->
          <div class="b-cover">
            <img :src="item.cover" width="80" ref="pic"/>
          </div>
          <!--小说信息-->
          <div class="b-text">
            <!--标题-->
            <span class="b-title">{{item.title}}</span>
            <!--作者-->
            <span class="b-author">{{item.author}}</span>
            <!--更新的最新章节-->
            <span class="b-lastC">{{item.lastChapter}}</span>
          </div>
          <div class="deleteBtn" @click.stop="del(item)">
            删除
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.bookShelfView, {
          click: true
        })
      })
    },
    methods: {
      turn(bookInfo) {
        this.$router.push({name: 'bookPage', params: {bookInfo: bookInfo}})
      },
      del(bookInfo) {
        this.$store.commit('DEL_BOOK_SHELF', bookInfo)
      },
      findBook() {
        this.$router.push('bookstore')
      }
    },
    computed: mapGetters({bookshelf: 'getBookshelf'})
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .bookShelfView
    width: 100%
    height: 100%
    /*margin-top: 10px*/
    #header
      position: fixed
      background-color: #007aff
      .mui-pull-left
        color: #fff
      .mui-title
        color: #fff
    .bookShelfWrapper
      width: 100%
      height: auto
      .icon
        margin-top: 200px
        text-align: center
        span
          display: inline-block
          vertical-align: 75%
      .bookShelfListWrapper
        width: 100%
        height: auto
        /*overflow: hidden*/
        padding: 0 10px
        .bookShelfList
          display: flex
          padding: 8px 0
          height: 140px
          width: 100%
          border: 1px solid #ccc
          .b-cover
            display: inline-block
            flex: 0 0 80px
            width: 80px
            height: 100%
            overflow: hidden
          .b-text
            margin-left: 8px
            display: inline-block
            flex: 1
            & > span
              display: inline-block
              width: 100%
              font-size: 14px
            .b-title
              flex: 1
              font-size: 20px
              margin-bottom: 10px
            .b-author
              margin-bottom: 20px
            .b-lastC
              font-size: 16px
          .deleteBtn
            color: #fff
            background: darkred
            border: 1px solid darkred
            margin: auto 10px
            .icon
              font-size: 18px
</style>
