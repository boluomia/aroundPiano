<template>
  <div class="pianovideo">
    <ul>
      <li
        v-for="(item, index) in song1"
        v-show="currentIndex === 0"
        :key="generateKey(index)"
      >
        <router-link to="/music/song2">
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
        </router-link>
      </li>
      <li
        v-for="(item, index) in song2"
        v-show="currentIndex === 1"
        :key="generateKey(index)"
      >
        <router-link to="/music/song2">
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
        </router-link>
      </li>
      <li
        v-for="(item, index) in song3"
        v-show="currentIndex === 2"
        :key="generateKey(index)"
      >
        <router-link to="/music/song2">
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
        </router-link>
      </li>
      <li
        v-for="(item, index) in song4"
        v-show="currentIndex === 3"
        :key="generateKey(index)"
      >
        <router-link to="/music/song2">
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
        </router-link>
      </li>
     
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      song1: [
        {
          type: "视频节目",
          title: "《土耳其进行曲》很值得参考的演奏，精准，“味儿”正！",
          author: "My music",
          time: "03-16",
          img: "/images/v1.jpg",
        },
        {
          type: "视频节目",
          title: "《狮子山下》钢琴版～",
          author: "My music",
          time: "03-16",
          img: "./images/v2.jpg",
        },
        {
          type: "视频节目",
          title: "原汁原味，编配绝佳，钢琴版《Counting Stars》~",
          author: "My music",
          time: "03-16",
          img: "./images/v3.jpg",
        },
        {
          type: "视频节目",
          title: "这是来自李斯特改编帕格尼尼的视觉冲击~",
          author: "My music",
          time: "02-07",
          img: "./images/v4.jpg",
        },
        {
          type: "视频节目",
          title: "朗朗在美国电视节目中演奏庞塞《e小调间奏曲》",
          author: "My music",
          time: "02-07",
          img: "./images/v5.jpg",
        },
        {
          type: "视频节目",
          title: "一首冷门但很好听的小钢琴曲《In Love》",
          author: "My music",
          time: "02-07",
          img: "./images/v6.jpg",
        },
      ],
      song2: [
        {
          type: "视频栏目",
          title: "《肖邦24首前奏曲》傅聪给钢琴家盛原上课",
          author: "古典计划",
          time: "12-29",
          img: "/images/a1.jpg",
        },
        {
          type: "视频栏目",
          title: "《车尔尼599钢琴初步教程》",
          author: "环球古典视频",
          time: "05-24",
          img: "/images/a2.jpg",
        },
        {
          type: "视频栏目",
          title: "刘诗昆钢琴教程精华版",
          author: "环球古典视频",
          time: "01-21",
          img: "/images/a3.jpg",
        },
        {
          type: "视频栏目",
          title: "【名家教学】《钢琴大师教你科学高效的练琴》钢琴家秦川",
          author: "古典计划",
          time: "12-25",
          img: "/images/a4.jpg",
        },
        {
          type: "视频栏目",
          title: "小朋友学拜厄",
          author: "环球古典视频",
          time: "01-21",
          img: "/images/a5.jpg",
        },
        {
          type: "视频栏目",
          title: "【流行课堂】《经典流行钢琴曲教学》琥珀琴师Louis",
          author: "琥珀琴师Louis",
          time: "01-07",
          img: "/images/a6.jpg",
        },
      ],
      song3: [
        {
          type: "视频栏目",
          title: "周末音乐会",
          author: "龙叔说古典",
          time: "08-15",
          img: "/images/x1.jpg",
        },
        {
          type: "视频栏目",
          title: "流行钢琴音乐室",
          author: "流行键盘-息怒",
          time: "12-17",
          img: "/images/x2.jpg",
        },
        {
          type: "视频栏目",
          title: "热门流行钢琴音乐欣赏",
          author: "音乐季",
          time: "08-15",
          img: "/images/x3.jpg",
        },
        {
          type: "视频栏目",
          title: "热门古典钢琴欣赏",
          author: "环球古典视频",
          time: "08-15",
          img: "/images/x4.jpg",
        },
        {
          type: "视频栏目",
          title: "朗朗钢琴演奏欣赏",
          author: "环球古典视频",
          time: "01-21",
          img: "/images/x5.jpg",
        },
        {
          type: "视频栏目",
          title: "钢琴电影| 《海上钢琴师》钢琴片段欣赏",
          author: "流行视频趋势",
          time: "07-26",
          img: "/images/x5.jpg",
        },
      ],
      song4: [
        {
          type: "视频栏目",
          title: "陈大叔与小乐迷",
          author: "陈戈",
          time: "04-14",
          img: "/images/z1.jpg",
        },
        {
          type: "视频栏目",
          title: "纪录片钢琴家系列",
          author: "古典计划",
          time: "04-02",
          img: "/images/z2.jpg",
        },
        {
          type: "视频栏目",
          title: "文裕讲堂",
          author: "沈文裕",
          time: "04-08",
          img: "/images/z3.jpg",
        },
        {
          type: "视频栏目",
          title: "趣味钢琴",
          author: "流行视频趋势",
          time: "08-15",
          img: "/images/z4.jpg",
        },
        {
          type: "视频栏目",
          title: "键盘上的华尔兹——热门钢琴四手联弹赏析",
          author: "流行音乐馆",
          time: "09-07",
          img: "/images/z5.jpg",
        },
        {
          type: "视频栏目",
          title: "好玩有趣的键盘玩法",
          author: "写轮指",
          time: "12-04",
          img: "/images/z6.jpg",
        },
      ],
    };
  },
  created() {
    console.log(this.currentIndex);
  },
  methods: {
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
.pianovideo {
  // height: 800px;
  width: 375px;

  // padding: 0px 15px;
  background-color: #fff;
  ul {
    li {
      width: 375px;
      padding: 10px 15px;
      // display: flex;
      border-bottom: 1px solid #f2f2f2;
      a {
        -webkit-tap-highlight-color: transparent;
        width: 100%;
        display: flex;
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

          padding: 10px 15px 0px 10px;
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
}
</style>