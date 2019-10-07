import Vue from "vue"
import Vuex from "vuex";
import PostModule from "./post";
import ArticleModule from "./article";

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
       post: PostModule,
       article: ArticleModule
   }
});