<template>
  <div class="dashboard-container">
    <is-loader></is-loader>
    <v-flex>
      <v-row>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <j-title :title="'graph_1'"></j-title>
            <div
              :class="['card__wrap',{'flip': flip}]"
              @click="cardFlip()"
              @mouseleave="defaultCard()"
            >
              <v-card :class="['graph__card graph_1__card graph_1__card--front']">
                <div class="graph column justify-content--center align-items--center">
                  <j-title :title="'data1-1'" :color="'#f2a649'"></j-title>
                  <div class="graph__wrap">
                    <div class="graph__bar">
                      <div
                        class="inner__bar inner__bar--one"
                        :style="{width: `${graph_1_value}%`}"
                      >{{graph_1_value}}%</div>
                    </div>
                  </div>
                  <j-title :title="'data1-2'" :color="'#27498c'"></j-title>
                  <div class="graph__wrap">
                    <div class="graph__bar">
                      <div
                        class="inner__bar inner__bar--two"
                        :style="{width: `${graph_2_value}%`}"
                      >{{graph_2_value}}%</div>
                    </div>
                  </div>
                </div>
              </v-card>
              <v-card class="graph__card graph_1__card graph_1__card--back">
                <div class="graph column justify-content--center align-items--center">
                  <div class="graph__wrap">back</div>
                </div>
              </v-card>
            </div>
          </custom-wrap>
        </v-flex>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <j-title :title="'title2'"></j-title>
            <div
              :class="['card__wrap',{'flip': flip}]"
              @click="cardFlip()"
              @mouseleave="defaultCard()"
            >
              <v-card class="graph__card graph_2__card graph_2__card--front">
                <div class="graph column">
                  <j-title :title="'data2'" :color="'#f2a649'"></j-title>
                  <div class="graph__wrap">
                    <div>
                      <small>$</small>
                      <strong>{{data2.text}}</strong>
                    </div>
                    <v-sparkline
                      :value="data2.value"
                      :line-width="data2.width"
                      :gradient="data2.gradient[0]"
                      :smooth="data2.radius || false"
                      :type="'trend'"
                      auto-draw
                    ></v-sparkline>
                  </div>
                </div>
              </v-card>
              <v-card class="graph__card graph_2__card graph_2__card--back">
                <div class="graph column justify-content--center align-items--center">
                  <div class="graph__wrap">back</div>
                </div>
              </v-card>
            </div>
          </custom-wrap>
        </v-flex>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <j-title :title="'title3'"></j-title>
            <div
              :class="['card__wrap',{'flip': flip}]"
              @click="cardFlip()"
              @mouseleave="defaultCard()"
            >
              <v-card class="graph__card graph_3__card graph_3__card--front">
                <div class="graph column">
                  <j-title :title="'data3'" :color="'#f2a649'"></j-title>
                  <div class="graph__wrap">
                    <div>
                      <small>$</small>
                      <strong>{{data3.text}}</strong>
                    </div>
                    <v-sparkline
                      :value="data3.value"
                      :line-width="data3.width"
                      :gradient="data3.gradient[0]"
                      :smooth="data3.radius || false"
                      :type="'trend'"
                      auto-draw
                    ></v-sparkline>
                  </div>
                </div>
              </v-card>
              <v-card class="graph__card graph_3__card graph_3__card--back">
                <div class="graph column justify-content--center align-items--center">
                  <div class="graph__wrap">back</div>
                </div>
              </v-card>
            </div>
          </custom-wrap>
        </v-flex>
      </v-row>
      <v-row>
        <v-flex>
          <custom-wrap>
            <j-title :title="'영화'"></j-title>
            <data-table :headers="headers" :items="items"></data-table>
          </custom-wrap>
        </v-flex>
      </v-row>
    </v-flex>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Emit } from "vue-property-decorator";
import DataTable from "@/components/data-table/index.vue";
import isLoader from "@/components/common/loader/index.vue";
import CustomWrap from "@/components/common/custom-wrap/index.vue";
import { Mutation, namespace } from "vuex-class";
import jTitle from "@/components/j-title/index.vue";

@Component({
  components: {
    DataTable,
    isLoader,
    CustomWrap,
    jTitle
  }
})
export default class NoticeBoard extends Vue {
  dialog: boolean = false;
  graph_1_value: number = 1;
  graph_2_value: number = 1;
  flip: boolean = false;
  data2: any = {
    width: 2,
    value: [],
    gradient: [["#42f5aa"]],
    radius: 10,
    text: 0
  };
  data3: any = {
    width: 2,
    value: [],
    gradient: [["#e6007e"]],
    radius: 10,
    text: 0
  };
  items: object[] = [];
  headers: object[] = [
    {
      key: 0,
      name: "순위",
      align: "text-center",
      column_name: "rank",
      column_align: "center",
      width: "50px"
    },
    {
      key: 1,
      name: "영화명",
      align: "text-center",
      column_name: "movieNm",
      column_align: "start",
      width: "250px"
    },
    {
      key: 2,
      name: "개봉일",
      align: "text-center",
      column_name: "openDt",
      column_align: "center",
      width: "150px"
    },
    {
      key: 3,
      name: "매출액",
      align: "text-end",
      column_name: "salesAmt",
      column_align: "end",
      width: "200px"
    },
    {
      key: 4,
      name: "관객수",
      align: "text-end",
      column_name: "audiCnt",
      column_align: "end",
      width: "200px"
    },
    {
      key: 5,
      name: "평점",
      align: "text-center",
      column_name: "audit",
      column_align: "center",
      width: "130px"
    }
  ];

