<template>
  <div class="box">
    <div class="boxTop">
      <span class="type">{{ type }}</span>
      <span class="time">&nbsp;|&nbsp;{{ time }}</span>
    </div>
    <div class="boxBody">
      <span class="title">{{ title }}</span>
      <p>{{ attr }}</p>
      <p>{{ speed }}</p>
      <p>{{ author }}</p>
    </div>
    <div class="staff">
      <img v-for="(item, index) in imgs" :src="item" alt="" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "爱情的故事（简化版）-理查德·克莱德曼",
      type: "钢琴谱",
      time: "发布时间：2023-12-15",
      author: "艺术家：未知",
      attr: "调性: c | 演奏难度：⭐⭐⭐⭐",
      speed: "速度：-- | 拍号：--",
      imgs: [
        "/images/ppu1.jpg",
        "/images/ppu2.jpg",
        "/images/ppu3.jpg",
      ],
      video:"https://1251912395.vod2.myqcloud.com/53abe58dvodtransgzp1251912395/a840800d14651978969257235087/v.f20.mp4",
    };
  },
  methods: {},
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
  padding: 0px 16px 20px 16px;

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
    // height: 65px;
    padding-right: 15px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
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
  .staff{
    img{
      width: 355px;
      height: 494px;
    }
  }
}
</style>

