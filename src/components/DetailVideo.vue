<template>
  <div class="detailVideo">
    <div class="video">
      <video
        src="../../public/video/v.f20.mp4"
        controls
      ></video>
    </div>
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="guest">{{ guest }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "30天巧学钢琴 第9课 符号音弹法",
      guest: "嘉宾：钢琴教程：30天巧学钢琴",
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.detailVideo {
  .video {
    width: 375px;
    height: 204px;
    overflow: hidden;
    background-color: #000;
    video {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    background-color: #fff;
    padding-top: 13px;
    padding-left: 15px;
    .title {
      width: 345px;
      height: 72px;
      font-size: 26px;
      line-height: 36px;
      padding-bottom: 6px;
      color: #333;
    }
    .guest {
      margin-top: 6px;
      color: #666;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>