  @Mutation("loaderInit", { namespace: "loaderModule" })
  loaderInit!: any;

  @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
  loaderDisplayShow!: any;

  created() {
    this.initialize();
    this.loaderInit();
    this.data2Graph();
  }

  initialize() {
    this.getData();
    this.getGraphData();
  }

  mounted() {
    setInterval(this.getGraphData, 5000);
    setInterval(this.data2Graph, 5000);
  }

  @Emit()
  getGraphData() {
    this.graph_1_value = Math.round(Math.random() * 100);
    this.graph_2_value = Math.round(Math.random() * 100);
  }

  @Emit()
  cardFlip() {
    this.flip = !this.flip;
  }

  @Emit()
  defaultCard() {
    this.flip = false;
  }

  @Emit()
  data2Graph() {
    this.data2.value = [];
    this.data3.value = [];
    for (let i = 0; i < 10; i++) {
      this.data2.value.push(Math.round(Math.random() * 10));
    }
    for (let i = 0; i < 15; i++) {
      this.data3.value.push(Math.round(Math.random() * 10));
    }
    this.data2.text = Math.round(Math.random() * 1000);
    this.data3.text = Math.round(Math.random() * 1000);
  }

  async getData() {
    let target = (this as any)
      .$moment()
      .subtract(1, "days")
      .format("YYYYMMDD");
    let move_api =
      "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    try {
      const movieApi = await (this as any).$http.get(move_api, {
        params: {
          key: "c1c8d64f7a8fcd2a33707b7f84ada50e",
          targetDt: `${target}`
        }
      });

      this.items = movieApi.data.boxOfficeResult.dailyBoxOfficeList.map(
        (data: any, index: number) => {
          return {
            rank: data.rank,
            movieNm: data.movieNm,
            openDt: data.openDt,
            salesAmt: (this as any).$Numberformat(data.salesAmt),
            audiCnt: (this as any).$Numberformat(data.audiCnt),
            audit: "★★★★☆",
            imgShow: true,
            imgUrl: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          };
        }
      );
      this.loaderDisplayShow();
    } catch (e) {
      console.error(e.message);
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  width: 100%;
  height: 100%;
  .card__wrap {
    position: relative;
    width: 100%;
    height: 150px;
    cursor: pointer;
    &.flip {
      &:hover {
        .graph_1__card--front,
        .graph_2__card--front,
        .graph_3__card--front {
          transform: rotateX(90deg);
          transition: all 500ms;
          opacity: 0;
        }
        .graph_1__card--back,
        .graph_2__card--back,
        .graph_3__card--back {
          transform: rotateX(0deg);
          transition: all 1000ms;
        }
      }
    }

    .graph__card {
      &.graph_1__card {
        border: 4px solid rgba(#405173, 0.4);
        border-bottom-color: #405173;
        &--front {
          transform: rotateX(0deg);
          transition: all 1000ms;
        }
        &--back {
          transform: rotateX(90deg);
          transition: all 500ms;
        }
      }

      &.graph_2__card {
        border: 4px solid rgba(#42f5aa, 0.4);
        border-bottom-color: #42f5aa;
        &--front {
          transform: rotateX(0deg);
          transition: all 1000ms;
        }
        &--back {
          transform: rotateX(90deg);
          transition: all 500ms;
        }
      }
      
      &.graph_3__card {
        border: 4px solid rgba(#e6007e, 0.4);
        border-bottom-color: #e6007e;
        &--front {
          transform: rotateX(0deg);
          transition: all 1000ms;
        }
        &--back {
          transform: rotateX(90deg);
          transition: all 500ms;
        }
      }
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .graph {
        height: 100%;
        display: flex;
        &.column {
          flex-direction: column;
        }
        &.justify-content--center {
          justify-content: center;
        }
        &.align-items--center {
          align-items: center;
        }

        padding: 0 10px;

        .graph__wrap {
          width: 100%;
          height: 40px;
          padding: 10px;
          .graph__bar {
            border: 1px solid #d9d9d9;
            width: 100%;
            height: 100%;
            position: relative;

            .inner__bar {
              left: 0;
              top: 0;
              height: 100%;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: width 2000ms;

              &--one {
                background-color: #f2a649;
                color: #27498c;
              }

              &--two {
                background-color: #27498c;
                color: #f2a649;
              }

              &::after {
                position: absolute;
                content: "";
                right: -2px;
                bottom: 0;
                width: 4px;
                height: 30px;
                // border: 1px groove #f2a649;
                background-color: #f26e50;
              }

              &::before {
                position: absolute;
                content: "";
                right: -5px;
                top: -20px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #f26e50;
              }
            }
          }
        }
      }
    }
  }
}
</style>