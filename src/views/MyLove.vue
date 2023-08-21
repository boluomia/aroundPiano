<template>
  <div class="mylove">
    <compTitle>曲子列表</compTitle>
    <ul v-if="list.length != 0">
      <li v-for="item in list" :key="item.id">
        <router-link :to="item.id === 1 ? '/play1' : '/radioplay1'">
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="author">{{ item.author }}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <div v-else class="null">
      <p>暂无收藏歌曲</p>
    </div>
  </div>
</template>

<script>
import compTitle from "@/components/comp-title.vue";
export default {
  data() {
    return {
      arr: [
        {
          title: "狠心爱我-佚名",
          author: "佚名",
          id: 1,
        },
      ],
      list: [],
    };
  },
  methods: {
    initList() {
      let dataStr = localStorage.getItem("_SONG_");
      if (dataStr) {
        let Arr = JSON.parse(dataStr);
        this.list = Arr;
        console.log(this.list);
      }
    },
  },
  created() {
    this.initList();
  },
  mounted() {
    document.title = "收藏";
  },
  components: {
    compTitle,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
}
ul {
  list-style: none;
}
.mylove {
  background-color: #fff;
  li {
    padding: 10px 15px 10px 0px;
    border-bottom: 1px solid #f2f2f2;
    .info {
      padding: 10px 0px 10px 15px;
      .title {
        font-size: 14px;
        color: #333;
        margin-bottom: 5px;
      }
      .author {
        font-size: 14px;
        color: #999;
      }
    }
  }
}
.null {
  color: #333;
  font-size: 20px;
  padding-left: 16px;
  padding-top: 20px;
}
</style>

