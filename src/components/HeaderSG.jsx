import React from 'react'
import { Link } from 'react-router-dom'

function HeaderSG(){
  var styles1 = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1673e6',
    display: 'inline-block',
    textAlign: 'center',
    display: 'block',
    color: 'white',
  }
  var styles2 = {
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
  }
  var styles3 = {
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
  }
  return (
    <div className="square-box" style={styles1}>
      <div className="square-box" style={styles2}>
        <h2 >SeatGeek Logo</h2>
      </div>
      <div className="square-box" style={styles2}>
        <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/sport">Sport</Link> | <Link to="/search">Music</Link> | <Link to="/movies">Movie</Link> | <Link to="/more">More</Link> | <Link to="/sell">Sell</Link>
      </div>
      <div className="square-box" style={styles3}>
        <Link to="/newticket">TrackOrder</Link> | <Link to="/signup">SignUp</Link> | <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default HeaderSG
