<template>
  <div id="barGraph" :style="barGraph">
    <div class="box" :style="{'border-bottom': `2px solid ${border}`}">
      <div
        class="bar__wrap"
        v-for="(i, index) in data.length"
        :key="i"
        :style="{height: `${data[index].value}%`}"
      >
        <div class="bar" :style="{'background-color': data[index].background}"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class barGraph extends Vue {
  @Prop() width!: number | string;
  @Prop() height!: number | string;
  @Prop() data: any;
  @Prop() border!: string;
  /**
   * style
   */
  barGraph: object = {
    width: this.width,
    height: this.height
  };

  created() {}
}
</script>
<style lang="scss" scoped>
#barGraph {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  .box {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    .bar__wrap {
      flex: 1;
      padding: 0 4px;
      transition: height 2000ms;
      .bar {
        width: 100%;
        height: 100%;
        background-color: green;
      }
    }
  }
}
</style>