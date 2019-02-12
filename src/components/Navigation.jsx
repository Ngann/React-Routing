import React from "react";
import PropTypes from 'prop-types';

function Navigation(props) {
  const navigationComponentStyles = {
    margin: '5px',
    padding: '0',
    overflow: 'hidden',
    backgroundcolor: 'blue',
    liststyletype: 'none',
  }

  const ulStyles = {
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundcolor: 'blue',
    textDecoration: 'none',
  }

  const liStyles = {
    padding: '3px',
   backgroundcolor: 'blue',
   display: 'inline-block',
   padding: '10px',
   float: 'left',
   border: '1px solid grey',
   color: 'grey',
  }


  const tweetStyles = {
   backgroundcolor: 'blue',
   display: 'inline-block',
   padding: '10px',
   // float: 'right',
   color: 'grey',
   border: '1px solid #00aced',
   borderRadius: '25px',
  }

  const searchStyles = {
    backgroundcolor: 'blue',
    display: 'inline-block',
    padding: '10px',
    color: 'grey',
    border: '1px solid #00aced',
    borderRadius: '25px',
    paddingRight: '10px',
    // float: 'right',
  }
  return (
    <div style={navigationComponentStyles}>
      <ul style={ulStyles}>
        <li style={liStyles} >Home</li>
        <li style={liStyles} >Notifications</li>
        <li style={liStyles} >Messages</li>
        <li style={searchStyles} >Search</li>
        <li style={tweetStyles} >Tweet</li>
      </ul>
    </div>
  );
}


export default Navigation;
