<template>
  <div class="is-loading-container" v-if="displayShow">
    <div class="is-loading-wrap">
      <div class="is-loading">
        <img class="image" :src="Logo" alt="logo" width="60px" height="70px" />
        <div class="wave-wrap" :style="{height: progressBarValue + '%'}">
          <div class="wave"></div>
          <div class="wave2"></div>
        </div>
      </div>
      <div class="outline"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { logo } from "@/assets/index";
import { State, Mutation, namespace } from "vuex-class";

@Component
export default class isLoader extends Vue {
  Logo: any = logo;
  progressBarValue: number = 1;
  test: any;

  @State("loaderDisplay", { namespace: "loaderModule" })
  loaderDisplay!: boolean;

  @State("loaderProgressInit", { namespace: "loaderModule" })
  loaderProgressInit!: boolean;

  created() {
    this.progressBar();
  }

  get displayShow() {
    return this.loaderDisplay;
  }

  progressBar() {
      setInterval((): void => {
        if (this.progressBarValue >= 100) {
          this.progressBarValue = 0;
          console.log("??")
        }
        this.progressBarValue++;
      }, 30);
  }
}
</script>
<style lang="scss" scope>
.is-loading-container {
  width: 100%;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  background: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #303030;
  .is-loading-wrap {
    position: relative;
    width: 215px;
    height: 215px;
    border-top: 1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 1rem #08f,
      inset 0 0 1rem #08f, 0 0 2rem #08f, inset 0 0 2rem #08f;

    .is-loading {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid transparent;
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
    }
    .outline {
      position: absolute;
      width: 100%;
      height: 100%;
      border-top: 5px solid #fff;
      border-radius: 50%;
      animation: spin 3000ms infinite linear;
      // &::before,
      // &::after {
      //   content: " ";
      //   display: block;
      // }
      // &::before {
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   width: 10px;
      //   height: 5px;
      //   border-radius: 50%;
      //   box-shadow: 0 0 0.5rem #fff, inset 0 0 0.5rem #fff, 0 0 1rem rgb(255, 230, 0),
      //     inset 0 0 1rem rgb(255, 230, 0), 0 0 2rem #08f, inset 0 0 2rem rgb(255, 230, 0);
      // }
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>