<template>
  <div class="bookShelf">
    <SettingDrawer></SettingDrawer>
    <header id="header" class="mui-bar mui-bar-transparent">
      <div class="top">
        <a @click="showDrawer(true)"
           class="mui-action-back mui-icon mui-icon-contact mui-icon-icon-contact-filled mui-pull-left"></a>

        <mu-menu cover class="menu">
          <!--<mu-button color="primary">dropdown</mu-button>-->
          <mu-icon value="more_vert" size="30" class="icon1"></mu-icon>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-title>导入书籍</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>按分组找书</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>批量管理</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>连载更新提醒</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>扫一扫</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>

        <mu-icon value="search" size="30" class="icon" @click="goSearch"></mu-icon>
      </div>
      <div class="content-top">
        <div class="item">
          <mu-icon value="card_giftcard" size="30" class="icon"></mu-icon>
          <span class="content-span1">0</span>
          <span class="content-span2">本周阅读时长/分钟</span>
          <span class="content-span3">今日奖励：成长值</span>
          <span class="content-span4" ref="dv" @click="addBooks">{{addBook}}</span>
        </div>
      </div>
      <div class="recommend">
        <span class="recommend-icon">荐</span>
        <span class="recommend-text">全球巅峰！万兵之王</span>
      </div>
    </header>
    <div class="list">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" @click="goBookDetails(bookList)"
            v-for="bookList in bookList" :key="bookList.bid">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="bookList.book_cover">
            <div class="mui-media-body">
              {{bookList.bookname}}
              <p class='mui-ellipsis'>更新至：第{{bookList.chapterNum}}章 {{bookList.topic}} </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  import SettingDrawer from '../components/settingDrawer/SettingDrawer.vue'
  import {mapMutations} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../store/mutation-types'
  import {Toast} from 'vant'
  export default {
      data() {
        return {
          bookList: [],
          addBook: '立即签到'
        }
      },
    methods: {
      ...mapMutations({showDrawer: TOGGLE_SETDRAWER}),
      goSearch() {
        this.$router.push({path: '/searchview'})
      },
      goBookPage(bookList) {
        this.$router.push({name: 'bookPage', params: {id: bookList}})
      },
      addBooks() {
        Toast('签到成功')
        if (this.addBook === '立即签到') {
          this.addBook = '已签到'
          this.$refs.dv.click = null
        }
      },
      goBookDetails(bookList) {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
        this.$router.push({name: 'bookDetails', params: {id: bookList}})
      }
    },
    created() {
      this.axios('/api/bookList')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.bookList = res.data
//            console.log(res.data)
          }
        })
    },
    components: {
      SettingDrawer
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .bookShelf
    overflow: hidden
    #header
      background: linear-gradient(to right, #61AAEF 0%, #3D9BFF 35%, #3A93F1 70%)
      background-size: 100% 200px
      height: 245px
      width: 100%
      position: relative
      .top
        height: 45px
        left: 0
        width: 100%
        position: fixed
        z-index: 9999
        background: linear-gradient(to right, #61AAEF 0%, #3D9BFF 35%, #3A93F1 70%)
        .mui-icon-icon-contact-filled
          color: #fff
          margin-top: -2px
          font-size: 30px
        .icon
          color: #fff
          float: right
          margin-top: 5px
        .menu
          float: right
          .icon1
            color: #fff
            margin-top: 5px
            float: right
      .content-top
        width: 100%
        .item
          margin: 0 185px
          width: 100%
          .icon
            margin: 58px 68px 0 0

            padding-left: 50px
            color: #fff
          .content-span1
            font-size: 50px
            color: #fff
            display: block
          .content-span2
            font-size: 12px
            color: yellow
            padding-top: 5px
            margin-left: -30px
            display: block
          .content-span3
            color: #fff
            margin-left: -165px
            padding-top: 10px
          .content-span4
            color: #fff
            margin-right: 205px
            margin-top: 0px
            float: right
            border-radius: 20px
            border: 1px solid #fff
      .recommend
        height: 40px
        width: 320px
        line-height: 40px
        background: #fff
        color: #fff
        border-radius: 15px
        border: 1px solid #e6e6e6
        margin: 10px 35px
        z-index: 99
        position: absolute
        .recommend-icon
          color: #fff
          font-size: 16px
          margin-left: 10px
          background: darkred
        .recommend-text
          margin-left: 5px
          font-size: 16px
          color: #3D9BFF
    .list
      margin-top: 40px
      ul
        li
          height: 100px
          line-height: 35px
          a
            .mui-media-object
              height: 60px
</style>
