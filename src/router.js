import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/page/Login.vue";
import Registration from "./components/page/Registration.vue";
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
  {
    path: "/signup",
    component: Registration,
    name: "signup",
    meta: { title: "PlaceHolder - Registration" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
