import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation()
  const hideNavBar = location.pathname === '/Animated-Navigatiton'

  return (
    <>
      {!hideNavBar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
