<template>
  <data-table :items="items"></data-table>
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
  created() {
    this.initialize();
  }

  initialize() {
    this.items = [
      {
        test: 1
      }
    ];
  }
}
</script>