import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Posts from "../views/Posts";
import Post from "../views/Post";
import Article from "../views/Article";

Vue.use(VueRouter);

export default new VueRouter({
   mode: "history",
   routes: [
       { path: "/home", name: "home", component: Home },
       { path: "/posts", name:"posts", component: Posts },
       { path: "/post/:id", name:"post", component: Post },
       { path: "/articles", name: "articles", component: Article },
       { path: "*",redirect: "home" }
   ]
});