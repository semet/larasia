import Cookies from 'js-cookie';

export default {
    UPDATE_LOGIN_STATUS(state, payload) {
        state.isLogin = payload
    },
    SET_TOKEN(state, {token, remember}) {
        state.token = token,
        Cookies.set('token', token, { expires: remember ? 365 : null })
    },
    FETCH_ADMIN(state, {payload}) {
        state.profile = payload
    },
    LOGIN_FAILUR(state) {
        state.isLogin = false,
        state.token = null,
        Cookies.remove('token');
    },

    LOGOUT(state) {
        state.isLogin = false,
        state.token = null,
        Cookies.remove('token');
    }
}
