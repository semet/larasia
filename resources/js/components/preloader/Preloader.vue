<template>
    <div>
        <loading :active.sync="loading"
        :opacity="0.7"
        :can-cancel="true"
        :loader="loader"
        :color="color"
        :is-full-page="fullPage"></loading>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: 'preloader',
    components: {Loading},
    data() {
        return {
            fullPage: false,
            loader: 'dots',
            color: '#2aad8a',
            opacity: '0.8'
        }
    },
    computed:{
        ...mapState('app', {
            loading: state => state.preloader
        })
    }
}
</script>
