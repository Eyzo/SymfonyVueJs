import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import _ from "lodash";
import "./style/style.scss";

new Vue({
   components: { App },
   template: "<App></App>",
   router,
   store
}).$mount("#app");