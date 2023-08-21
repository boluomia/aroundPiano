<template>
  <div class="Box">
    <div class="leftBox">
      <i></i>
      <span>{{className}}</span>
    </div>
    <router-link to="/video">
      <div class="rightBox">
        <span>查看全部 ></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      className:"钢琴视频"
    }
  }
};
</script>

<style lang="less" scoped>
*{
  text-decoration: none;
}
.Box {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 51px;
  line-height: 51px;
  padding: 0px 16px;
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
    color: #B19462;
    font-size: 14px;
  }
}
</style>

