<template>
  <div class="Box">
    <div class="leftBox">
      <i></i>
      <span>
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // className: "推荐钢琴曲",
    };
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
  // margin-bottom: 10px;
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
}
</style>

