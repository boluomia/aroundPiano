<template>
  <div class="singleSong">
    <tipComp v-show="isAdd" v-if="isShow == true">收藏成功</tipComp>
    <tipComp v-show="!isAdd" v-if="isShow == true">取消收藏</tipComp>

    <div class="content">
      <div class="audio-info" :key="id">
        <div class="img">
          <img src="../../public/images/c1.jpg" alt="" />
        </div>
        <div class="msg">
          <h5>{{ arr[0].title }}</h5>
          <p>{{ arr[0].author }}</p>
        </div>
      </div>
      <div class="audio-play">
        <span class="audio-time-current">{{ currentTime }}</span>
        <div
          class="audio-seek-bar"
          ref="seekBar"
          @click="updateProgress($event, $refs.seekBar)"
        >
          <div
            class="audio-play-bar"
            ref="playBar"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <span class="audio-time-total">{{ totalTime }}</span>
      </div>
      <div class="audio-btn">
        <div class="audio-prev" @click="reset">
          <div class="img">
            <!-- <img src="../../public/images/audio_prev.png" alt="" /> -->
            <svg
              t="1688244490812"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3275"
              width="25"
              height="25"
            >
              <path
                d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z"
                fill="#ffffff"
                p-id="3276"
              ></path>
            </svg>
          </div>
        </div>
        <div class="audio-playing" v-show="isPlaying" @click="togglePlaying">
          <div class="img">
            <img src="../../public/images/audio_pause.png" alt="" />
          </div>
        </div>
        <div class="audio-pause" v-show="!isPlaying" @click="togglePlaying">
          <div class="img">
            <img src="../../public/images/audio_play.png" alt="" />
          </div>
        </div>
        <!-- <div class="audio-next" @click="reset"> -->
        <div class="audio-next">
          <div class="img">
            <!-- <img src="../../public/images/audio_next.png" alt="" /> -->
            <svg
              v-show="!isAdd"
              @click="handleClick"
              :key="arr[0].id"
              t="1688245513151"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4346"
              width="25"
              height="25"
            >
              <path
                d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                fill="#ffffff"
                p-id="4347"
              ></path>
            </svg>

            <svg
              v-show="isAdd"
              @click="handleClick"
              t="1688245513151"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4346"
              width="25"
              height="25"
            >
              <path
                d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                fill="#d81e06"
                p-id="4347"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tipComp from "@/components/Tip.vue";
