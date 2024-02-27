import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayouts = () => {
    return <div>
        <Outlet />
    </div>;
};

export default GuestLayouts;
