import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/page/Login.vue";
import Home from "./Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { title: "PlaceHolder - Home" },
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { title: "PlaceHolder - Login" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
