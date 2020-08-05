require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueToastr from "vue-toastr"
import VueSweetalert2 from 'vue-sweetalert2';
import progressbar from '@/components/progressbar'

import './components'

Vue.config.productionTip = false

Vue.use(VueToastr,{
    defaultTimeout: 5000,
    defaultProgressBar: false,
})
Vue.use(VueSweetalert2);
new Vue({
    store,
    router,
    progressbar,
    render: h => h(App),
}).$mount('#app')
