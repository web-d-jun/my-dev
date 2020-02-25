<template>
  <div class="carousel__container__wrap">
    <div class="carousel__container">
      <div class="contents">
        <perfect-scrollbar>
          <slot></slot>
        </perfect-scrollbar>
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
    .contents {
      white-space: nowrap;
      width: 100%;
    }
  }
}
</style>