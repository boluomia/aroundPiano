<template>
  <div class="box">
    <div class="boxTop">
      <span class="type">{{ arr[0].type }}</span>
      <span class="time">&nbsp;|&nbsp;{{ arr[0].time }}</span>
    </div>
    <div class="boxBody">
      <span class="title">{{ arr[0].title }}</span>
      <p>{{ arr[0].author }}</p>
    </div>
    <div class="boxFoot">
      <button @click="playClick">
        <i class="musicPlay"></i>
        播放
      </button>
      <router-link to="/load">
        <button>
          <i class="musicLoad"></i>
          下载
        </button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // title: "狠心爱我-佚名",
      // type: "钢琴曲",
      // time: "发布时间：12-12",
      // author: "艺术家：佚名",
      // Song:[],
      arr: [
        {
          title: "狠心爱我-佚名",
          author: "艺术家：佚名",
          type: "钢琴曲",
          time: "发布时间：12-12",
          id:1
        },
      ],
    };
  },
  methods: {
    playClick() {
      //this.$router.push('/');
      this.$router.push("/play1");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 375px;
  background-color: #fff;
  padding: 0px 16px;
  .boxTop {
    width: 100%;
    height: 50px;
    line-height: 50px;
    .type {
      color: #b19462;
      font-size: 14px;
    }
    .time {
      color: #999;
      font-size: 14px;
    }
  }
  .boxBody {
    height: 65px;
    .title {
      display: inline-block;
      height: 35px;
      line-height: 35px;
      font-size: 26px;
      font-weight: bold;
    }
    p {
      height: 30px;
      line-height: 30px;
      color: #999;
      font-size: 14px;
    }
  }
  .boxFoot {
    margin-top: 15px;
    padding: 15px 10px;
    button {
      background-color: #fff;
      // width: 64px;
      height: 35px;
      padding: 0 10px;
      border-radius: 3px;
      border: 1px solid #b5b5b5;
      border-color: #b5b5b5;
      color: #333;
      line-height: 35px;
      font-size: 14px;
      margin-right: 10px;
      .musicPlay {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 15px;
        margin: 9px 4px 0 0;
        background: url(../../public/images/music_association_qu.png) no-repeat center center/100%;
      }
      .musicLoad {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 15px;
        margin: 9px 4px 0 0;
        background: url(../../public/images/music_association_download.png) no-repeat center center/100%;
      }
    }
  }
}
</style>

