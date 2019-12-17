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
      name: "순위"
    },
    {
      key: 1,
      name: "이름"
    },
    {
      key: 2,
      name: "평점"
    }
  ];

  created() {
    this.$http
      .get(
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        {
          params: {
            key: "c1c8d64f7a8fcd2a33707b7f84ada50e",
            targetDt: "20191218"
          }
        }
      )
      .then((response: any) => {
        console.log(response);
      });
    this.initialize();
  }

  initialize() {
    this.items = [
      {
        name: ""
      }
    ];
  }
}
</script>