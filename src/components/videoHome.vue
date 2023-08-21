<template>
  <div class="box">
    <compTitle>推荐视频</compTitle>
    <compshipin></compshipin>
    <compMoreadvVue></compMoreadvVue>
  </div>
</template>

<script>
import compTitle from "@/components/comp-title.vue";
import compshipin from "@/components/comp-shipin.vue";
import compMoreadvVue from "@/components/comp-moreadv.vue";
export default {
  components: {
    compshipin,
    compMoreadvVue,
    compTitle 
  }
};
</script>

<style lang="scss" scoped>
</style>

