import React from "react";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";



/**
 * Only page of the app for the moment
 * 
 *
 * @returns the header and the mainwrapper (rest of the page)
 */

const User = () => {
  return (
    <>
      <Header /><MainWrapper />
    </>
  );
};

export default User;