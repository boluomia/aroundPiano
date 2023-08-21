<template>
  <div class="box">
    <ul>
      <li v-for="(item, index) in list" :key="generateKey(index)" :class="{active: index === currentIndex}" @click="isClick(index)">{{ item }}</li>
    </ul>
    <colMsg :currentIndex="currentIndex"></colMsg>
  </div>
</template>

<script>
import colMsg from "@/components/colMsg.vue"
export default {
  data() {
    return {
      list: [
        "全部",
        "古典",
        "情绪",
        "环境",
        "轻音乐",
        "教材",
        "动漫",
        "影视",
        "主题",
        "儿童",
        "流行",
        "爵士",
        "民族",
      ],
      currentIndex: 0
    };
  },
  methods:{
    isClick(index){
      this.currentIndex=index
    },
    generateKey(index) {
      return Symbol(index);
    },
  },
  components:{
    colMsg
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  background-color: #fff;
  ul {
    display: grid;
    grid-template-rows: repeat(5, 40px);
    grid-template-columns: repeat(3, 124px);
    width: 375px;
    list-style: none;
    li {
      font-size: 12px;
      color: #999;
      text-align: center;
      line-height: 40px;
      border-right: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      &.active{
        color: #fff;
        font-weight: bold;
        background-color: #515151;
      }
    }
  }
}
</style>

