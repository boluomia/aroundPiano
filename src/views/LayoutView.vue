<template>
  <div class="layout">
    <div class="layout-box" v-if="IfLogin === 1">
      <header class="layout-header">
        <div class="leftbox">
          <a href="" class="btn-menu" @click="Logout">离开</a>
          <span class="btn-return" @click="goBack"></span>
        </div>

        <a href="" class="logo-box">钢琴之家</a>
        <div class="rightbox">
          <!-- <a href="" class="search"></a> -->
          <!-- <span class="share"></span> -->
        </div>
      </header>
      <!-- 导航 -->
      <nav class="layout-nav">
        <router-link to="/" exact active-class="active">
          <div>
            <span>首页</span>
          </div>
        </router-link>
        <router-link to="/music/musichome" exact active-class="active">
          <div>
            <span>钢琴曲</span>
          </div>
        </router-link>
        <!-- <router-link to="/opern" exact active-class="active">
          <div>
            <span>钢琴谱</span>
          </div>
        </router-link> -->
        <router-link to="/video/videohome" exact active-class="active">
          <div>
            <span>钢琴视频</span>
          </div>
        </router-link>
        <!-- <router-link to="/live" exact active-class="active">
          <div>
            <span>直播课</span>
          </div>
        </router-link> -->
        <router-link to="/load" exact active-class="active">
          <div>
            <span>App下载</span>
          </div>
        </router-link>
        <router-link to="/all" exact active-class="active">
          <div>
            <span>全部栏目</span>
          </div>
        </router-link>
        <router-link to="/mylove" exact active-class="active">
          <div>
            <span>收藏</span>
          </div>
        </router-link>
      </nav>
    </div>
    <!-- <div class="login" v-if="IfLogin===0">
      <Login></Login>
    </div> -->
    <router-view style="margin-top: 88px"></router-view>
  </div>
</template>

<script>
// import Login from '@/views/Login.vue'
export default {
  data() {
    return {
      IfLogin: 1,
    };
  },
  methods: {
    goBack() {
      if (this.$route.path !== "/") this.$router.back();
    },
    Logout() {
      localStorage.setItem("isLoggedIn", "false");
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../static/common/varible.less");
.layout {
  background-color: @bgColor;
  // width: 375px;
  width: 100%;
  overflow-x: hidden;
  max-width: 1280px;

  .layout-header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    // width: 375px;
    width: 100%;
    padding: 0px 8px;
    height: 44px;
    line-height: 44px;
    background-color: @topColor;
    position: relative;
    a {
      -webkit-tap-highlight-color: transparent;
    }
    .logo-box {
      display: inline-block;
      width: 80px;
      height: 44px;
      padding-left: 25px;
      // margin: 0 130px;
      // margin: 0 auto;
      background: url(../static/images/logo.png) no-repeat left center/20px 20px;
      color: #fff;
      font-weight: 700;
    }
    .leftbox {
      position: absolute;
      left: 0;
      top: 0;
      width: 91px;
      a {
        width: 34px;
        height: 44px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        background: url(../static/images/btn-menu.png) no-repeat 10px
          center/16px 16px;
        padding-left: 31px;
        color: #fff;
        font-size: 14px;
      }
      span {
        display: inline-block;
        vertical-align: top;
        width: 26px;
        height: 44px;
        background: url(../static/images/btn-return.png) no-repeat center
          center/7.5px;
      }
    }
    .rightbox {
      position: absolute;
      right: 0;
      top: 0;
      width: 72px;
      height: 44px;
      .search {
        display: inline-block;
        vertical-align: top;
        width: 36px;
        height: 44px;
        background: url(../static/images/search.png) no-repeat center
          center/16px 16px;
      }
      .share {
        display: inline-block;
        vertical-align: top;
        width: 36px;
        height: 44px;
        background: url(../static/images/btn-share.png) no-repeat center
          center/16px 16px;
      }
    }
  }
  .layout-nav {
    // width: 375px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    overflow-x: scroll;
    background-color: @topColor;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    a {
      flex-shrink: 0;
      color: @fontColor;
      padding: 0 8px;
      -webkit-tap-highlight-color: transparent;
      &.active {
        div {
          span {
            font-weight: 700;
            color: #fff;
          }
        }
      }
    }
    a:first-child {
      margin-left: 7px;
    }
  }
  .layout-box {
    position: fixed;
    max-width: 1280px;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }
}
</style>