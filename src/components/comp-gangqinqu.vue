<template>
  <div class="list-content">
    <ul>
      <li v-for="(item,index) in song" :key="generateKey(index)" @click="goToRoute(index)">
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
          type: "电台",
          title: "《八方旅人》钢琴改编特辑 琥珀琴师Louis",
          author: "琥珀琴师Louis",
          time: "2020-07-21 14:41",
          img: "/images/g1.jpg",
        },
        {
          type: "曲集",
          title: "初冬送上10首暖心音乐，问候远方的你",
          author: "My music",
          time: "2020-10-15 11:18",
          img: "/images/g2.jpg",
        },
        {
          type: "曲集",
          title: "德彪西与拉威尔 四手联弹与双钢琴作品全集",
          author: "My music",
          time: "2014-08-27 17:29",
          img: "/images/g3.jpg",
        },
        {
          type: "曲集",
          title: "李闰珉|唯美天籁“最钢琴”",
          author: "古典计划",
          time: "2020-07-24 16:36",
          img: "/images/g4.jpg",
        },
        {
          type: "曲集",
          title: "Jazz丨夏日阳光里的慵懒爵士",
          author: "My music",
          time: "2016-04-18 11:00",
          img: "/images/g5.jpg",
        },
        {
          type: "曲集",
          title: "班得瑞｜轻音乐疗愈",
          author: "古典计划",
          time: "2020-07-21 10:27",
          img: "/images/g6.jpg",
        },
        {
          type: "曲集",
          title: "献给中国人民解放军的专属歌单",
          author: "My music",
          time: "2017-07-31 10:33",
          img: "/images/g7.jpg",
        },
        {
          type: "曲集",
          title: "2020上音考级新编作品精选",
          author: "古典也流行",
          time: "2020-07-17 16:35",
          img: "/images/g8.jpg",
        },
      ],
    };
  },
  methods:{
    generateKey(index) {
      return Symbol(index);
    },
    goToRoute(index) {
      const item = this.song[index];
      this.$router.push(`/music/radio${index+1}`);
    },
  }
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

