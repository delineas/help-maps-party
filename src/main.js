import Vue from "vue";
import App from "./App";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);


import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faTimesCircle, faMap, faList, faMapMarker, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPlus, faTimesCircle, faMap, faList, faMapMarker, faArrowRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import store from "./store";
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.filter("truncate", function(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
