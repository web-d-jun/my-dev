<template>
  <div class="home">
    <is-loader></is-loader>
    <div>Home</div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import { Component } from "vue-property-decorator";
import isLoader from "@/components/common/loader/index.vue";

@Component({
  components: {
    isLoader
  }
})
export default class home extends Vue {}
</script>
