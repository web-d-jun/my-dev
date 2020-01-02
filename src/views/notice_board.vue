
<template>
  
  <data-table :headers="headers" :items="items"></data-table>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import DataTable from "@/components/data-table/index.vue";

@Component({
  components: {
    DataTable
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
      column_name: 'rank',
      column_align: 'center'
    },
    {
      key: 1,
      name: "영화명",
      align: "text-center",
      column_name: 'movieNm',
      column_align: 'start'
    },
    {
      key: 2,
      name: "개봉일",
      align: "text-center",
      column_name: 'openDt',
      column_align: 'center'
    },
    {
      key: 3,
      name: "매출액",
      align: "text-end",
      column_name: 'salesAmt',
      column_align: 'end'
    },
    {
      key: 4,
      name: "관객수",
      align: "text-end",
      column_name: 'audiCnt',
      column_align: 'end'
    },
    {
      key: 5,
      name: "평점",
      align: "text-center",
      column_name: 'audit',
      column_align: 'center'
    }
  ];

  created() {
    this.initialize();
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
            salesAmt: data.salesAmt,
            audiCnt: data.audiCnt
          };
        }
      );
    } catch (e) {
      console.error(e.message);
    }
  }
}
</script>