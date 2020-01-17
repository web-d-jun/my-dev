import Vue from "vue";
import Vuex from "vuex";
import loaderModule from "@/store/modules/loader";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loaderModule
  }
});
