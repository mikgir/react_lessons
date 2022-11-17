import React from "react";
import {Navigate, Outlet} from "react-router-dom";

export const PublicRoute = ({authed}) => {
    return !authed ? <Outlet/> : <Navigate to='/profile' replace/>
}