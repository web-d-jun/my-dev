import Vue from "vue";
import Vuex from "vuex";
import loaderModule from "@/store/modules/loader";
import alertStateModule from "@/store/modules/alert-state";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    loaderModule,
    alertStateModule
  }
});
