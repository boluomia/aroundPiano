<template>
  <div class="slide">
    <div class="slideTitle">
      <span
        v-for="(item, index) in category"
        :key="generateKey(index)"
        @click="isClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item }}
      </span>
    </div>
    <pianovideo :currentIndex="currentIndex"></pianovideo>

    <!-- <pianovideo :currentIndex="currentIndex"></pianovideo> -->
    <!-- <child :current-index="currentIndex"></child> -->
  </div>
</template>

<script>
// import Child from './pianovideo.vue'
import pianovideo from "@/components/pianovideo.vue";

export default {
  components: {
    // Child,
    pianovideo,
  },
  data() {
    return {
      currentIndex: 0,
      category: ["最新视频", "教程", "欣赏", "综合"],
    };
  },
  methods: {
    isClick(index) {
      this.currentIndex = index;
      //console.log(this.currentIndex)
    },
    generateKey(index) {
      return Symbol(index);
    },
  },
};
</script>

<style lang="less" scoped>
.slideTitle {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #f2f2f2;
  height: 50px;
  line-height: 50px;
  span {
    color: #666666;
    font-size: 14px;
    &.active {
      font-weight: 700;
      color: #000;
      border-bottom: 2px solid #7d4792;
    }
  }
}
</style>