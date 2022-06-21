import {  createSlice } from "@reduxjs/toolkit";
import { eraseCookie, getCookie, setCookie } from "../Utilities/Cookie";

const initialState = {
    auth: false,
    user: {
        loggedIn: false,
        name:'',
        email:'',
        mobile:'',
        token: null
    }
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            if (payload && payload.user) {
                setCookie('jwt_cookie', JSON.stringify({ ...state, ...payload }), 7);
                return { ...state, ...payload };
            }
        },
        register: (state, {payload}) => {
            if (payload && payload.user){
                setCookie('jwt_cookie', JSON.stringify({ ...state, ...payload }), 7);
            }
        },
        logout: () => {
            eraseCookie('jwt_cookie');
            return initialState;
        }
    },
});

export const { login, register, logout } = authSlice.actions;

export const getAuthUser = (state) => {

    if (state.auth && state.auth.auth && state.auth.user) {
        return state.auth;
    } else {
        const authData = getCookie('jwt_cookie') ? JSON.parse(getCookie('jwt_cookie')) : null;
        if (authData) {
            return { ...authData };
        } else {
            return initialState;
        }
    }
};

export default authSlice.reducer;
