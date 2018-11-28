<template>
  <div class="selected">
    <!--header区域-->
    <header id="header" class="mui-bar mui-bar-transparent">
      <a @click="showDrawer(true)"
         class="mui-action-back mui-icon mui-icon-contact mui-icon-icon-contact-filled mui-pull-left"></a>
      <mu-sub-header class="searchWapper" @click="goSearch">
        <div class="searchBar">
          <mu-icon value="search" size="20" class="icon"></mu-icon>
          <span class="text">搜索</span>
        </div>
      </mu-sub-header>
    </header>
    <Setting-drawer></Setting-drawer>
    <!--轮播-->
    <Swiper :imgList="friend"></Swiper>
    <!--五宫格-->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="goRanKing">
          <img src="../../static/img/01.png" alt="">
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="goRanKing">
          <img src="../../static/img/02.png" alt="">
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="goRanKing">
          <img src="../../static/img/03.png" alt="">
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="goRanKing">
          <img src="../../static/img/04.png" alt="">
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" @click="goRanKing">
          <img src="../../static/img/05.png" alt="">
        </li>
      </ul>
    </div>
    <!--今日必读-->
    <div class="today">
      <div class="today-title">今日必读</div>
      <div class="today-content" v-for="(item,index) in select" :key="index">
        <div class="index1" v-show="index===0" @click="go(item)">
          <div class="index1-img">  <!--书照片-->
            <img :src="item.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{item.title}}
            </div>
            <div class="index1-desc">
              {{item.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
              <span class="index1-bottom-right">
                 <span class="index1-tags">
                     {{item.tags}}
                </span>
                <span class="index1-words">
                  {{item.words}}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div class="today-middle">
          <div class="tm-left" v-show="index===3" @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
          <div class="tm-right" v-show="index===4" @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
        </div>

        <div class="today-bottom">
          <div class="tm-left" v-show="index===5" @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
          <div class="tm-right" v-show="index===6" @click="go(item)">
            <div> {{item.title}}</div>
            <div class="mi">
              <span class="index1-desc">
                {{item.desc}}
              </span>
              <span class="index1-img">  <!--书照片-->
               <img :src="item.cover">
              </span>
            </div>
            <div class="index1-bottom"><!--作者-->
              <span class="index1-author">
                <span></span>
                {{item.author}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="many" @click="more(select)">查看更多</div>
    </div>
    <div class="line"></div>

    <!--爆款限免-->
    <div class="freeBtn">
      <div class="free-title">爆款限免</div>
      <div class="free-content" v-for="(it,index) in free" :key="index">
        <div class="index1" v-show="index===0" @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
        <div class="index1" v-show="index===1" @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
        <div class="index1" v-show="index===2" @click="go(it)">
          <div class="index1-img">  <!--书照片-->
            <img :src="it.cover">
          </div>
          <div class="index1-right"> <!--右边内容-->
            <div class="index1-title">
              {{it.title}}
            </div>
            <div class="index1-desc">
              {{it.desc}}
            </div>
            <div class="index1-bottom">
              <span class="index1-author">
                <span></span>
                {{it.author}}
              </span>
              <span class="index1-bottom-right">
                 免费
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="many" @click="more(free)">查看更多</div>
    </div>
    <div class="line"></div>

    <!--主编推荐-->
    <div class="recommend">
      <div class="recommend-title">主编推荐</div>
      <div class="recommend-content">
        <div class="com1" v-for="(num,index) in recommend" v-if="index<1" :key="index">
          <div v-show="index===0" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
            <div class="com-title">{{num.title}}</div>
            <div class="com-author">{{num.author}}</div>
          </div>
        </div>
        <div class="com2" v-for="(num,index) in recommend" v-if="index===2" :key="index">
          <div v-show="index===2" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
            <div class="com-title">{{num.title}}</div>
            <div class="com-author">{{num.author}}</div>
          </div>
        </div>
        <div class="com3" v-for="(num,index) in recommend" v-if="index===3" :key="index">
          <div v-show="index===3" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
            <div class="com-title">{{num.title}}</div>
            <div class="com-author">{{num.author}}</div>
          </div>
        </div>
        <div class="com4" v-for="(num,index) in recommend" v-if="index===4" :key="index">
          <div v-show="index===4" @click="go(num)">
              <span class="index1-img">  <!--书照片-->
               <img :src="num.cover">
              </span>
            <div class="com-title">{{num.title}}</div>
            <div class="com-author">{{num.author}}</div>
          </div>
        </div>
      </div>
      <!--v-for="(num,index) in recommend" :key="index"-->
    </div>
    <div class="line"></div>

    <!--品质好书-->
    <div class="good">
      <div class="good-title">品质好书</div>
      <div class="goodcontent">
        <div class="good-l" v-for="(go,index) in good" :key="index" v-if="index===0" @click="now(go)">
          <div class="good-top">
            <div class="tl">
              <img :src="go.cover">
            </div>
            <div class="tr">
              <div class="dv1">{{go.title}}</div>
              <div class="dv2">{{go.author}}</div>
              <div class="conbtn">
                <span class="span1">小说</span>
                <span class="span2">{{go.tags}}</span>
              </div>
            </div>
          </div>
          <div class="good-bottom">
            {{go.desc}}
          </div>
        </div>

        <div class="good-r" v-for="(to,index) in good" :key="index" v-if="index===1" @click="now(to)">
          <div class="good-top">
            <div class="tl">
              <img :src="to.cover">
            </div>
            <div class="tr">
              <div>{{to.title}}</div>
              <div>{{to.author}}</div>
              <div class="conbtn">
                <span>小说</span>
                <span>{{to.tags}}</span>
              </div>
            </div>
          </div>
          <div class="good-bottom">
            {{to.desc}}
          </div>
        </div>
      </div>
    </div>
    <div class="many" @click="more(good)">查看更多</div>
    <div class="line"></div>

    <div class="margin">
    </div>
  </div>
</template>

<script>
  import SettingDrawer from '../components/settingDrawer/SettingDrawer.vue'
  import Swiper from './Swiper/Swiper.vue'
  import {mapMutations} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../store/mutation-types'
  export default {
    name: 'selected',
    data() {
      return {
        friend: [],
        select: [],
        free: [],
        recommend: [],
        good: []
      }
    },
    created() {
      this.axios('/api/friend')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.friend = res.data
//            console.log(res.data)
          }
        })
      this.axios('./api/select')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
//              console.log(res.data[0].today)
            this.select = res.data[0].today
//              console.log(res.data[1].free)
            this.free = res.data[1].free
//            console.log(res.data[2].recommend)
            this.recommend = res.data[2].recommend
//              console.log(res.data[3].good)
            this.good = res.data[3].good
          }
        })
    },
    methods: {
      ...mapMutations({showDrawer: TOGGLE_SETDRAWER}),
      goSearch() {
        this.$router.push({path: '/searchview'})
      },
      goRanKing() {
        this.$router.push({path: '/rankings'})
      },
      goFree() {
        this.$router.push({path: '/free'})
      },
      goMonthly() {
        this.$router.push({path: '/monthlypackage'})
      },
      gogBook() {
        this.$router.push({path: '/booklist'})
      },
      goFiniShed() {
        this.$router.push({path: '/finished'})
      },
      go(idname){
        this.$router.push({name: 'detailsView', params: {id: idname}})
      },
      now(idname){
        this.$router.push({name: 'detailsView', params: {id: idname}})
      },
      more(jsonname){
        this.$router.push({name: 'more', params: {id: jsonname}})
      }
    },
    components: {
      Swiper,
      SettingDrawer
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .selected
    overflow-x: hidden
    #header
      padding: 0
      .mui-icon-icon-contact-filled
        color: #fff
        margin: -5px 0
        font-size: 30px
      .searchWapper
        box-sizing: border-box
        height: 45px
        width: 100%
        padding: 10px
        background: transparent
        .searchBar
          background: #fff
          height: 100%
          border-radius: 4px
          margin-left: 25px
          .icon
            display: inline-block
            vertical-align: top
            line-height: 25px
            margin-left: 5px
          .text
            display: inline-block
            line-height: 25px
            font-size: 12px
            vertical-align: top
    .mui-content
      background-color: #fff
      .mui-grid-view
        background-color: #fff
        border: none
        display: flex
        li
          border: none
          display: inline-block
          flex: 1
          img
            width: 50px
            height: 50px
    .today
      margin-left: 10px
      margin-right: 10px
      .today-title
        margin-top: 10px
        font-weight: 800
        font-size: 16px
      .today-content
        .index1
          display: flex
          margin-top: 5px
          margin-bottom: 5px
          border-bottom: 1px solid rgba(0, 0, 0, 0.1)
          .index1-img
            flex: 0 0 70px
            img
              width: 70px
              height: 100px
          .index1-right
            flex: 1
            margin-left: 15px
            .index1-title
              font-size: 18px
              font-weight: 700
            .index1-desc
              margin-top: 5px
              /*height: 50px;*/
              font-size: 13px
              color: rgba(0, 0, 0, 0.5)
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
              overflow: hidden
            .index1-bottom
              margin-top: 5px
              .index1-author
                span
                  color: rgba(0, 0, 0, 0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  margin-top: 2px
              .index1-bottom-right
                float: right
                .index1-tags
                  padding: 1px
                  border-radius: 4px
                  font-size: 11px
                  border: 1px solid rgba(0, 0, 0, 0.5)
                .index1-words
                  margin-left: 8px
                  padding: 1px
                  border-radius: 4px
                  font-size: 11px
                  border: 1px solid rgba(0, 0, 0, 0.5)
        .today-middle
          .tm-left
            float: left
            width: 49%
            border-right: 1px solid #ccc
            .mi
              padding-bottom: 40px
              .index1-desc
                width: 100px
                font-size: 12px
                float: left
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
              .index1-img
                img
                  float: right
                  width: 50px
                  height: 65px
                  margin-right: 10px
            .index1-bottom
              padding-top: 5px
              font-weight: 200
              font-size: 13px
              padding-bottom: 10px
              border-bottom: 1px solid rgba(0,0,0,0.1)
              .index1-author
                span
                  color: rgba(0, 0, 0, 0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  margin-top: 2px
          .tm-right
            float: right
            width: 49%
            margin-left: 5px
            .mi
              .index1-desc
                width: 100px
                font-size: 12px
                float: left
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
              .index1-img
                margin-top: 2px
                img
                  width: 50px
                  height: 65px
                  margin-left: 32px
            .index1-bottom
              padding-top: 5px
              font-weight: 200
              font-size: 13px
              padding-bottom: 10px
              margin-top: -26px
              border-bottom: 1px solid rgba(0,0,0,0.1)
              .index1-author
                span
                  color: rgba(0, 0, 0, 0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  /*margin-top: 2px*/
        .today-bottom
          .tm-left
            float: left
            width: 49%
            border-right: 1px solid #ccc
            .mi
              padding-bottom: 40px
              .index1-desc
                width: 100px
                font-size: 12px
                float: left
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
              .index1-img
                img
                  float: right
                  width: 50px
                  height: 65px
                  margin-right: 10px
            .index1-bottom
              padding-top: 5px
              font-weight: 200
              font-size: 13px
              padding-bottom: 10px
              border-bottom: 1px solid rgba(0,0,0,0.1)
              .index1-author
                span
                  color: rgba(0, 0, 0, 0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  margin-top: 2px
          .tm-right
            float: right
            width: 49%
            margin-left: 5px
            .mi
              .index1-desc
                width: 100px
                font-size: 12px
                /*float: left*/
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
              .index1-img
                margin-top: 2px
                float: right
                img
                  float: right
                  width: 50px
                  height: 65px
                  margin-right: 10px
                  margin-top: -47px
            .index1-bottom
              padding-top: 5px
              font-weight: 200
              font-size: 13px
              padding-bottom: 10px
              border-bottom: 1px solid rgba(0,0,0,0.1)
              .index1-author
                span
                  color: rgba(0, 0, 0, 0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  margin-top: 2px
      .many
        width: 100%
        text-align: center
        margin: 0 120px
        line-height: 50px
        color: deepskyblue

    /*爆款限免*/
    .freeBtn
      margin-left: 10px
      margin-right: 10px
      width: 100%
      height: 413px
      .free-title
        margin-top: 10px
        font-weight: 800
        font-size: 16px
      .free-content
        width: 100%
        .index1
          display: flex
          margin-top: 5px
          margin-bottom: 5px
          border-bottom: 1px solid rgba(0,0,0,0.1)
          .index1-img
            flex: 0 0 70px
            img
              width: 70px
              height: 100px
              margin-right: 5px
          .index1-right
            margin-right: 20px
            .index1-title
              font-size: 18px
              font-weight: 700
            .index1-desc
              margin-top: 5px
              /*height: 50px;*/
              font-size: 13px
              color: rgba(0,0,0,0.5)
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
              overflow: hidden
            .index1-bottom
              margin-top: 5px
              .index1-author
                span
                  color: rgba(0,0,0,0.5)
                  display: inline-block
                  width: 16px
                  height: 16px
                  background: url("../../static/img/header.png")
                  vertical-align: bottom
                  margin-top: 2px
              .index1-bottom-right
                float: right
                margin-right: 10px
                color: indianred
      .many
        width: 100%
        text-align: center
        /*margin: 0 120px*/
        line-height: 50px
        color: deepskyblue
    .recommend
      margin-left: 10px
      margin-right: 10px
      width: 100%
      height: 174px
      .recommend-title
        margin-top: 10px
        font-weight: 800
        font-size: 16px
      .recommend-content
        display: flex
        .com1
          flex: 1
          div
            .index1-img
              flex: 0 0 70px
              img
                width: 70px
                height: 100px
                margin-right: 5px
            .com-title
              width: 70px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .com-author
              font-size: 12px
              color: #cccccc
        .com2
          flex: 1
          div
            .index1-img
              flex: 0 0 70px
              img
                width: 70px
                height: 100px
                margin-right: 5px
            .com-title
              width: 70px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .com-author
              font-size: 12px
              color: #cccccc
        .com3
          flex: 1
          div
            .index1-img
              flex: 0 0 70px
              img
                width: 70px
                height: 100px
                margin-right: 5px
            .com-title
              width: 70px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .com-author
              font-size: 12px
              color: #cccccc
        .com4
          flex: 1
          div
            .index1-img
              flex: 0 0 70px
              img
                width: 70px
                height: 100px
                margin-right: 5px
            .com-title
              width: 70px
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .com-author
              font-size: 12px
              color: #cccccc
    .good
      margin-left: 10px
      margin-right: 10px
      width: 100%
      /*background: #ccc;*/
      height: 200px
      .good-title
        margin-top: 10px
        font-weight: 800
        font-size: 16px
      .goodcontent
        display: flex
        margin-right: 10px
        .good-l
          flex: 1
          /*background: #ccc;*/
          margin-right: 5px
          .good-top
            display: flex
            .tl
              flex: 1
              img
                width: 90px
                height: 120px
            .tr
              flex: 1
              .dv1
                font-size: 16px
                margin-left: 10px
                margin-top: 8px
                font-weight: 700
              .dv2
                color: rgba(0, 0, 0, 0.6)
                font-size: 12px
                margin-left: 10px
                margin-top: 5px
              .conbtn
                margin-top: 40px
                span
                  color: rgba(0, 0, 0, 0.4)
                  border: 1px solid rgba(0, 0, 0, 0.4)
                  border-radius: 4px
                  margin-left: 4px
                  padding: 1px 2px
                .span1
                .span2
          .good-bottom
            margin-top: 5px
            font-size: 13px
            color: rgba(0, 0, 0, 0.7)
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
        .good-r
          flex: 1
          margin-right: 5px
          .good-top
            display: flex
            .tl
              flex: 1
              img
                width: 90px
                height: 120px
            .tr
              flex: 1
              .dv1
                font-size: 16px
                margin-left: 10px
                margin-top: 8px
                font-weight: 700
              .dv2
                color: rgba(0, 0, 0, 0.6)
                font-size: 12px
                margin-left: 10px
                margin-top: 5px
              .conbtn
                margin-top: 40px
                span
                  color: rgba(0, 0, 0, 0.4)
                  border: 1px solid rgba(0, 0, 0, 0.4)
                  border-radius: 4px
                  margin-left: 4px
                  padding: 1px 2px
                .span1
                .span2
          .good-bottom
            margin-top: 5px
            font-size: 13px
            color: rgba(0, 0, 0, 0.7)
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
    .many
      width: 100%
      text-align: center
      /*margin: 0 120px*/
      line-height: 50px
      color: deepskyblue
    .margin
      margin-bottom: 60px
</style>
