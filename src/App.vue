<template>
  <div id="app">
    <layout-view></layout-view>
  </div>
</template>

<script>
import LayoutView from "@/views/LayoutView.vue";
export default {
  components: {
    LayoutView,
  },
};
</script>
<style lang="less">
html {
  max-width: 1280px;
  // margin: 0 auto;
}
body {
  margin: 0 auto;
  padding: 0;
}
</style>
