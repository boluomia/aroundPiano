<template>
  <div class="listData">
    <ul>
      <li
        v-for="(item, index) in listdata"
        :key="generateKey(index)"
        @click="playClick(index)"
      >
        <div class="list-info">
          <h5>{{ item.title }}</h5>
          <p>{{ item.author }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listdata: [
        {
          title: "八方旅人《感傷》（Melancholy）琴笛合奏版",
          author: "琥珀琴师Louis",
        },
        {
          title: "八方旅人《感傷》（Melancholy）钢琴独奏版",
          author: "琥珀琴师Louis",
        },
        {
          title: "八方旅人《猎人 海茵特主题曲》钢琴版",
          author: "琥珀琴师Louis",
        },
        {
          title: "八方旅人《盗贼 泰里翁主题曲》钢琴版",
          author: "琥珀琴师Louis",
        },
        {
          title: "八方旅人《药师 亚芬主题曲》钢琴版",
          author: "琥珀琴师Louis",
        },
      ],
      // radioRoutes: ["radio1", "radio2", "radio3", "radio4", "radio5"],
    };
  },
  props: {},
  methods: {
    generateKey(index) {
      return Symbol(index);
    },
    // playClick(index) {
    //   const route = this.radioRoutes[index];
    //   this.$router.push(route);
    // },
    playClick(index) {
      this.$router.push(`/radioplay${index+1}`);
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.listData {
  background-color: #fff;
  ul {
    list-style: none;
    li {
      border-bottom: 2px solid #f8f8f8;
      padding: 10px 0px 10px 15px;
      .list-info {
        padding: 10px 15px 10px 0px;
        h5 {
          font-size: 14px;
          font-weight: normal;
          color: #333;
          text-overflow: ellipsis;
        }
        p {
          font-size: 14px;
          color: #999;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

