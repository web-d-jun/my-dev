<template>
  <div class="dashboard-container">
    <is-loader></is-loader>
    <v-flex>
      <v-row>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <v-card>1</v-card>
          </custom-wrap>
        </v-flex>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <v-card>2</v-card>
          </custom-wrap>
        </v-flex>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <v-card>3</v-card>
          </custom-wrap>
        </v-flex>
        <v-flex md4 sm12 xs12 class="box">
          <custom-wrap>
            <v-card>3</v-card>
          </custom-wrap>
        </v-flex>
      </v-row>
      <v-row>
        <v-flex>
          <custom-wrap>
            <data-table :headers="headers" :items="items"></data-table>
          </custom-wrap>
        </v-flex>
      </v-row>
    </v-flex>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import DataTable from "@/components/data-table/index.vue";
import isLoader from "@/components/common/loader/index.vue";
import CustomWrap from "@/components/common/custom-wrap/index.vue";
import { Mutation, namespace } from "vuex-class";

@Component({
  components: {
    DataTable,
    isLoader,
    CustomWrap
  }
})
export default class NoticeBoard extends Vue {
  dialog: boolean = false;
  items: object[] = [];
  headers: object[] = [
    {
      key: 0,
      name: "순위",
      align: "text-center",
      column_name: "rank",
      column_align: "center",
      width: "100px"
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
  }

  initialize() {
    this.getData();
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

<style lang="scss" scope>
.dashboard-container {
  width: 100%;
  height: 100%;
}
</style>