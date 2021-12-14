import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/page/Login.vue";
import Registration from "./components/page/Registration.vue";
import Home from "./components/page/Home.vue";
import Journal from "./components/page/Journal.vue";
import Page from "./components/page/Page.vue";

import { $cookies } from "./plugin/cookies";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { title: " Home" },
    children: [
      {
        path: "journal",
        component: Journal,
        name: "journal",
        meta: { title: " Journal" },
        children: [
          {
            path: "/page/:created",
            component: Page,
            name: "page",
            meta: { title: " Journal" },
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: { title: " Login" },
  },
  {
    path: "/signup",
    component: Registration,
    name: "signup",
    meta: { title: " Registration" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.name !== "login" && to.name !== "signup" && !isAuthenticated())
    next({ name: "login" });
  else if ((to.name === "login" || to.name === "signup") && isAuthenticated()) {
    next({ name: "home" });
  } else next();
});

export const isAuthenticated = () => {
  return $cookies.get("token") && localStorage.getItem("user-id");
};

export default router;
