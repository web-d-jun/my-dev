<template>
  <div class="grid-container"></div>
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
}
</style>