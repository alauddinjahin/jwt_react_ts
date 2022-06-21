import axios from "axios";
import { getCookie } from "./Utilities/Cookie";
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URI;

const authUser = getCookie('std_cookie') ? JSON.parse(getCookie('std_cookie')) : null;

if (authUser && authUser.auth && authUser.authorization.token) {
    axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + authUser.authorization.token
    };
}

function setAxiosHeader(token){
    axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + token
    };
}

export { setAxiosHeader };
