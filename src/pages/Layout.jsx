import React from "react";
import {Outlet} from "react-router-dom";


/** Outlet included in Layout allows to navigate between endpoints */

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;