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
    meta: { title: "PlaceHolder - Home" },
    children: [
      {
        path: "/journal",
        component: Journal,
        name: "journal",
        meta: { title: "PlaceHolder - Journal" },
        children: [
          {
            path: "/:id",
            component: Page,
            name: "page",
            meta: { title: "PlaceHolder - Journal" },
          },
        ],
      },
    ],
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

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if ((to.name !== "login" && to.name !== "signup") && !isAuthenticated())
    next({ name: "login" });
  else if ((to.name === "login" || to.name === "signup") && isAuthenticated()) {
    next({ name: "home" });
  } else next();
});

const isAuthenticated = () => {
  return $cookies.get("token");
};

export default router;
