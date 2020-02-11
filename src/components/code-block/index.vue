<template>
  <div id="code-block__container">
    <div class="code-block--wrap" :class="{'active' : mode === 'active'}">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CodeBlock extends Vue {
  @Prop() mode!: string;
}
</script>

<style lang="scss"  scoped>
#code-block__container {
  width: 100%;
  height: 100%;
  font-family: "Courier 10 Pitch", Courier, monospace;
  font-size: 95%;
  border: 1px solid transparent;
  padding: 10px;
  margin-bottom: 20px;

  .code-block--wrap {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(#424242, 0.4);
    background-color: #282c34;
    color: #fff;
    box-shadow: 0 7px 2px -0.3px rgba(#000, 0.4), 0 7px 8px 1px rgba(#000, 0.4),
      0 8px 5px 9px rgba(#000, 0.4);
    border-radius: 10px;
    overflow: auto;
  }

  .active {
    background-color: #1f2a41;
  }
}
</style>