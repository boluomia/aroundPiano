<template>
 <div class="moreBox">
      <div class="more">
        <router-link to="/music/musichome" class="btn-lg">更多推荐</router-link>
        <!-- <a href="" class="btn-lg">更多推荐</a> -->
      </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
 .moreBox {
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    padding: 15px 10px;
    height: 40px;
    .more {
      // margin: 15px 10px;
      background-color: #7d4792;
      border-radius: 2px;
      width: 333px;
      height: 40px;
      line-height: 40px;
      padding: 0px 11px;
      text-align: center;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
</style>

