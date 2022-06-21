import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import formReducer from "./FormDataSlice";

const store = configureStore({
    reducer:{
        auth: authReducer,
        form_data: formReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
    ],
});

export default store;