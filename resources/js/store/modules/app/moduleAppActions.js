export default {
    toggleSidebar({commit}, payload) {
        commit('TOGGLE_SIDEBAR', payload);
    },

    loading({commit}, payload) {
        commit('PRELOADER', payload);
    },

    loadingModal({commit}, payload) {
        commit('MODAL_PRELOADER', payload);
    }

}
