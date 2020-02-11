<template>
  <div class="error-page__container d-flex">
    <div class="inner__text">
      <strong>404</strong>
    </div>
  </div>
</template>



<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class __404__ extends Vue {}
</script>
<style lang="scss" scoped>
.error-page__container {
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  .inner__text {
    font-size: 90pt;
    color: #424242;
  }
}
</style>