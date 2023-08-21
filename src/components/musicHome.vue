<template>
  <div class="musicHome">
    <!-- <compsugPianosong></compsugPianosong> -->
    <compTitle>推荐钢琴曲</compTitle>
    <compGangqinqu></compGangqinqu>
    <compMoreadvVue></compMoreadvVue>
  </div>
</template>

<script>
// import compsugPianosong from "@/components/comp-sugPianosong.vue";
import compTitle from "@/components/comp-title.vue";
import compMoreadvVue from "@/components/comp-moreadv.vue";
import compGangqinqu from "@/components/comp-gangqinqu.vue";
export default {
  
  components: {
    // compsugPianosong,
    compMoreadvVue,
    compGangqinqu,
    compTitle
  },
  data() {
    return {
      className: "钢琴曲首页",
    };
  },
};
</script>

<style lang="less" scoped>
</style>

