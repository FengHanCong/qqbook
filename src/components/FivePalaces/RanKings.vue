<template>
  <div class="ranKing">
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="backOff"></a>
      <h1 class="mui-title">排行榜</h1>
    </header>
    <!--left-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content">
        <div class="left">
          <div class="go">
            <div @click="go0" :class="{bg:active===0}">风云榜</div>
            <div @click="go1" :class="{bg:active===1}">畅销榜</div>
            <div @click="go2" :class="{bg:active===2}">完结榜</div>
            <div @click="go3" :class="{bg:active===3}">推荐榜</div>
            <div @click="go4" :class="{bg:active===4}">热搜榜</div>
          </div>
        </div>
        <!--right-->
        <div class="right">
          <div class="man" v-if="active === 0">
            <!--榜1-->
            <div class="man-con">
              <div class="con-l">
                <div class="right-content" v-for="btn in books" :key="btn._id" @click="goDetails(btn)">
                  <div class="contentbtn">
                    <div class="img">
                      <img :src="btn.cover">
                    </div>
                    <!--右边框-->
                    <div class="right">
                      <div class="title">
                        {{btn.title}}
                      </div>
                      <div class="desc">
                        {{btn.shortIntro}}
                      </div>
                      <div class="index1-bottom">
                        <span class="index1-author"><span></span>{{btn.author}}</span>
                        <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.minorCate}}</span>
                  <span class="index1-words" style="border: 1px solid #FF6F20;color: #FF6F20">{{btn.retentionRatio}}月票</span>
                </span>
                      </div>
                    </div>
                  </div>
                  <div class="line"></div>
                </div>
              </div>
            </div>
          </div>

          <!--榜2-->
          <div class="publish" v-if="active === 1">
            <div class="publish-con">
              <div class="right-content" v-for="btn in books1" :key="btn._id" @click="goDetails(btn)">
                <div class="contentbtn">
                  <div class="img">
                    <img :src="btn.cover">
                  </div>
                  <!--右边框-->
                  <div class="right">
                    <div class="title">
                      {{btn.title}}
                    </div>
                    <div class="desc">
                      {{btn.shortIntro}}
                    </div>
                    <div class="index1-bottom">
                      <span class="index1-author"><span></span>{{btn.author}}</span>
                      <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.minorCate}}</span>
                  <span class="index1-words" style="border: 1px solid #FF6F20;color: #FF6F20">{{btn.retentionRatio}}热销</span>
                </span>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="lady" v-if="active ===2 ">
            <!--榜3-->
            <div class="man-con">
              <div class="right-content" v-for="btn in books2" :key="btn._id" @click="goDetails(btn)">
                <div class="contentbtn">
                  <div class="img">
                    <img :src="btn.cover">
                  </div>
                  <!--右边框-->
                  <div class="right">
                    <div class="title">
                      {{btn.title}}
                    </div>
                    <div class="desc">
                      {{btn.shortIntro}}
                    </div>
                    <div class="index1-bottom">
                      <span class="index1-author"><span></span>{{btn.author}}</span>
                      <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.minorCate}}</span>
                  <span class="index1-words" style="border: 1px solid #FF6F20;color: #FF6F20">{{btn.retentionRatio}}人气</span>
                </span>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
          </div>

          <!--榜4-->
          <div class="comic" v-if="active === 3">
            <div class="man-con">
              <div class="right-content" v-for="btn in books3" :key="btn._id" @click="goDetails(btn)">
                <div class="contentbtn">
                  <div class="img">
                    <img :src="btn.cover">
                  </div>
                  <!--右边框-->
                  <div class="right">
                    <div class="title">
                      {{btn.title}}
                    </div>
                    <div class="desc">
                      {{btn.shortIntro}}
                    </div>
                    <div class="index1-bottom">
                      <span class="index1-author"><span></span>{{btn.author}}</span>
                      <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.minorCate}}</span>
                  <span class="index1-words" style="border: 1px solid #FF6F20;color: #FF6F20">{{btn.retentionRatio}}推荐票</span>
                </span>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <!--榜5-->
          <div class="audio" v-if="active === 4">
            <div class="man-con">
              <div class="right-content" v-for="btn in books4" :key="btn._id" @click="goDetails(btn)">
                <div class="contentbtn">
                  <div class="img">
                    <img :src="btn.cover">
                  </div>
                  <!--右边框-->
                  <div class="right">
                    <div class="title">
                      {{btn.title}}
                    </div>
                    <div class="desc">
                      {{btn.shortIntro}}
                    </div>
                    <div class="index1-bottom">
                      <span class="index1-author"><span></span>{{btn.author}}</span>
                      <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.minorCate}}</span>
                  <span class="index1-words" style="border: 1px solid #FF6F20;color: #FF6F20">{{btn.retentionRatio}}搜索</span>
                </span>
                    </div>
                  </div>
                </div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        isLoading: false,
        active: 0,
