<template>
  <div class="custom-wrap">
    <slot></slot>
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
  padding: 20px;
  background-color: rgba($color: #fff, $alpha: 0.3);
}
</style>