<template>
  <div class="custom-wrap">
    <div class="custom-content">
      <div class="header__wrap">
        <div class="header">{{title}}</div>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CustomWrap extends Vue {
  @Prop({ default: "-" }) title!: string;
}
</script>
<style lang="scss" >
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
    .header__wrap {
      width: 100%;
      height: 100%;
      position: relative;
      .header {
        display: inline-block;
        background-color: rgba(#fff, 0.7);
        max-width: 100%;
        min-width: 45px;
        min-height: 30px;
        line-height: 30px;
        text-align: center;
        padding: 4px;
        font-size: 20px;
        color: rgba(2, 2, 2, 0.589);
        border: 1px solid transparent;
        border-radius: 4px 4px 0 0;
      }
    }
    .body {
    }
  }
}
</style>