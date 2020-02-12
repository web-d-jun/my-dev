<template>
  <div id="page1__container">
    <is-loader></is-loader>
    <v-row>
      <v-flex md4 sm12 xs12>
        <custom-wrap>
          <div class="card__wrap">
            <div class="card__title light">data1-group</div>
            <v-card>
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="col__header">data1-1</div>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <v-text-field readonly :value="data1_values.value1"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="col__header">data1-2</div>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <v-text-field readonly :value="data1_values.value2"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="col__header">data1-3</div>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <v-text-field readonly :value="data1_values.value3"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <div class="col__header">data1-4</div>
                </v-col>
                <v-col cols="12" md="6" sm="12" xs="12">
                  <v-text-field readonly :value="data1_values.value4"></v-text-field>
                </v-col>
              </v-row>
            </v-card>
            <div class="button-group">
              <v-btn @click="data1DialogOpen()">{{data1DialogText}}</v-btn>
            </div>
          </div>
        </custom-wrap>
        <data-modal-a v-if="data1_show" @save="save" @close="close"></data-modal-a>
      </v-flex>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { Mutation, namespace } from "vuex-class";
import isLoader from "@/components/common/loader/index.vue";
import CustomWrap from "@/components/common/custom-wrap/index.vue";
import DataModalA from "./modal/data1-modal.vue";

@Component({
  components: {
    isLoader,
    CustomWrap,
    DataModalA
  }
})
export default class Page1 extends Vue {
  data1_show: boolean = false;
  data1DialogText: string = "open";
  data1_values: any = {};

  @Mutation("loaderInit", { namespace: "loaderModule" })
  loaderInit!: any;
  @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
  loaderDisplayShow!: any;

  created() {
    this.init();
  }

  mounted() {
    setTimeout(() => {
      this.loaderDisplayShow();
    }, 1000);
  }

  @Emit()
  init() {
    this.loaderInit();
  }

  @Emit()
  data1DialogOpen() {
    this.data1_show = !this.data1_show;
  }

  @Emit()
  save(value: any) {
    this.data1_values = value;
    console.log("save");
    this.close();
  }

  @Emit()
  close() {
    this.data1_show = false;
    console.log("close");
  }
}
</script>
<style lang="scss" scoped>
#page1__container {
  width: 100%;
  height: 100%;
  .card__wrap {
    width: 100%;
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    .card__title {
      width: 100%;
      height: 50px;
      padding-left: 20px;
      font-size: 20px;
      display: flex;
      align-items: center;
      background-color: #000;
      color: rgba(#ffffff, 0.6);
      
    }
    .v-card {
      padding: 15px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    .col__header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .button-group {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>