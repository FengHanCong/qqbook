<template>
  <div class="details">
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="go"></a>
      <h1 class="mui-title">书籍信息</h1>
    </header>
    <div class="details-content">
      <div class="content-img dv"><img :src="bookInfo.cover" alt=""></div>
      <div class="content-text dv">
        <p class="text1">{{bookInfo.title}}</p>
        <p>
          <span>8.2分</span>&nbsp;
          <span>(128评)</span>
        </p>
        <p class="text3"><span>{{bookInfo.majorCate}} / {{bookInfo.minorCate}}&nbsp;|&nbsp;{{bookInfo.author}}</span>
        </p>
        <p>
          <span>{{(bookInfo.wordCount / 10000).toFixed(2)}}万字</span>&nbsp;
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
    <ShowHidden></ShowHidden>
    <div class="line"></div>
    <div class="button">
      <div @click="downLoad">
        <mu-icon value="vertical_align_bottom" size="30" class="icon"></mu-icon>
        <div>下载</div>
      </div>
      <div class="read" @click="goBookPage">
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
    '$route' (to, from) {
      if (to.name === 'detailsView') {
        this.getBookDetail()
//        this.getSources()
        this.$store.commit()
      }
    },
    data() {
      return {
        addBook: '加入书架',
        bookInfo: {}, // 存放小说信息
        flag: false
      }
    },
    // 在路由进入前发起请求获取数据
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.getBookDetail()
      })
    },
    methods: {
      // 获取书本详细信息
      getBookDetail() {
        if (this.$route.params.bookId) {
          this.axios.get('/api/book/' + this.$route.params.bookId)
            .then(res => {
//               console.log(res)
              // 网络请求完成时候res.status为200
              if (res.status === 200) {
                res = res.data
//                console.log(res)
                // 获取小说信息
                this.bookInfo = res
                // 将小说的图片网址路径进行解码
                this.$set(this.bookInfo, 'cover', this.decodeUrl(this.bookInfo.cover))
                // 给小说信息添加一个属性用于存放阅读的最后一个章节索引
                Object.assign(this.bookInfo, {
                  readedLastChapter: 0
                })
                this.flag = true
              }
            })
        }
      },
//      返回到上一句router
      back() {
        this.flag = false
        this.$router.go(-1)
      },
//      解码图片路径
      decodeUrl(url) {
        return decodeURIComponent(url).substring(7)
      },
//      点击阅读
      goBookPage() {
        this.$router.push({name: 'bookPage', params: {bookInfo: this.bookInfo}})
      },
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
      // 添加到小说书架
      addBooks() {
        this.$store.commit('SET_BOOK_SHELF', this.bookInfo)
        Toast('加入书架成功')
        if (this.addBook === '加入书架') {
          this.addBook = '已在书架'
          this.$refs.dv.style.color = '#ccc'
          this.$refs.div.style.color = '#ccc'
          this.$refs.dv.click = null
        }
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
