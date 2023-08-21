<template>
  <div class="load">
    <h1>钢琴之家</h1>
    <div class="logo">
      <img src="../../public/images/logo-200.png" alt="">
    </div>
    <h2>钢琴之家</h2>
    <h6>全球专业钢琴曲库</h6>
    <div class="code">
      <img src="../../public/images/top_code.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "load",
  components: {},
  mounted() {
    document.title = "App下载";
  },
};
</script>

<style lang="less" scoped>
.load{
  background: url("../../public/images/loadbg.jpg") no-repeat;
  background-size: 100% 100%;
  width: 375px;
  height: 667px;
  h1{
    margin: 0 auto;
    width: 90px;
    height: 45px;
    line-height: 45px;
    color:#7a7a7c;
    font-size: 18px;
    padding-left:30px;
    background: url("../../public/images/header_logo.png") left center no-repeat;
    background-size: 24px;
  }
  .logo{
    margin: 50px auto;
    width: 130px;
    height: 130px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  h2{
    font-size: 36px;
    color: #fff;
    text-align: center;
  }
  h6{
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
  .code{
    margin: 0 auto;
    width: 120px;
    height: 120px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
