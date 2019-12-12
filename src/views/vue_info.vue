<template>
  <div class="vue-info__wrapper">
    <div class="vue-info" outlined>
      
      <div class="d-flex flex-column">
        <div v-for="i in 2000" :key="i">1</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class VueInfo extends Vue {}
</script>
<style lang="scss">
.vue-info__wrapper {
  flex: 1 1 auto;
  max-width: 100%;
  position: relative;
  .vue-info {
    max-width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
}
</style>