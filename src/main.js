import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import cookiesInit from "./plugin/cookies";
import spinner from "./components/UI/Spinner.vue";
import BaseSvg from "./components/UI/BaseSvg.vue";
import Backdrop from "./components/UI/Backdrop.vue";

import CKEditor from "@ckeditor/ckeditor5-vue";
import "emoji-picker-element";
import "./index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(CKEditor);
cookiesInit(app);

app.component("backdrop", Backdrop);
app.component("base-svg", BaseSvg);
app.component("spinner", spinner);
app.mount("#app");
