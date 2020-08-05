import Vue from 'vue';
import 'es6-promise/auto'
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import state from "./state";
import mutations from "./mutations";
import actions from './actions';
import getter from './getter'

Vue.use(Vuex)
import ModuleApp from './modules/app/moduleApp'
import ModuleAdmin from './modules/admin/moduleAdmin'

const store  = new Vuex.Store({
    state,
    getter,
    actions,
    mutations,
    modules:{
        app: ModuleApp,
        admin: ModuleAdmin
    },
    plugins: [createPersistedState()]
})

export default store
