<template>
  <div class="listAll">
    <div class="listChange">
      <span :class="{ active: activeTab === 1 }" @click="changeTab(1)"
        >列表</span
      >
      <span :class="{ active: activeTab === 2 }" @click="changeTab(2)"
        >简介</span
      >
    </div>
    <listData v-if="activeTab===1"></listData>
    <listIntroduction  v-if="activeTab===2"></listIntroduction>
  </div>
</template>

<script>
import listData from "@/components/listData.vue";
import listIntroduction from "./listIntroduction.vue";
export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
  components: {
    listData,
    listIntroduction
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.listChange {
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 2px solid #f8f8f8;
  span {
    text-align: center;
    color: #333;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    flex-grow: 1;
    flex-basis: 0;
    -webkit-tap-highlight-color: transparent;
    &.active {
      border-bottom-color: #7d4792;
    }
  }
}
</style>