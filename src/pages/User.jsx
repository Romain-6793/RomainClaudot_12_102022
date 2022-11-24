import React from "react";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";


const User = (props) => {
  return (
    <>
      <Header data={props.data} /><MainWrapper />
    </>
  );
};

export default User;