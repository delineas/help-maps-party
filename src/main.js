import Vue from "vue";
import App from "./App";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

Vue.use(Buefy);

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
