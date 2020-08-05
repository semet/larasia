import Vue from 'vue'
import api from '@/api/auth/admin/admin.api.js';
import router from '@/router';
export default {
    login({commit}, payload) {

        const sendLoginRequest = async () => {
            try{
                const response = await api.login(payload.email, payload.password, payload.remember)

                if(response.data.token){
                    await commit('UPDATE_LOGIN_STATUS', true);
                    await commit('SET_USER_TYPE', 'admin', {root:true});
                    await commit('SET_TOKEN', {
                        token: response.data.token,
                        remember: payload.remember
                    });
                    const {data} = await api.profile()
                    await commit('FETCH_ADMIN', {payload: data})
                    await router.push({ name: 'admin-home'})
                }
            }catch(error){
                console.log(error)
                Vue.prototype.$toastr.Add({
                    title: "Login Failed",
                    msg: error.response.data.message,
                    position: "toast-top-left",
                    type: "error",
                });
                commit('LOGIN_FAILUR')
            }
        }
        sendLoginRequest();
    },

    logout({commit}) {
       const sendLogoutRequest = async () => {
           const {response} = await api.logout()
           await commit('LOGOUT')
           await router.push({ name: 'admin-login'})
       }

       sendLogoutRequest()

    }
}
