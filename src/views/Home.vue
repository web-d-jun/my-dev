<template>
  <div class="home">
    <div>Home</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Mutation, namespace } from "vuex-class";

@Component({})
export default class home extends Vue {
  @Mutation("loaderInit", { namespace: "loaderModule" })
  loaderInit!: any;
  @Mutation("loaderDisplayShow", { namespace: "loaderModule" })
  loaderDisplayShow!: any;

  created() {
    this.loaderInit();
    this.getData();
  }

  async getData() {
    try {
      setTimeout(() => {
        this.loaderDisplayShow();
      }, 5000);
    } catch (e) {
      console.error(e.message);
    }
  }
}
</script>
