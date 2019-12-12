import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/app';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true;

const firebaseConfig = {
  apiKey: "AIzaSyAYzPKHDRoNih_YwFxSRBABYJiPb3SGRlg",
  authDomain: "my-first-project-8745.firebaseapp.com",
  databaseURL: "https://my-first-project-8745.firebaseio.com",
  projectId: "my-first-project-8745",
  storageBucket: "my-first-project-8745.appspot.com",
  messagingSenderId: "680622789970",
  appId: "1:680622789970:web:02428f87be1e6a8d10968b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
