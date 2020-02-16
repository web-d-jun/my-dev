<template>
  <div class="data-table">
    <v-card class="d-none d-sm-block">
      <v-flex md12>
        <v-row>
          <v-col v-for="header in headers" :key="header.key" :class="[header.align]">{{header.name}}</v-col>
        </v-row>
        <v-row v-for="item in items" :key="item.rank">
          <v-col
            v-for="(i,index) in headers.length"
            :key="i"
            :class="[`text-${headers[index].column_align}`]"
            :style="{width: `${headers[index].width}`}"
          >{{item[`${headers[index].column_name}`]}}</v-col>
        </v-row>
      </v-flex>
    </v-card>
    <div class="d-sm-flex d-md-none wrap" v-for="(item) in items" :key="item.key">
      <v-card class="transparent">
        <v-img
          v-show="item.imgShow"
          class="white--text align-end"
          height="200px"
          :src="item.imgUrl"
        ></v-img>
        <v-flex v-for="header in headers" :key="header.key">
          <v-row>
            <v-col>{{header.name}}</v-col>
          </v-row>
          <v-row>
            <v-col class="col--content">{{item[header.column_name]}}</v-col>
          </v-row>
        </v-flex>
      </v-card>
    </div>
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
  .row {
    margin: 0;
    border: 0;
    border-top: 1px solid #323232;
    border-bottom: 1px solid #323232;
    .col {
      &--content {
        background-color: #3b3b3b;
      }
    }
  }
  .wrap {
    padding: 4px;
    .row {
      margin: 0;
      border: 0;
      border-top: 1px solid #323232;
      border-bottom: 1px solid #323232;
      .col {
        &--content {
          background-color: #EEEEEE;
        }
      }
    }
  }
}
</style>