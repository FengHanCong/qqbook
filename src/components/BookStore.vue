<template>
  <div class="bookStore">
    <SettingDrawer></SettingDrawer>
    <header id="header" class="mui-bar mui-bar-transparent">
      <a @click="showDrawer(true)"
         class="mui-action-back mui-icon mui-icon-contact mui-icon-icon-contact-filled mui-pull-left"></a>
      <span>书库</span>
      <mu-icon value="search" size="30" class="icon" @click="goSearch"></mu-icon>
    </header>
    <!--分类-->
    <mu-tabs :value.sync="active" inverse color="#2196f3" indicator-color="#2196f3">
      <ul v-for="rec in className" :key="rec.name">
        <li>
          <mu-tab>{{rec.name}}</mu-tab>
        </li>
      </ul>
    </mu-tabs>
    <div class="demo-text" v-if="active === 0">
      <div class="bang">
        <mu-ripple class="mu-ripple-demo demo-1" @click="goRanKing()">
          风云榜
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo demo-2" color="yellow" :opacity="0.7" @click="goRanKing()">
          畅销榜
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo demo-3" color="red" :opacity="0.5" @click="goRanKing()">
          新书榜
        </mu-ripple>
      </div>
      <div class="small_img" v-for="item in classData" :key="item.classBook"
           @click="goBookDetails(item)">
          <img :src="item.classImg" v-lazy="item.classImg">
        <!--<img :src="item.classImg" alt="">-->
        <span>{{item.classBook}}</span>
        <span>{{item.classNum}}册</span>
        <br>
        <br>
        <br>
      </div>
    </div>
    <div class="demo-text" v-if="active === 1">
      <div class="small_img" v-for="item in classData2" :key="item.classBook" @click="goBookDetails(item)">
        <!--<img :src="item.classImg" alt="">-->
        <img :src="item.classImg" v-lazy="item.classImg">
        <span>{{item.classBook}}</span>
        <span>{{item.classNum}}册</span>
        <br>
        <br>
        <br>
      </div>
    </div>
    <div class="demo-text test" v-if="active === 2">
      <div class="bang">
        <mu-ripple class="mu-ripple-demo demo-1" @click="goRanKing(item)">
          风云榜
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo demo-2" color="yellow" :opacity="0.7" @click="goRanKing()">
          畅销榜
        </mu-ripple>
        <mu-ripple class="mu-ripple-demo demo-3" color="red" :opacity="0.5" @click="goRanKing()">
          新书榜
        </mu-ripple>
      </div>
      <div class="small_img" v-for="item in classData3" :key="item.classBook" @click="goBookDetails()">
        <!--<img :src="item.classImg" alt="">-->
        <img :src="item.classImg" v-lazy="item.classImg">
        <span>{{item.classBook}}</span>
        <span>{{item.classNum}}册</span>
        <br>
        <br>
        <br>
      </div>
    </div>
    <div class="bottom"></div>
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
        active: 0,
        bookStore: [],
        className: [],
        classData: [],
        classData2: [],
        classData3: []
      }
    },
    created() {
      this.axios('/api/classData')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.classData = res.data
//            console.log(res.data)
          }
        })
      this.axios('/api/className')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.className = res.data
//            console.log(res.data)
          }
        })
      this.axios('/api/classData2')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.classData2 = res.data
//            console.log(res.data)
          }
        })
      this.axios('/api/classData3')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.classData3 = res.data
//            console.log(res.data)
          }
        })
    },
    methods: {
      ...mapMutations({showDrawer: TOGGLE_SETDRAWER}),
      goSearch() {
        this.$router.push({path: '/searchview'})
      },
      goBookDetails(item) {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
        this.$router.push({name: 'bookDetails', params: {id: item}})
      },
      goRanKing() {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
//        this.$router.push({name: 'rankings', params: {id: item}})
        this.$router.push({path: './rankings'})
      }
    },
    components: {
      SettingDrawer
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .bookStore
    #header
      position: fixed
      background: linear-gradient(to right, #61AAEF 0%, #3D9BFF 35%, #3A93F1 70%)
      background-size: 100% 200px
      height: 45px
      line-height: 45px
      width: 100%
      z-index: 9999
      .mui-icon-icon-contact-filled
        color: #fff
        margin-top: -2px
        font-size: 30px
      span
        margin: 0 143px
        color: #ffffff
        font-size: 18px
      .icon
        color: #fff
        margin-top: 8px
    .mu-tabs-inverse
      margin-top: 48px
      flex: 0 0 80px
      width: 100%
      height: 40px
      overflow: hidden
      background: #ededed
      margin-left: 0
      ul
        list-style: none
        li
        position: relative
        flex: 1
        margin-bottom: 1px
        display: table
        padding: 0 12px
        width: 56px
        height: 54px
    .demo-text
      margin-left: 2px
      margin-right: 2px
      display: flex
      flex-wrap: wrap
      position: absolute
      top: 85px
      padding: 7px
      background: #fff
      justify-content: space-between
      .bang
        display: flex
        width: 100%
        margin-left: 10px
        /*button*/
          /*flex: 1*/
          /*width: 33.3%*/
        .mu-ripple-demo
          position: relative
          flex: 1
          height: 50px
          display: flex
          justify-content: center
          align-items: center
          margin-right: 16px
          background-color: #fff
          border-radius: 4px
          &.demo-1
            color: #2196f3
            border: 1px solid #2196f3
          &.demo-2
            background-color: #2196f3
            color: #fff
          &.demo-3
            background-color: #4caf50
            color: #fff

      .small_img
        width: 49%
        margin: 4px 0
        padding: 2px
        text-align: center
        flex-direction: column
        justify-content: space-between
        min-height: 72px
        img
          width: 100%
</style>
