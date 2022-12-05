import React from "react";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import PropTypes from 'prop-types'


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