//        res: [],
//        dataList: []
        books: [],
        books1: [],
        books2: [],
        books3: [],
        books4: []
      }
    },
    created() {
//      this.ranking1()
//      this.ranking2()
      this.axios('/api/books')
        .then(res => {
          res = res.data
          if (res.errno === 0) {
            this.books = res.data.slice(0, 15)
            this.books1 = res.data.slice(15, 30)
            this.books2 = res.data.slice(30, 45)
            this.books3 = res.data.slice(45, 60)
            this.books4 = res.data.slice(60, 80)
//            console.log(res.data)
          }
        })
    },
    methods: {
//      ranking1() {
//          this.axios.get('/api/ranking/gender')
//            .then(res => {
//              if (res.status === 200) {
//                res = res.data.epub
//                console.log(res)
//            }
//            })
//      },
//      ranking2() {
//        this.axios.get('/api/ranking/54d43437d47d13ff21cad58b')
//          .then(res => {
//            if (res.status === 200) {
//              this.dataList = res.data.ranking.books
//              console.log(this.dataList)
//            }
//          })
//      },
      go0() {
        this.active = 0
      },
      go1() {
        this.active = 1
      },
      go2() {
        this.active = 2
      },
      go3() {
        this.active = 3
      },
      go4() {
        this.active = 4
      },
      backOff() {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
        this.$router.go(-1)
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
          this.count++
        }, 500)
      },
      goDetails(btn) {
        Toast.loading({
          mask: true,
          duration: 300,
          message: '加载中...'
        })
        this.$router.push({name: 'detailsView', params: {id: btn}})
      }
    }
  }
</script>

