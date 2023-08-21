<template>
  <div class="colMsg">
    <ul>
      <li v-for="(item, index) in listData1" :key="generateKey(index)" v-show="currentIndex===0">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData2" :key="generateKey(index)" v-show="currentIndex===1">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData3" :key="generateKey(index)" v-show="currentIndex===2">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData4" :key="generateKey(index)" v-show="currentIndex===3">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData1" :key="generateKey(index)" v-show="currentIndex===4">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData2" :key="generateKey(index)" v-show="currentIndex===5">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData3" :key="generateKey(index)" v-show="currentIndex===6">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData4" :key="generateKey(index)" v-show="currentIndex===7">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData1" :key="generateKey(index)" v-show="currentIndex===8">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData2" :key="generateKey(index)" v-show="currentIndex===9">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData3" :key="generateKey(index)" v-show="currentIndex===10">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData4" :key="generateKey(index)" v-show="currentIndex===11">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
      <li v-for="(item, index) in listData4" :key="generateKey(index)" v-show="currentIndex===12">
        <router-link to="/music/radio1">
          <div class="img">
            <img :src="item.img" alt="" />
          </div>
          <div class="content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.author }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData1: [
        {
          title: "100首无侵犯版权之忧的钢琴曲",
          author: "古典计划",
          img: "./collection/all1.jpg",
        },
        {
          title: " 抖音神曲大全2018第三季度",
          author: "流行音乐馆",
          img: "./collection/all2.jpg",
        },
        {
          title: "车尔尼初级钢琴曲集（作品599）",
          author: "古典计划",
          img: "./collection/all3.jpg",
        },
        {
          title: "宫崎俊动漫钢琴曲集",
          author: "流行音乐馆",
          img: "./collection/all4.jpg",
        },
        {
          title: "最让人放松的古典音乐百分百 第五辑 钢琴之最",
          author: "My music",
          img: "./collection/all5.jpg",
        },
        {
          title: "海上钢琴师",
          author: "My music",
          img: "./collection/all6.jpg",
        }
      ],
      listData2:[
      {
          title: "100首无侵犯版权之忧的钢琴曲",
          author: "古典计划",
          img: "./collection/all1.jpg",
        },
        {
          title: " 抖音神曲大全2018第三季度",
          author: "流行音乐馆",
          img: "./collection/all2.jpg",
        },
        {
          title: "最让人放松的古典音乐百分百 第五辑 钢琴之最",
          author: "My music",
          img: "./collection/classic1.jpg",
        },
        {
          title: "海上钢琴师",
          author: "My music",
          img: "./collection/classic2.jpg",
        },
        {
          title: "钢琴百分百CD5",
          author: "My music",
          img: "./collection/classic3.jpg",
        },
        {
          title: "中国音乐家协会钢琴考级（新编第二版）1—10级精选曲集",
          author: "古典也流行",
          img: "./collection/classic4.jpg",
        },
      ],
      listData3:[
      {
          title: "100首无侵犯版权之忧的钢琴曲",
          author: "古典计划",
          img: "./collection/all1.jpg",
        },
        {
          title: "有一种青春叫周杰伦",
          author: "流行音乐馆",
          img: "./collection/all4.jpg",
        },
        {
          title: "最让人放松的古典音乐百分百 第五辑 钢琴之最",
          author: "My music",
          img: "./collection/classic1.jpg",
        },
        {
          title: "夜的钢琴曲",
          author: "My music",
          img: "./collection/mood1.jpg",
        },
        {
          title: "李闰珉|唯美天籁“最钢琴”",
          author: "古典计划",
          img: "./collection/mood2.jpeg",
        },
        {
          title: "班得瑞｜轻音乐疗愈",
          author: "古典计划",
          img: "./collection/mood3.jpeg",
        },
      ],
      listData4:[
      {
          title: "100首无侵犯版权之忧的钢琴曲",
          author: "古典计划",
          img: "./collection/all1.jpg",
        },
        {
          title: "夜的钢琴曲",
          author: "My music",
          img: "./collection/mood1.jpg",
        },
        {
          title: "李闰珉|唯美天籁“最钢琴”",
          author: "古典计划",
          img: "./collection/mood2.jpeg",
        },
        {
          title: "童话般的钢琴世界",
          author: "Regtime",
          img: "./collection/surrounding1.png",
        },
        {
          title: "初冬送上10首暖心音乐，问候远方的你",
          author: "My music",
          img: "./collection/surrounding2.jpg",
        },
        {
          title: "那些温柔了岁月的粤语情怀",
          author: "民谣栖息地",
          img: "./collection/surrounding3.jpg",
        },
      ],
    };
  },
  methods: {
    generateKey(index) {
      return Symbol(index);
    },
  },
  props:{
    currentIndex:{
      type: Number,
      default: 3,
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a{
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
.colMsg {
  ul {
    width: 350px;
    padding-left: 15px;
    padding-right: 10px;
    overflow: hidden;
    padding-top: 10px;
    background-color: #fff;
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      height: 248px;
      width: 170px;
      margin-bottom: 10px;
      .img {
        height: 170px;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .content {
        margin-top: 5px;
        height: 42px;
        h5 {
          color: #333;
          font-size: 14px;
          font-weight: normal;
        }
        p {
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
          color: rgba(51, 102, 153, 0.8);
        }
      }
    }
  }
}
</style>

