import React from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";


const routes = [
    {
        path: '/',
        element: <Home />,
        isPrivate: false
    },
    {
        path: 'login',
        element: <Login />,
        isPrivate: false,
        isProtected: true
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        isPrivate: true
    },
    {
        path: '*',
        element: <NotFound />
    },
];

export default routes;