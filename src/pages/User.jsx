import React from "react";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import PropTypes from 'prop-types'


/**
 * Only page of the app for the moment
 * 
 * @param {data} object in which we recover the users firstnames to create a dropdown (data.js)
 * @returns 
 */

const User = ({data}) => {
  return (
    <>
      <Header data={data} /><MainWrapper />
    </>
  );
};

User.propTypes = {
  data: PropTypes.object
}

export default User;