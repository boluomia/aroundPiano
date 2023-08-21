<template>
  <div class="radioPlay">
    <div class="radioHead">
      <div class="head">
        <div class="bg-cover"></div>
        <img src="../../public/images/radio1.jpg" alt="" />
      </div>
      <div class="info">
        <div class="thumb">
          <img src="../../public/images/radio1.jpg" alt="" />
        </div>
        <span>电台</span>
        <h1>{{ title }}</h1>
        <div class="author">
          <a >
            <img src="../../public/images/hupo.jpg" alt="">
            {{ author }}
          </a>
          <img class="yinyueren" src="../../public/images/yinyueren.png" alt="">
          {{time}}
        </div>
      </div>
    </div>
    <list></list>
    <!-- <listData></listData> -->
  </div>
</template>

<script>
import list from "@/components/listChange.vue";
// import listData from "@/components/listData.vue";
export default {
  data(){
    return{
      title:"《八方旅人》钢琴改编特辑 琥珀琴师Louis",
      author:"琥珀琴师Louis",
      time:"2020-07-21创建"
    }
  },
  components:{
    list,
    // listData
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  -webkit-tap-highlight-color: transparent;
}
.radioPlay {
  width: 23.4375rem;
  .radioHead {
    width: 100%;
    height: 16.9375rem;
    position: relative;
    .head {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
      }
      .bg-cover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(51, 51, 51, 1) 0%,
          rgba(0, 0, 0, 0.73) 49%,
          rgba(51, 51, 51, 1) 100%
        );
      }
    }
    .info {
      position: absolute;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 30px 15px 12px 15px;
      // padding-bottom: 12px;
      .thumb {
        width: 143px;
        height: 120px;
        margin: 0 auto 4px;
        overflow: hidden;
        
        img {
          width: 114px;
          height: 114px;
          border: 3px solid #fff;
          border-radius: 5px;
        }
      }
      span{
        color: #fff;
        padding: 1px 3px;
        background: #7D4792;
        border-radius: 2px;
        font-size: 12px;
      }
      h1{
        padding-bottom: 1px;
        font-size: 22px;
        color: #fff;
        line-height: 28px;
        font-weight: normal;
      }
      .author{
        position: relative;
        color: #d0d0d0;
        font-size: 12px;
        line-height: 24px;
        a{
          color: #fff;
          padding-left: 26px;
          text-decoration: none;
          img{
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            overflow: hidden;
            background-size: cover;
          }
        }
        .yinyueren{
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>

