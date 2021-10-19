import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' 

// import moment from 'moment'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'



import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


// import 'bootstrap / dist / css / bootstrap.min.css'
// import Primary from './components/Primary.vue'
import router from './router.js'
import store from './store.js'  
import VueSweetalert2 from 'vue-sweetalert2';
import vueModal from 'vue-js-modal';

import VueTheMask from 'vue-the-mask';
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};


// import Vue2Filters from 'vue2-filters'
  
// Vue.use(Vue2Filters)

// Global


// import v-validate from 'v-validate'
Vue.use(VueTheMask);
Vue.use(VueSweetalert2, options);
Vue.use(BootstrapVue);
Vue.use(vueModal, { dynamicDefault: { draggable: true, resizable: true } })



Vue.use(BootstrapVueIcons)
 
// Vue.component("Primary", Primary);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



