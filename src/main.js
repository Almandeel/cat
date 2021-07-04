import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";


// import translation
import VueI18n from 'vue-i18n';
import messages from './lang';
Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale:  "en" ,
  fallbackLocale:  "en" ,
  messages
});

// set default lang 
localStorage.setItem("lang", "en")
// if(!localStorage.getItem('lang')) {
//   localStorage.setItem("lang", "en")
// }



// import  vuesax 
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)


// import slider
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
