export default {

    TOGGLE_SIDEBAR (state, option) {
        if (option == "open") {
            state.sidebarOpen = true
        } else if (option == "close") {
            state.sidebarOpen = false
        } else if (option == "toggle") {
            state.sidebarOpen = !state.sidebarOpen
        }
        if (state.sidebarOpen) {
            document.getElementsByTagName("body")[0].classList.remove("vertical-collpsed")
        } else {
            document.getElementsByTagName("body")[0].classList.add("vertical-collpsed")
        }
    },

    PRELOADER(state, payload) {
        state.preloader = payload
    },

    MODAL_PRELOADER(state, payload) {
        state.modalLoader = payload
    }
}
