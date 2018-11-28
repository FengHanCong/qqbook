<template>
  <div class="details">
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="go"></a>
      <h1 class="mui-title">书籍信息</h1>
    </header>
    <div class="details-content">
      <div class="content-img dv"><img :src="DetailsData.cover" alt=""></div>
      <div class="content-text dv">
        <p class="text1">{{DetailsData.title}}</p>
        <p>
          <span>8.2分</span>&nbsp;
          <span>(128评)</span>
        </p>
        <p class="text3"><span>{{DetailsData.tags}}&nbsp;|&nbsp;{{DetailsData.author}}</span></p>
        <p>
          <span>{{DetailsData.first_cid}}字</span>&nbsp;
          <span>免费</span>
        </p>
      </div>
    </div>
    <div class="details-center">
      <div class="dv1"><p>1.2万</p>
        <p>收藏</p></div>
      <div class="dv1"><p>3.7万</p>
        <p>读过</p></div>
      <div class="dv1"><p>5000+</p>
        <p>赞赏</p></div>
    </div>
    <!--<div class="center-text">-->
    <!--<p red="text">{{DetailsData.desc}}</p>-->
    <!--<mu-icon value="arrow_drop_down" size="45" class="icon"></mu-icon>-->
    <!--</div>-->
    <ShowHidden :textData="DetailsData"></ShowHidden>
    <div class="line"></div>
    <div class="button">
      <div @click="downLoad">
        <mu-icon value="vertical_align_bottom" size="30" class="icon"></mu-icon>
        <div>下载</div>
      </div>
      <div class="read" @click="goBookPage(DetailsData)">
        <mu-icon value="import_contacts" size="30" class="icon"></mu-icon>
        <div class="read-text">免费阅读</div>
      </div>
      <div @click="addBooks" ref="dv">
        <mu-icon value="add_box" size="30" class="icon"></mu-icon>
        <div ref="div">{{addBook}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShowHidden from './ShowHidden.vue'
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        addBook: '加入书架',
        DetailsData: this.$route.params.id
      }
    },
    methods: {
      downLoad() {
        Toast.fail('下载失败')
      },
      go() {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
        this.$router.go(-2)
      },
      addBooks() {
        Toast('加入书架成功')
        if (this.addBook === '加入书架') {
          this.addBook = '已在书架'
          this.$refs.dv.style.color = '#ccc'
          this.$refs.div.style.color = '#ccc'
          this.$refs.dv.click = null
        }
      },
      goBookPage(DetailsData) {
        this.$router.push({name: 'bookPage', params: {id: DetailsData}})
      }
    },
    components: {
      ShowHidden
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .details
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #fff
    z-index: 50
    #header
      position: relative
      background-color: #007aff
      .mui-pull-left
        color: #fff
      .mui-title
        color: #fff
    .details-content
      position: relative
      width: 100%
      .dv
        float: left
      .content-img
        margin: 5px 0 10px 10px
        img
          width: 100px
          height: 150px
      .content-text
        margin: 5px 0 10px 10px
        .text1
          font-size: 18px
          font-weight: bold
          color: #000000
        .text3
          color: #007aff
    .details-center
      display: flex
      clear: both
      .dv1
        flex: 1
        text-align: center
    /*.center-text
      position: relative
      margin: 10px
      padding: 10px 0 10px 0
      border-top: 1px solid #e6e6e6
      border-bottom: 1px solid #e6e6e6*/
      /*p
        display: inline-block
        font-size: 14px
        line-height: 30px
        color: rgba(0, 0, 0, 0.5)
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        overflow: hidden*/
    /*.icon
      display: inline-block
      position: absolute
      right: -10px
      bottom: -10px
      color: rgba(0, 0, 0, 0.5)*/
    .Catalog
      line-height: 37px
      border-top: 1px solid #e6e6e6
      /*border-bottom: 1px solid #e6e6e6*/
      .span1
        color: #000000
        font-size: 18px
        margin: auto 10px
      .span2
        color: #cccccc
        font-size: 16px
    .line
      width: 100%
      height: 3px
      background: #D5D5D5
    .button
      position: fixed
      bottom: 0
      left: 0
      right: 0
      display: flex
      div
        flex: 1
        text-align: center
        color: #007aff
      .read
        background: #007aff
        color: #fff
        .read-text
          color: #fff
</style>
