<template>
  <div class="j-dialog__container">
    <div class="wrap" :style="style">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class JDialog extends Vue {
  @Prop() width!: number;
  @Prop() height!: number;

  style: object = {
    width: this.width + "px",
    height: this.height + "px"
  };
}
</script>
<style lang="scss">
.j-dialog__container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #3f3f3f, $alpha: 0.35);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  .wrap {
    margin-top: 30px;
    background: linear-gradient(#dcb7dc 20%, #acb7dc 70%);
    padding: 10px;
  }
}
</style>