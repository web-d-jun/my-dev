<template>
  <div class="home__dashboard">
    <is-loader></is-loader>
    <v-row>
      <v-flex md3 sm12 xs12>
        <custom-wrap>
          <div class="card__wrap">
            <v-card>
              <div class="d-flex flex-column">
                <div class="d-flex flex-row align-center">Total data1-1</div>
                <div class="d-flex flex-row justify-space-between align-center">
                  <bar-graph :width="'100px'" :height="'60px'" :data="data1" :border="'green'"></bar-graph>
                  <j-badge :innerText="'20'"></j-badge>
                </div>
              </div>
            </v-card>
          </div>
        </custom-wrap>
      </v-flex>
      <v-flex md3 sm12 xs12>
        <custom-wrap>
          <div class="card__wrap">
            <v-card>
              <div class="d-flex flex-column">
                <div class="d-flex flex-row align-center">Total data1-1</div>
                <div class="d-flex flex-row justify-space-between align-center">
                  <bar-graph :width="'100px'" :height="'60px'" :data="data2" :border="'purple'"></bar-graph>
                  <j-badge :innerText="'20'"></j-badge>
                </div>
              </div>
            </v-card>
          </div>
        </custom-wrap>
      </v-flex>
      <v-flex md3 sm12 xs12>
        <custom-wrap>
          <div class="card__wrap">
            <v-card>3</v-card>
          </div>
        </custom-wrap>
      </v-flex>
      <v-flex md3 sm12 xs12>
        <custom-wrap>
          <div class="card__wrap">
            <v-card>4</v-card>
          </div>
        </custom-wrap>
      </v-flex>
    </v-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component, Emit } from "vue-property-decorator";
import isLoader from "@/components/common/loader/index.vue";
import CustomWrap from "@/components/common/custom-wrap/index.vue";
import jBadge from "@/components/badge/index.vue";
import barGraph from "@/components/graph/bar.vue";
import { Mutation, namespace } from "vuex-class";

@Component({
  components: {
    isLoader,
    CustomWrap,
    jBadge,
    barGraph
  }
})
export default class home extends Vue {
  data1: object[] = [];
  data2: object[] = [];
  @Mutation("loaderInit", { namespace: "loaderModule" })
  loaderInit!: any;
  @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
  loaderDisplayShow!: any;

  created() {
    this.loaderInit();
    this.getData();
    this.getChart();
  }

  async getData() {
    try {
      await setInterval(this.getChart, 5000);
      setTimeout(() => {
        this.loaderDisplayShow();
      }, 1000);
    } catch (e) {
      console.error(e.message);
    }
  }

  @Emit()
  getChart() {
    this.data1 = [];
    this.data2 = [];
    for (let i = 0; i < 6; i++) {
      this.data1.push({
        value: Math.round(Math.random() * 100),
        background: "green"
      });
      this.data2.push({
        value: Math.round(Math.random() * 100),
        background: "purple"
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.home__dashboard {
  width: 100%;
  height: 100%;

  .card__wrap {
    width: 100%;
    height: 120px;
    .v-card {
      width: 100%;
      height: 100%;
      padding: 10px;
      .flex-column {
        height: 100%;
      }
    }
  }
}
</style>