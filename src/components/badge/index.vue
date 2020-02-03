<template>
  <div id="badge">{{innerText}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class jBadge extends Vue {
  @Prop() innerText!: string;
}
</script>
<style lang="scss" scoped>
#badge {
}
</style>