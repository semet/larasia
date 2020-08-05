import Cookies from 'js-cookie';
export default {
    isLogin: false,
    profile: null,
    token  : Cookies.get('token')
}
