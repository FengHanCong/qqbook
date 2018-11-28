<template>
  <div id="app">
    <!--底部Tabbar区域-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/bookshelf">
        <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
      <router-link class="mui-tab-item" to="/selected">
        <span class="mui-icon mui-icon-extra mui-icon-extra-filter"></span>
        <span class="mui-tab-label">精选</span>
      </router-link>
      <router-link class="mui-tab-item" to="/bookstore">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
        <span class="mui-tab-label">书库</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myBook">
        <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
        <span class="mui-tab-label">书架</span>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  #app
    .mui-bar-tab
      .active
        color: #007aff
</style>
