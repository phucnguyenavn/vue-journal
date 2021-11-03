import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import cookiesInit from "./plugin/cookies";
import spinner from "./components/UI/Spinner.vue";
import "./index.css";

const app = createApp(App);
app.use(store);
app.use(router);
cookiesInit(app);

app.component("spinner", spinner);
app.mount("#app");
