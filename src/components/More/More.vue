<template>
  <div class="more">
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="go"></a>
      <h1 class="mui-title">{{more.h1}}</h1>
    </header>
    <!--content-->
    <div ref="container" class="demo-loadmore-content">
      <mu-load-more @cancelable="cancelable" @refresh="refresh" :refreshing="refreshing" :loading="loading"
                    @load="load">
        <mu-list>
          <div class="height"></div>
          <!--书内容-->
          <div class="content" v-for="btn in more1" :key="btn.cover" @click="goDetails(btn)">
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
                  {{btn.desc}}
                </div>
                <div class="index1-bottom">
                  <span class="index1-author"><span></span>{{btn.author}}</span>
                  <span class="index1-bottom-right">
                 <span class="index1-tags">{{btn.category}}</span>
                  <span class="index1-words">{{btn.first_cid}}字</span>
                </span>
                </div>
              </div>
            </div>
            <div class="line"></div>
          </div>
          <mu-divider/>
        </mu-list>
      </mu-load-more>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  export default {
    data() {
      return {
        more: this.$route.params.id[0],
        more1: this.$route.params.id,
        num: 10,
        cancelable: false,
        refreshing: false,
        loading: false,
        text: 'List'
      }
    },
    methods: {
      go() {
        this.$router.go(-1)
      },
      refresh () {
        this.refreshing = true
        this.cancelable = false
        this.$refs.container.scrollTop = 0
        setTimeout(() => {
          this.refreshing = false
          this.cancelable = false
          this.text = this.text === 'List' ? 'Menu' : 'List'
          this.num = 10
        }, 2000)
      },
      load () {
        this.loading = true
        this.cancelable = false
        setTimeout(() => {
          this.loading = false
          this.cancelable = false
          this.num += 10
        }, 2000)
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

<style lang="sass" rel="stylesheet/scss" scoped>
  .more
    #header
      position: fixed
      background-color: #007aff
      .mui-pull-left
        color: #fff
      .mui-title
        color: #fff
    .demo-loadmore-content
      flex: 1
      overflow: auto
      -webkit-overflow-scrolling: touch
      .mu-load-more
        .mu-list
          .height
            height: 30px
          .content
            margin: 10px
            .contentbtn
              display: flex
              .img
                flex: 0 0 100px
                img
                  width: 100px
                  height: 140px
              .right
                flex: 1
                .title
                  margin-left: 10px
                  font-size: 18px
                  font-weight: 700
                .desc
                  color: rgba(0, 0, 0, 0.5)
                  display: -webkit-box
                  -webkit-box-orient: vertical
                  -webkit-line-clamp: 3
                  overflow: hidden
                  font-size: 12px
                  margin-left: 10px
                  margin-top: 8px
                /*右边底部作者*/
                .index1-bottom
                  margin-top: 30px
                  margin-left: 10px
                  .index1-author
                    span
                      color: rgba(0, 0, 0, 0.5)
                      display: inline-block
                      width: 16px
                      height: 16px
                      background: url("../../../static/img/header.png")
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
            .line
              width: 100%
              height: 7px
              background: rgba(204, 204, 204, 0.3)
              margin-top: 5px
</style>
