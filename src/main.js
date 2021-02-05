import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWifi, faPhone,faMountain, faBacon,faWind,faSmokingBan,faGlassMartiniAlt,faAsterisk,faChild,faConciergeBell,faCouch,faDog} from '@fortawesome/free-solid-svg-icons'
import store from './store.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWifi, faPhone,faMountain, faBacon,faWind,faSmokingBan,faGlassMartiniAlt,faAsterisk,faChild,faConciergeBell,faCouch,faDog );
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
