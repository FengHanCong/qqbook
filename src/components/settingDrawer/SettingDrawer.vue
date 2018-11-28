<template>
  <mu-drawer class="test" :open="open" @close="close(false)" :docked="false">
    <div class="header">
      <div class="title">
        <mu-avatar :size="48" class="mine">
          <a class="mui-action-back mui-icon mui-icon-contact mui-icon-icon-contact-filled mui-pull-left"></a>
        </mu-avatar>
        <div class="desc">
          <div class="name">立即登录</div>
          <div class="email">登录后，新用户全场免费读10天</div>
        </div>
      </div>
      <div class="phone">
        <mu-icon value="volume_up" size="20" class="icon"></mu-icon>
        <span class="text">[游戏]888书币！锦鲤是你</span>
      </div>
      <div class="explain">

      </div>
    </div>
    <mu-list class="setlist">
      <mu-list-item button>
        <mu-icon value="remove_red_eye"></mu-icon>
        <mu-list-item-title>我的账户</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="payment"></mu-icon>
        <mu-list-item-title>我的包月</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="color_lens"></mu-icon>
        <mu-list-item-title>我的超值包</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="folder_special"></mu-icon>
        <mu-list-item-title>我的消息</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="crop_original"></mu-icon>
        <mu-list-item-title>浏览历史</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="folder_open"></mu-icon>
        <mu-list-item-title>我的收藏</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="settings_input_antenna"></mu-icon>
        <mu-list-item-title>我的基因</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-icon value="settings_input_antenna"></mu-icon>
        <mu-list-item-title>成为作家</mu-list-item-title>
      </mu-list-item>
    </mu-list>
    <div class="footer">
      <div class="btn">
        <mu-icon value="settings"></mu-icon>
        <div class="name">设置</div>
      </div>
      <div class="btn">
        <mu-icon value="brightness_3"></mu-icon>
        <div class="name">夜间</div>
      </div>
    </div>
  </mu-drawer>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import {TOGGLE_SETDRAWER} from '../../store/mutation-types'
  export default {
    name: 'SettingDrawer',
    computed: mapState({
      open: 'chat'
    }),
    methods: {
      ...mapMutations({
        close: TOGGLE_SETDRAWER
      })
    }
  }
</script>

<style scoped>
  .test {
    background: linear-gradient(to bottom, #61AAEF 0%, #3A93F1 70%);
  }

  .header {
    background-size: 256px 168px;
    color: #fff;
    padding: 70px 10px 10px;
  }

  .header .title {
    display: flex;
  }

  .title .mine {
    background: #fff;
  }

  .mui-action-back {
    color: #61AAEF;
    margin-bottom: -12px;
    font-size: 40px;
  }

  .title .desc {
    flex: 1;
    box-sizing: border-box;
  }

  .title .name {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }

  .title .email {
    font-size: 12px;
    font-weight: 700;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 10px;
  }

  .header .phone {
    margin-top: 20px;
    border-radius: 20px;
    background: #3A93F1;
    line-height: 30px;
  }

  .phone .icon {
    margin-top: 5px;
    padding-top: 5px;
    color: yellow;
  }

  .phone .text {
    font-size: 16px;
    font-weight: bold;
    vertical-align: 16%;
  }

  .header .explain {
    width: 100%;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .setlist .mu-item-title {
    margin-left: 10px;
  }

  .footer {
    position: absolute;
    bottom: 10px;
    left: 0;
  }

  .footer .btn {
    display: inline-block;
    margin: 0 10px;
    width: 24px;
    text-align: center;
  }

  .btn .icon {
    font-size: 20px;
  }

  .btn .name {
    font-size: 9px;
  }
</style>
