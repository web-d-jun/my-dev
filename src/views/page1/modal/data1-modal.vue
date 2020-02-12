<template>
  <j-dialog :width="300" :height="500">
    <div id="data1-modal__container">
      <div class="head">data1-dialog-title</div>
      <v-divider></v-divider>
      <div class="body">
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12">
            <v-text-field label="data1-value" v-model="data.value1" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12">
            <v-text-field label="data2-value" v-model="data.value2"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12">
            <v-text-field label="data3-value" v-model="data.value3"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" sm="12" xs="12">
            <v-text-field label="data4-value" v-model="data.value4"></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="foot">
        <v-row>
          <v-col>
            <div class="button__wrap">
              <v-btn small color="primary" @click="send()">저장</v-btn>
              <v-btn small color="error" @click="$emit('close')">닫기</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </j-dialog>
</template>
<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import JDialog from "@/components/j-dialog/index.vue";
import { Mutation, namespace } from "vuex-class";

@Component({
  components: {
    JDialog
  }
})
export default class DataModalA extends Vue {
  dataState: boolean = false;
  data: any = {};

  @Mutation("alertState", { namespace: "alertStateModule" })
  alertState!: any;

  created() {}

  @Emit()
  send() {
    this.$emit("save", this.data);
    this.alertState(true);
  }
}
</script>
<style lang="scss" scoped>
#data1-modal__container {
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  background-color: #fff;
  padding: 8px;
  .head {
    width: 100%;
    height: 40px;
    font-size: 20px;
    line-height: 40px;
    padding-left: 10px;
  }
  .foot {
    .button__wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>