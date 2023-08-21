<template>
  <div class="collection">
    <div class="Box">
      <div class="leftBox">
        <i></i>
        <span>{{ className }}</span>
      </div>
      <div class="rightBox">
        <span :class="{ active: currentIndex === 1 }" @click="isClick(1)"
          >热门</span
        >
        <span :class="{ active: currentIndex === 2 }" @click="isClick(2)"
          >最新</span
        >
      </div>
    </div>
    <colList></colList>
    <!-- <colMsg></colMsg> -->
  </div>
</template>

<script>
import colList from "@/components/ColList.vue";
// import colMsg from "@/components/colMsg.vue"
export default {
  data() {
    return {
      className: "曲集",
      currentIndex: 1,
    };
  },
  methods: {
    isClick(index) {
      this.currentIndex = index;
    },
  },
  components: {
    colList,
    // colMsg
  },
};
</script>

<style lang="less" scoped>
* {
  text-decoration: none;
}
.Box {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 51px;
  line-height: 51px;
  padding: 0px 16px;
  border-bottom: 1px solid #f2f2f2;
  // border-bottom: 3px solid #fff;
  .leftBox {
    color: #666;
    i {
      display: inline-block;
      width: 4px;
      height: 16px;
      background-color: #7d4792;
      margin-right: 8px;
      vertical-align: text-top;
    }
  }
  .rightBox {
    font-size: 14px;
    width: 71px;
    display: flex;
    justify-content: space-between;
    span {
      &.active {
        color: #b19462;
      }
    }
  }
}
</style>