export default {
  data() {
    return {
      arr: [
        {
          title: "狠心爱我-佚名",
          author: "佚名",
          // type: "钢琴曲",
          // time: "发布时间：12-12",
          id: 1,
        },
      ],
      // title: "狠心爱我-佚名",
      // author: "佚名",
      totalTime: "03:33",
      audioElement: null,
      playBarElement: null,
      currentTime: "0:00",
      progress: 0, //进度条宽度
      isPlaying: true,
      isAdd: false,
      id: 0,
      song: {},
      isShow: false,
    };
  },
  mounted() {
    this.audioElement = new Audio(); // 创建音频元素
    this.audioElement.src = "../../music/song1.mp3"; // 设置音频文件路径
    this.audioElement.addEventListener("timeupdate", this.updateProgressBar); // 监听音频播放时间更新事件

    this.playBarElement = this.$refs.playBar;
    this.playAudio(); // 自动播放音频
  },
  beforeRouteLeave(to, from, next) {
    this.stopAudio();
    next();
  },
  methods: {
    handleClick() {
      this.Add();
      console.log(this.isAdd);
      localStorage.setItem("isAdd1", this.isAdd);
      if (this.isAdd) {
        console.log("add");
        this.addCollect();
      } else {
        console.log("remove");
        this.removeCollect();
      }
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, 1000);
    },
    Add() {
      this.isAdd = !this.isAdd;
      // if(this.isAdd)
      // alert('该歌曲已经收藏');
    },
    reset() {
      this.audioElement.currentTime = 0;
    },
    playAudio() {
      this.audioElement.play();
    },
    updateProgressBar() {
      const currentTime = this.audioElement.currentTime;
      const duration = this.audioElement.duration;
      const percentage = (currentTime / duration) * 100;

      this.playBarElement.style.width = `${percentage}%`;

      // 更新currentTime变量
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      this.currentTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },

    stopAudio() {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    },
    //更新进度条、当前时间和歌曲进度
    updateProgress(event, seekBar) {
      const rect = seekBar.getBoundingClientRect(); //元素的位置和尺寸信息
      const clickPosition = event.clientX - rect.left;
      const seekBarWidth = seekBar.offsetWidth;
      const percentage = (clickPosition / seekBarWidth) * 100;

      this.progress = percentage;
      this.playBarElement.style.width = `${percentage}%`;

      const duration = this.audioElement.duration;
      const currentTime = (duration * percentage) / 100;

      this.audioElement.currentTime = currentTime;

      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      this.currentTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },

    togglePlaying() {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.playAudio();
      } else {
        this.pauseAudio();
      }
    },
    pauseAudio() {
      this.audioElement.pause();
    },

    //收藏
    addCollect() {
      //获取本地储存
      let dataStr = localStorage.getItem("_SONG_");
      console.log("dataStr:", dataStr);
      if (dataStr == null) {
        let Arr = [];
        Arr[0] = this.arr[0];
        // console.log(Arr);
        // console.log(JSON.stringify(Arr))
        localStorage.setItem("_SONG_", JSON.stringify(Arr));
        // alert("收藏成功");
      } else {
        let Arr = JSON.parse(dataStr);
        // console.log(Arr);
        // let isHas=true;
        // Arr.forEach(item=>{
        //   if(item.id==1){
        //     isHas=false;
        //   }
        // })
        // if(isHas==false){
        //   alert('该歌曲已经收藏');
        //   return;
        // }
        Arr.push(this.arr[0]);
        localStorage.setItem("_SONG_", JSON.stringify(Arr));
        // alert("收藏成功");
      }
    },
    removeCollect() {
      let dataStr = localStorage.getItem("_SONG_");
      console.log(111);
      if (dataStr != null) {
        let Arr = JSON.parse(dataStr);
        Arr = Arr.filter((item) => item.id !== 1);
        localStorage.setItem("_SONG_", JSON.stringify(Arr));
        // alert("取消收藏成功");
      }
    },
  },
  created() {
    this.isAdd = localStorage.getItem("isAdd1") == "true" ? true : false;
  },
  components: {
    tipComp,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.singleSong {
  position: relative;
  width: 375px;
  height: 579px;
  .content {
    margin-top: 10px;
    .audio-info {
      width: 158px;
      margin: 0 auto;
      padding-top: 90px;
      padding-bottom: 20px;
      .img {
        width: 100%;
        height: 158px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .msg {
        h5 {
          color: #fff;
          height: 21px;
          line-height: 21px;
          margin-top: 10px;
          font-weight: normal;
          font-size: 14px;
        }
        p {
          color: #fff;
          height: 18px;
          line-height: 18px;
          font-size: 12px;
        }
      }
    }
    .audio-play {
      display: flex;
      align-items: center;
      .audio-time-current {
        color: #fff;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 0 17px;
      }
      .audio-time-total {
        color: #fff;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        padding: 0 17px;
      }
    }
    .audio-btn {
      display: flex;
      margin-top: 25px;
      justify-content: space-around;
      .audio-prev,
      .audio-next {
        .img {
          width: 25px;
          height: 25px;
          margin-top: 12.5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .img {
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.singleSong::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../public/images/c1.jpg") no-repeat;
  background-size: 100% 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  filter: blur(20px);
}
.content {
  position: relative;
  z-index: 1;
}

.audio-seek-bar {
  display: flex;
  align-items: center;
  width: 255px;
  height: 4px;
  background-color: #333;
}

.audio-play-bar {
  width: 1%;
  height: 100%;
  background-color: #fff;
}
</style>