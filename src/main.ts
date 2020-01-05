import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import Axios from "axios";
import * as moment from "moment";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.prototype.$http = Axios;
Vue.prototype.$moment = moment;
Vue.prototype.$Numberformat = (value: number) => {
  return new Intl.NumberFormat().format(value);
};

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
