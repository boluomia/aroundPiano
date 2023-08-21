<template>
    <div class="tip" v-show="showTip">
      <slot></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showTip: true
    };
  },
  methods: {
    hideTip() {
      this.showTip = false;
    }
  }
};
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.tip {
  // width: 106px;
  white-space: nowrap;
  padding: 0 15px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  animation: fade-out 2s forwards;
  z-index: 20;
  border-radius: 10px;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>