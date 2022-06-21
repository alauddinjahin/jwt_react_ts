import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthUser } from "../Redux/AuthSlice";
import { AuthSigniture } from "../types/AuthSigniture.type";

const PrivateRoute = () => {
    const authUser = useAuth();
    return (
        authUser.auth ? <Outlet /> : <Navigate to={'/login'} />
    )
}


const useAuth = () => {
    const authUser: AuthSigniture = useSelector(getAuthUser);
    const user = authUser ? authUser.user : null;
    return { auth: (user && user.loggedIn), user };
}


const ProtectedRoute = () => {
    const authUser = useAuth();

    return (
        !authUser.auth ? <Outlet /> : <Navigate to={'/dashboard'} />
    )
}


export { PrivateRoute, ProtectedRoute, useAuth };
