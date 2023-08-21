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
  </div>
</template>

<script>
export default {
  name: "Video",
  components: {},
  mounted() {
    document.title = "钢琴视频";
    console.log(this.$route.path);
    var flag = true;
    for (var k = 0; k < 99; k++) {
      if (this.$route.path === "/video/song" + k) {
        console.log("不能跳啊！");
        flag = false;
      }
    }
    if (flag) {
      console.log("跳转初始");
      this.$router.push("/");
      this.$router.push("/video/videohome");
    }
  },
  data() {
    return {
      category: [
        // { name: "钢琴视频首页", path: "/video/videohome" },
        { name: "钢琴视频", path: "/video/videohome" },
        // { name: "教程", path: "/video/teach" },
        // { name: "欣赏", path: "/video/enjoy" },
        // { name: "综合", path: "/video/multiple" },
        // { name: "全部视频", path: "/video/allvideo" },
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