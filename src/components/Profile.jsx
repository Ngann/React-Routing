import React from "react";
import PropTypes from 'prop-types';

function Profile(props){
  const profileComponentStyles = {
    // border: '1px solid grey',
  }

  const lineStyles = {
    borderTop: '1px solid grey',
  }
  return (
    <div style={profileComponentStyles}>
      <div style={lineStyles}></div>
      <h1>Profile</h1>
    </div>
  );
}

export default Profile;
