<template>
  <div class="music">
    <div class="musicHead">
      <ul>
        <li v-for="(item, index) in category" :key="index">
          <router-link :to="item.path" exact active-class="active">
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- <compsugPianosong></compsugPianosong>
    <compGangqinqu></compGangqinqu>
    <compMoreadvVue></compMoreadvVue>
    <compCollection></compCollection> 
    <compMusichome></compMusichome>-->
  </div>
</template>

<script>
// import compsugPianosong from '@/components/comp-sugPianosong.vue';
// import compMoreadvVue from '@/components/comp-moreadv.vue';
// import compGangqinqu from '@/components/comp-gangqinqu.vue';
// import compCollection from '@/components/Collection.vue'
//import compMusichome from '@/components/musicHome.vue'
export default {
  name: "Music",
  components: {
    // compsugPianosong,
    // compMoreadvVue,
    // compGangqinqu,
    // compCollection
    //compMusichome
  },
  mounted() {
    document.title = "钢琴曲";
    console.log(this.$route.path);
    //if (this.$route.path !== "/music/musichome") {
    var flag = true;
    for (var k = 0; k < 99; k++) {
      if (this.$route.path === "/music/song" + k
      ||this.$route.path === "/music/radio"+k) {
        console.log("不能跳啊！");
        flag = false;
      }
    }
    if (flag) {
      console.log("跳转初始");
      this.$router.push("/");
      this.$router.push("/music/musichome");
    }

    //}
  },
  data() {
    return {
      category: [
        { name: "钢琴曲首页", path: "/music/musichome" },
        { name: "曲集", path: "/music/collection" },
        // { name: "电台", path: "/music/radio" },
        // { name: "全部钢琴曲", path: "/music/allsong" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.musicHead {
  height: 44px;
  line-height: 44px;
  padding: 0 15px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 18px;

      a {
        text-decoration: none;
        font-size: 14px;
        color: #333;
        -webkit-tap-highlight-color: transparent;
        &.active {
          span {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>