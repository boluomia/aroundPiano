<template>
  <div class="home">
    
    <CompSwiper></CompSwiper>
    <CompLiveclass></CompLiveclass>
    <CompContent></CompContent>
    <CompMoreadv></CompMoreadv>
    <CompPianovideo></CompPianovideo>
    <pianoAbout></pianoAbout>
    <!-- <pianoVideo></pianoVideo> -->
    
  </div>
</template>

<script>
import CompSwiper from "@/components/comp-swiper.vue"
import CompLiveclass from "@/components/comp-liveClass.vue"
import CompContent from "@/components/comp-content.vue"
import CompMoreadv from "@/components/comp-moreadv.vue"
import CompPianovideo from "@/components/comp-pianovideo.vue"
// import pianoVideo from "@/components/pianovideo.vue"
import pianoAbout from "@/components/comp-pianoabout.vue"
export default {
  name: "HomeView",
  components: {
    CompSwiper,
    CompLiveclass,
    CompContent,
    CompMoreadv,
    CompPianovideo,
    // pianoVideo,
    pianoAbout
  },
  mounted() {
    document.title = "首页";
  },
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
/* .home{
  margin-top: 88px;
} */
</style>
