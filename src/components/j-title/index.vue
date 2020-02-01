<template>
  <div id="title-wrap">
    <div class="title-container" :style="{'color': color}">{{title}}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class jTitle extends Vue {
  @Prop({ default: "-" }) readonly title!: string;
  @Prop() color!: string;
}
</script>
<style lang="scss" scoped>
</style>