import axios from 'axios'

export default {

    login(email, password, remember) {
        return axios.post('/api/admin/login', {
            email   : email,
            password: password,
            remember: remember
        })
    },

    profile() {
        return axios.get('/api/admin/user');
    },

    logout() {
        return axios.get('/api/admin/logout');
    }
}
