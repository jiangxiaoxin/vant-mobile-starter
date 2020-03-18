import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import ajax from "./axios";
import "./vant";
import "./utils/lib-flexible";

Vue.prototype.$ajax = ajax;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
