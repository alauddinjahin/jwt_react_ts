import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password:''
};


const formDataSlice = createSlice({
    name: "form_data",
    initialState,
    reducers: {
        setData: (state, {payload}) => {
            if (payload){
                return {...state, ...payload};
            }
        },
        resetData: () => {
            return initialState;
        }
    },
});

export const { setData, resetData } = formDataSlice.actions;

export const getUserData = (state) => state.form_data;

export default formDataSlice.reducer;