<style scoped>
  .ranKing {
    overflow: hidden;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 50;
  }

  #header {
    position: fixed;
    background-color: #007aff;
  }

  #header .mui-pull-left {
    color: #fff;
  }

  #header .mui-title {
    color: #fff;
  }

  .content {
    display: flex;
    margin-top: 40px;
  }

  /*左边侧导航*/
  .left {
    flex: 0 0 90px;
    /*flex: 0 0 28%;*/
    width: 25%;
    /*height: 555px;*/
  }

  .go {
    position: fixed;
    top: 56px;
    width: 90px;
    margin-top: -40px;
    bottom: 56px;
    background: #F6F6F6;
  }

  .go div {
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .bg {
    background: #fff;
  }

  /*右边内容*/
  .right {
    /*flex: 1;*/
    flex: 75%;
  }

  .right-content {
    margin: 10px;
  }

  .contentbtn {
    display: flex;
  }

  .img {
    flex: 0 0 100px;
  }

  .img img {
    width: 100px;
    height: 140px;
  }

  .right {
    flex: 1;
  }

  .title {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  .desc {
    color: rgba(0, 0, 0, 0.5);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 12px;
    margin-left: 10px;
    margin-top: 8px;
  }

  /*右边底部作者*/
  .index1-bottom {
    margin-top: 30px;
    margin-left: 10px;
  }

  .index1-author span {
    color: rgba(0, 0, 0, 0.5);
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../static/img/header.png");
    vertical-align: bottom;
    margin-top: 2px;
  }

  .index1-bottom-right {
    float: right;
  }

  .index1-tags {
    padding: 1px;
    border-radius: 4px;
    font-size: 11px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  .index1-words {
    margin-left: 8px;
    padding: 1px;
    border-radius: 4px;
    font-size: 11px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  /*男生*/
  .right .man {
    /*margin: 10px;*/
    margin-bottom: 57px;

  }

  .publish {
    /*margin: 10px;*/
    margin-bottom: 57px;
  }

  .man-con {
    /*margin: 10px;*/
    margin-bottom: 57px;
  }

  .comic {
    /*margin: 10px;*/
    margin-bottom: 57px;
  }

  .audio {
    /*margin: 10px;*/
    margin-bottom: 57px;
  }

  /*!*出版*!*/
  /*.right .publish {*/
  /*margin: 20px;*/
  /*margin-bottom: 57px;*/
  /*}*/

  /*!*女生*!*/
  /*.right .lady {*/
  /*margin: 20px;*/
  /*margin-bottom: 57px;*/
  /*}*/

  /*.right .comic {*/
  /*margin: 20px;*/
  /*margin-bottom: 57px;*/
  /*}*/

  /*.right .audio {*/
  /*margin: 20px;*/
  /*margin-bottom: 57px;*/
  /*}*/

  /*.first {*/
  /*display: flex;*/
  /*}*/

  /*.first div {*/
  /*flex: 1;*/
  /*}*/

  /*.first {*/
  /*color: #fff;*/
  /*}*/

  /*.first .fl {*/
  /*padding: 8px 0;*/
  /*padding-left: 10px;*/
  /*margin-right: 30px;*/
  /*line-height: 25px;*/
  /*border-radius: 7px;*/
  /*background: #ff726f;*/
  /*background: linear-gradient(to right, #ff726f 0%, #ffdbb6 70%);*/
  /*}*/

  /*.first .fr {*/
  /*padding: 8px 0;*/
  /*padding-left: 10px;*/
  /*!*margin-right:50px;*!*/
  /*line-height: 25px;*/
  /*background: #79cfff;*/
  /*border-radius: 7px;*/
  /*background: linear-gradient(to right, #2f93ff 0%, #79cfff 70%);*/
  /*}*/

  /*.fl span:nth-child(1) {*/
  /*font-size: 17px;*/
  /*}*/

  /*.fl span:nth-child(2) {*/
  /*width: 18px;*/
  /*height: 22px;*/
  /*margin-left: 10px;*/
  /*vertical-align: bottom;*/
  /*!*background: url("../../../static/img/booklist3.png") no-repeat;*!*/
  /*display: inline-block;*/
  /*background-size: 18px 22px;*/
  /*}*/

  /*.fr span:nth-child(1) {*/
  /*font-size: 17px;*/
  /*}*/

  /*.fr span:nth-child(2) {*/
  /*width: 18px;*/
  /*height: 22px;*/
  /*margin-left: 10px;*/
  /*vertical-align: bottom;*/
  /*!*background: url("../../../static/img/booklist2.png") no-repeat;*!*/
  /*display: inline-block;*/
  /*background-size: 18px 22px;*/
  /*}*/

  /*.second {*/
  /*display: flex;*/
  /*color: #fff;*/
  /*margin-top: 10px;*/
  /*}*/

  /*.second div {*/
  /*flex: 1;*/
  /*}*/

  /*.second .sl {*/
  /*padding: 8px 0;*/
  /*padding-left: 10px;*/
  /*margin-right: 30px;*/
  /*line-height: 25px;*/
  /*border-radius: 7px;*/
  /*background: #d1d6ff;*/
  /*background: linear-gradient(to right, #a7c0ff 0%, #d8e1ff 70%);*/
  /*}*/

  /*.second .sr {*/
  /*padding: 8px 0;*/
  /*padding-left: 10px;*/
  /*!*margin-right:50px;*!*/
  /*line-height: 25px;*/
  /*background: #ffa737;*/
  /*border-radius: 7px;*/
  /*background: linear-gradient(to right, #ffa737 0%, #ffee78 70%);*/
  /*}*/

  /*.sl span:nth-child(1) {*/
  /*font-size: 17px;*/
  /*}*/

  /*.sl span:nth-child(2) {*/
  /*width: 18px;*/
  /*height: 22px;*/
  /*margin-left: 10px;*/
  /*vertical-align: bottom;*/
  /*!*background: url("../../../static/img/booklist1.png") no-repeat;*!*/
  /*display: inline-block;*/
  /*background-size: 18px 22px;*/
  /*}*/

  /*.sr span:nth-child(1) {*/
  /*font-size: 17px;*/
  /*}*/

  /*.sr span:nth-child(2) {*/
  /*width: 18px;*/
  /*height: 22px;*/
  /*margin-left: 10px;*/
  /*vertical-align: bottom;*/
  /*!*background: url("../../../static/img/booklist4.png") no-repeat;*!*/
  /*display: inline-block;*/
  /*background-size: 18px 22px;*/
  /*}*/

  /*!*列表*!*/
  /*.man-con {*/
  /*display: flex;*/
  /*margin-top: 15px;*/
  /*}*/

  /*.publish-con {*/
  /*display: flex;*/
  /*margin-top: 15px;*/
  /*}*/

  /*.mg {*/
  /*margin-bottom: 10px;*/
  /*}*/

  /*.con-l {*/
  /*flex: 1;*/
  /*!*background: red;*!*/
  /*}*/

  /*.con-r {*/
  /*flex: 1;*/
  /*margin-left: 10px;*/
  /*!*background: yellow;*!*/
  /*}*/

  /*.img {*/
  /*width: 50px;*/
  /*height: 45px;*/
  /*}*/

  /*.img img {*/
  /*width: 50px;*/
  /*height: 45px;*/
  /*}*/

  /*.name {*/
  /*vertical-align: top;*/
  /*display: inline-block;*/
  /*margin-left: 3px;*/
  /*}*/

  /*.name div:nth-child(1) {*/
  /*font-size: 14px;*/
  /*font-weight: 400;*/
  /*}*/

  /*.name div:nth-child(2) {*/
  /*font-size: 10px;*/
  /*color: rgba(0, 0, 0, 0.4);*/
  /*margin-top: 4px;*/
  /*}*/

  /*!*漫画*!*/
  /*.fbtn {*/
  /*display: flex;*/
  /*}*/

  /*.fbtn .fbl {*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*!*background: url("../../../static/img/bg1.jpg");*!*/
  /*background-size: 100% 100%;*/
  /*padding: 10px 0;*/
  /*margin-right: 35px;*/
  /*border-radius: 4px;*/
  /*}*/

  /*.fbtn .fbr {*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*!*background: url("../../../static/img/bg3.jpg");*!*/
  /*background-size: 100% 100%;*/
  /*padding: 10px 0;*/
  /*border-radius: 4px;*/
  /*}*/

  /*.sbtn {*/
  /*display: flex;*/
  /*margin-top: 10px;*/
  /*}*/

  /*.sbtn .sbl {*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*!*background: url("../../../static/img/bg2.jpg");*!*/
  /*background-size: 100% 100%;*/
  /*padding: 10px 0;*/
  /*margin-right: 35px;*/
  /*border-radius: 4px;*/
  /*}*/

  /*.sbtn .sbr {*/
  /*flex: 1;*/
  /*text-align: center;*/
  /*!*background: url("../../../static/img/bg4.jpg");*!*/
  /*background-size: 100% 100%;*/
  /*padding: 10px 0;*/
  /*border-radius: 4px;*/
  /*}*/

  /*!*音频*!*/
  /*.audio {*/

  /*}*/

  /*.audio .imgbtn {*/
  /*width: 250px;*/
  /*height: 50px;*/
  /*!*background: url("../../../static/img/bi3.jpg");*!*/
  /*background-size: 100% 100%;*/
  /*border-radius: 4px;*/
  /*}*/

  /*.audio .imgbtn .audioname {*/
  /*margin-left: 10px;*/
  /*margin-top: 5px;*/
  /*font-size: 20px;*/
  /*color: #fff;*/
  /*}*/

  /*.audio .imgbtn .textbtn {*/
  /*margin-left: 10px;*/
  /*!*margin-top: 5px;*!*/
  /*font-size: 12px;*/
  /*line-height: 20px;*/
  /*color: #fff;*/
  /*}*/

</style>
