import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import 'vue-trix'
import router from './router'
import VModal from 'vue-js-modal'
import axios from 'axios'

Vue.use(VModal)
Vue.use(VeeValidate);
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
  data: {
    showModal: false
  }
}).$mount('#app')
