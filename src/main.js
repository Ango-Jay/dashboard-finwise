import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import ImgLazyLoad from "./directives/lazyLoadImg";

createApp(App)
  .directive("lazyload", ImgLazyLoad)
  .use(store)
  .use(router)
  .mount("#app");
