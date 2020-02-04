<template>
  <div id="badge" :style="badgeStyle">
    <strong>{{innerText}}%</strong>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
interface RGB {
  R: number;
  G: number;
  B: number;
}
@Component
export default class jBadge extends Vue {
  @Prop() innerText!: string | number;
  @Prop() background!: string;
  @Prop({ default: 1 }) opacity!: number;
  rgb: RGB = {
    R: parseInt(this.background.substring(1, 3), 16),
    G: parseInt(this.background.substring(3, 5), 16),
    B: parseInt(this.background.substring(5, 7), 16)
  };
  badgeStyle: object = {
    backgroundColor: `rgba(${this.rgb.R},${this.rgb.G},${this.rgb.B},${this.opacity})`,
    color: this.background
  };
  created() {}
}
</script>
<style lang="scss" scoped>
#badge {
  border-radius: 15px;
  border: 1px solid transparent;
  width: 60px;
  text-align: center;
  position: relative;
}
</style>