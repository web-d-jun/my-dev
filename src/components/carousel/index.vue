<template>
  <div class="carousel__container__wrap">
    <div class="carousel__container">
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class JCarousel extends Vue {}
</script>
<style lang="scss" scoped>
.carousel__container__wrap {
  overflow: hidden;
  height: 33px;
  border-bottom: 1px solid #d8dce5;
  .carousel__container {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;

    &:hover {
      &::-webkit-scrollbar {
        width: 5px;
        height: 8px;
        background-color: transparent;
        display: block !important;
      }
    }

    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: transparent;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    .contents {
      white-space: nowrap;
      width: 100%;
      margin-bottom: -6px;
    }
  }
}
</style>