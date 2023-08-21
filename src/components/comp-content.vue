<template>
  <div class="list-content">
    <ul>
      <li v-for="(item, index) in song" :key="generateKey(index)" @click="goToRoute(index)">
        <div class="img">
          <img :src="item.img" alt="" />
          <div class="type">
            <span>{{ item.type }}</span>
          </div>
        </div>
        <div class="info">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="msg">
            <span class="author">{{ item.author }}</span>
            <span class="time">{{ item.time }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: [
        {
          type: "单曲",
          title: "单曲|《狠心爱我》欣赏",
          author: "My music",
          time: "20小时前",
          img: "/images/c1.jpg",
        },
        {
          type: "单谱",
          title: "曲谱|《七年间的爱》",
          author: "古典计划",
          time: "06-22",
          img: "/images/c2.jpg",
        },
        {
          type: "视频节目",
          title: "巧学钢琴第9课：《符号音弹法》",
          author: "球姐",
          time: "06-21",
          img: "/images/c3.jpg",
        },
        {
          type: "视频节目",
          title: "欣赏《唐璜》",
          author: "球姐",
          time: "06-20",
          img: "/images/c4.jpg",
        },
        {
          type: "视频节目",
          title: "巧学钢琴第8课：《轮指》",
          author: "球姐",
          time: "06-19",
          img: "/images/c5.jpg",
        },
        {
          type: "单曲",
          title: "单曲| 《忘不了忘不了》欣赏",
          author: "My music",
          time: "06-16",
          img: "/images/c6.jpg",
        },
        {
          type: "单谱",
          title: "曲谱| 《爱情的故事》（简化版）",
          author: "古典计划",
          time: "06-15",
          img: "/images/c7.jpg",
        },
        {
          type: "视频节目",
          title: "巧学钢琴第7课：《半音阶》",
          author: "球姐",
          time: "06-14",
          img: "/images/c8.jpg",
        },
      ],
    };
  },
  methods: {
    goToRoute(index) {
      const item = this.song[index];
      this.$router.push(`/music/song${index}`);
    },
    generateKey(index) {
      return Symbol(index);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  ul,
  li {
    list-style: none;
  }
}
.list-content {
  // height: 800px;
  width: 375px;
  // padding: 0px 15px;
  background-color: #fff;
  ul {
    li {
      width: 375px;
      padding: 10px 15px;
      display: flex;
      border-bottom: 1px solid #f2f2f2;
      .img {
        width: 120px;
        height: 79px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .type {
          position: absolute;
          top: 0;
          left: 4px;
          padding-top: 4px;
          z-index: 99;
          span {
            display: inline-block;
            font-size: 12px;
            text-align: center;
            color: #fff;
            background: rgba(0, 0, 0, 0.4);
            padding: 0 4px;
            margin-right: 4px;
            height: 20px;
            line-height: 20px;
            border-radius: 2px;
          }
        }
      }
      .info {
        width: 215px;

        padding: 15px 15px 10px 10px;
        .title {
          font-size: 14px;
          color: #333;
        }
        .msg {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          font-size: 14px;
          .author {
            color: #336699cc;
            font-size: 12px;
          }
          .time {
            font-size: 12px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>

