<template>
  <div class="carousel">
    <div class="carousel-container">
      <router-link to="/music/radio1">
        <transition name="carousel-slide" mode="out-in">
          <div :key="currentIndex">
            <img :src="items[currentIndex].image" alt="carousel-item" />
          </div>
        </transition>
      </router-link>
      <!-- <router-view></router-view> -->
      <!-- <transition name="carousel-slide" mode="out-in">
        <div :key="currentIndex">
          <img :src="items[currentIndex].image" alt="carousel-item" />
        </div>
      </transition> -->
    </div>
    <div class="carousel-dots">
      <span
        v-for="(item, index) in items"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { image: "/images/1.jpg" },
        { image: "/images/2.jpg" },
        { image: "/images/3.jpg" },
        { image: "/images/4.jpg" },
        { image: "/images/5.jpg" },
        { image: "/images/6.jpg" },
        { image: "/images/7.jpg" },
        { image: "/images/8.jpg" },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.intervalId);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
  beforeDestroy() {
    this.stopAutoPlay();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 160px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: opacity 0.5s;
}

.carousel-slide-enter,
.carousel-slide-leave-to {
  opacity: 0;
}

.carousel img {
  width: 375px;
  height: 160px;
  object-fit: cover;
}

.carousel-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.carousel-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
  cursor: pointer;
}

.carousel-dots span.active {
  background-color: #7d4792;
}
</style>