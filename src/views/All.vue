<template>
  <div class="all">
    <ul>
      <li v-for="(item, index) in content" :key="index">
        <div class="logo">
          <!-- <img src="../../public/images/column-home.png" alt=""> -->
          <img :src="item.ico" alt="">
        </div>
        <div class="type">
          {{ item.type }}
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "all",
  components: {},
  data() {
    return {
      content: [
        {
          ico: "/images/column-home.png",
          type: "首页",
        },
        {
          ico: "/images/column-news.png",
          type: "新闻",
        },
        {
          ico: "/images/column-qu.png",
          type: "钢琴曲",
        },
        {
          ico: "/images/column-pu.png",
          type: "钢琴谱",
        },
        {
          ico: "/images/column-video.png",
          type: "视频",
        },
        {
          ico: "/images/column-pianist.png",
          type: "音乐家",
        },
        {
          ico: "/images/column-grade.png",
          type: "考级",
        },
        {
          ico: "/images/column-paper.png",
          type: "论文",
        },
        {
          ico: "/images/column-app.png",
          type: "App下载",
        },
        {
          ico: "/images/column-feedback.png",
          type: "意见反馈",
        },
        {
          ico: "/images/column-platform.png",
          type: "开放平台",
        },
        {
          ico: "/images/column-live.png",
          type: "直播课",
        },
        {
          ico: "/images/column-wenda.png",
          type: "一键求谱",
        },
        
      ],
    };
  },
  mounted() {
    document.title = "全部栏目";
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.all {
  background-color: #fff;
  padding-top: 30px;
  ul{
    display: grid;
    grid-template-rows: repeat(4, 80px);
    grid-template-columns: repeat(4, 93.8px);
    row-gap: 30px;
    li{
      text-align: center;
      
      
      .logo{
        margin: 0 auto;
        width: 50px;
        height: 50px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .type{
        color: #333;
      }
    }
  }
}
</style>

