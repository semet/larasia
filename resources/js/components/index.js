import Vue from 'vue'

Vue.component('lr-auth', require('./layouts/Auth').default)
Vue.component('lr-layout', require('./layouts/Main').default)
Vue.component('lr-modal', require('./modals/ModalBase').default)
Vue.component('lr-loader', require('./preloader/Preloader').default)
Vue.component('lr-loader-modal', require('./preloader/ModalLoader').default)
