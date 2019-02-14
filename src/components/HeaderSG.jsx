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
    paddingLeft: '30px',
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
    textColor: 'white',
  }
  var styles3 = {
    paddingLeft: '80px',
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
  }
  var linkStyles = {
    textDecoration: 'none',
    color: 'white',
    paddingLeft: '10px',
    fontWeight: '100',
  }
  return (
    <div className="square-box" style={styles1}>
      <div className="square-box" style={styles2}>
        <h2 >SeatGeek Logo</h2>
      </div>
      <div className="square-box" style={styles2}>
        <Link className="link-box" style={linkStyles} to="/">Home</Link> <Link className="link-box" style={linkStyles} to="/newticket">Create Ticket</Link> <Link className="link-box" style={linkStyles} to="/sport">Sport</Link> <Link className="link-box" style={linkStyles} to="/search">Music</Link> <Link className="link-box" style={linkStyles} to="/movies">Movie</Link> <Link className="link-box" style={linkStyles} to="/more">More</Link> <Link className="link-box" style={linkStyles} to="/sell">Sell</Link>
      </div>
      <div className="square-box" style={styles3}>
        <Link className="link-box" style={linkStyles} to="/newticket">TrackOrder</Link> <Link className="link-box" style={linkStyles} to="/signup">SignUp</Link> <Link className="link-box" style={linkStyles} to="/login">Log In</Link>
      </div>
    </div>
  )
}

export default HeaderSG
