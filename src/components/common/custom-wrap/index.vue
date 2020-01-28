<template>
  <div class="custom-wrap">
    <div class="custom-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CustomWrap extends Vue {}
</script>
<style lang="scss">
.custom-wrap {
  width: 100%;
  padding: 15px;

  .custom-content {
    width: 100%;
    background-color: rgba($color: #fff, $alpha: 0.3);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 5px 6px -3px rgba($color: #000, $alpha: 0.2),
      0px 9px 12px 1px rgba($color: #000, $alpha: 0.14),
      0px 3px 16px 2px rgba($color: #000, $alpha: 0.2);
  }
}
</style>