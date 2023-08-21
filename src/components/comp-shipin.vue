<template>
  <div class="list-content">
    <ul>
      <router-link to="/music/song2">
        <li v-for="(item, index) in song" :key="index">
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
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: [
        {
          type: "视频节目",
          title: "全世界最好听的钢琴曲，超级好听，耳朵怀孕了！",
          author: "My music",
          time: "2021-04-21 15:13",
          img: "/images/pianov1.jpg",
        },
        {
          type: "视频节目",
          title: "卡蒂雅·布尼亚季什维莉：柴可夫斯基《第一钢琴协奏曲》",
          author: "My music",
          time: "2021-04-08 10:41",
          img: "/images/pianov2.jpg",
        },
        {
          type: "视频节目",
          title: "超火神曲《Havana》神仙翻唱，一起享受音乐的快乐！",
          author: "My music",
          time: "2021-04-21 15:06",
          img: "/images/pianov3.jpg",
        },
        {
          type: "视频节目",
          title: "《月半小夜曲》河合奈保子日语原版！",
          author: "My music",
          time: "2021-04-21 15:05",
          img: "/images/pianov4.jpg",
        },
        {
          type: "视频节目",
          title: "钢琴家沈文裕演奏肖邦《黑键》练习曲 Op.10 No.5",
          author: "沈文裕",
          time: "2021-04-02 07:13",
          img: "/images/pianov5.jpg",
        },
        {
          type: "视频节目",
          title: "外网大神炫彩钢琴演奏《What Makes You Beautiful》",
          author: "My music",
          time: "2021-04-08 10:47",
          img: "/images/pianov6.jpg",
        },
        {
          type: "视频节目",
          title: "朗朗钢琴演奏，经典名曲《致爱丽丝》~",
          author: "My music",
          time: "2021-04-08 10:42",
          img: "/images/pianov7.jpg",
        },
        {
          type: "视频节目",
          title: "侯乐天在答案奇遇夜用钢琴的全黑键演奏《土耳其进行曲》",
          author: "My music",
          time: "2021-02-03 10:39",
          img: "/images/pianov8.jpg",
        },
      ],
    };
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

        padding: 10px 15px 10px 10px;
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

