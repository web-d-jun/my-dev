<template>
  <div class="data-table">
    <v-flex md12 class="d-md-none">
      <v-row>
        <v-col v-for="header in headers" :key="header.key" :class="[header.align]">{{header.name}}</v-col>
      </v-row>
      <v-row v-for="item in items" :key="item.rank">
        <v-col
          v-for="(i,index) in headers.length"
          :key="i"
          :class="[`text-${headers[index].column_align}`]"
        >{{item[`${headers[index].column_name}`]}}</v-col>
      </v-row>
    </v-flex>
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
  created() {
    console.log(this.headers);
  }
}
</script>
<style lang="scss" scoped>
.data-table {
  width: 100%;
  height: 100%;
}
</style>