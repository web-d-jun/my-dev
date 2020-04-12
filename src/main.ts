import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import Axios from "axios";
import * as moment from "moment";
import PerfectScrollbar from "vue2-perfect-scrollbar";
// import "font-awesome/css/font-awesome.min.css";
// import "font-awesome/css/font-awesome.css";
// import "font-awesome/fonts/FontAwesome.otf";
// import "font-awesome/fonts/fontawesome-webfont.svg";
// import "font-awesome/fonts/fontawesome-webfont.eot";
// import "font-awesome/fonts/fontawesome-webfont.ttf";
// import "font-awesome/fonts/fontawesome-webfont.woff";
// import "font-awesome/fonts/fontawesome-webfont.woff2";


Vue.use(PerfectScrollbar);

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
