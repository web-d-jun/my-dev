<template>
  <div class="grid-container">
    <div class="container">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <div class="item item8">8</div>
      <div class="item item9">9</div>
      <div class="item item10">+/-</div>
      <div class="item item10">0</div>
      <div class="item item10">.</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Grid extends Vue {}
</script>
<style lang="scss" scoped>
.grid-container {
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
    .item {
      text-align: center;
      font-size: 30px;
      border: 1px solid rgba($color: #000000, $alpha: 0.6);
    }
  }
}
</style>