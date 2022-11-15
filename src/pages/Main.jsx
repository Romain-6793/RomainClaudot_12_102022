import React from "react";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";






const Layout = (props) => {
  return (
    <>
      <Header data={props.data} /><MainWrapper data={props.data} />
    </>
  );
};

export default Layout;