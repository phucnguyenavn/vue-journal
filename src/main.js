import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/index"; 
import cookies from "vue3-cookies";
import spinner from "./components/UI/Spinner.vue"
import "./index.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(cookies);

app.component("spinner",spinner);
app.mount("#app");