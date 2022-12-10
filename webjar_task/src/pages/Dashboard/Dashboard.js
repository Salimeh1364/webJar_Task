// Navbar,Menu,Layout
import React from "react"

// >>>>>>>>>>> ReactDom Routes <<<<<<<<<<<<<<

import { Route, Routes, Outlet } from "react-router-dom"
import BasicTabs from "./Navigation"

// >>>>>>>>>>> Home Routes <<<<<<<<<<<<<<<<<<<
import Home from "../Home/Home"



const Dashboard = () => {
    return (
        <div>
            <div></div>
            <Routes>

                {/* >>>>>>>>>>>>>>>>>> HomeRoutes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */}

                <Route element={<><BasicTabs /> <Outlet /></>}>
                    <Route index element={<Home/>} />
                </Route>

            </Routes>
        </div>
    );
};

export default Dashboard;