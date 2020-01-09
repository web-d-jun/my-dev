<template>
  <div class="is-loading-container" v-if="displayShow">
    <div class="is-loading">
      <img class="image" :src="Logo" alt="logo" width="60px" height="70px" />
      <div class="wave-wrap" :style="{height: progressBarValue + '%'}">
        <div class="wave"></div>
        <div class="wave2"></div>
      </div>
      <div class="inner-text">{{progressBarValue}} %</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { logo } from "@/assets/index";

@Component
export default class isLoader extends Vue {
  Logo: any = logo;
  progressBarValue: number = 1;
  displayShow: boolean = true;

  created() {
    this.progressBar();
  }

  progressBar() {
    setInterval((): void => {
      if (this.progressBarValue >= 100) {
        this.progressBarValue = 0;
        this.displayShow = false;
      }
      this.progressBarValue++;
    }, 20);
  }
}
</script>
<style lang="scss" scope>
.is-loading-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .is-loading {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .image {
      z-index: 1;
    }
    .wave-wrap {
      position: absolute;
      background: transparent;
      width: 100%;
      bottom: 0;
      left: 0;
      border: 0;
      .wave {
        position: absolute;
        width: 400px;
        height: 400px;
        margin-left: -80px;
        background: #0af;
        border-radius: 42%;
        animation: drift 2000ms infinite linear;
        opacity: 0.4;
        transform-origin: 50% 48%;
      }
      .wave2 {
        position: absolute;
        width: 400px;
        height: 400px;
        margin-left: -80px;
        border-radius: 42%;
        animation: drift 3500ms infinite linear;
        opacity: 0.4;
        background: #0af;
        transform-origin: 50% 48%;
      }
    }

    .inner-text {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
}
@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>