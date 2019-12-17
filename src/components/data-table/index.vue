<template>
  <div class="data-table">
    <v-flex md12>
      <v-row>
        <v-col v-for="header in headers" :key="header.key">{{header.name}}</v-col>
      </v-row>
      <v-row>
        <v-col>1</v-col>
        <v-col>1</v-col>
      </v-row>
    </v-flex>
    <div>{{items}}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DataTable extends Vue {
  @Prop()
  readonly items: any;
  @Prop()
  readonly headers: any;
  created() {}
}
</script>
<style lang="scss" scoped>
.data-table {
  width: 100%;
  height: 100%;
}
</style>