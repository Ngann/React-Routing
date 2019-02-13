import React from 'react'
import { Link } from 'react-router-dom'

function Sport(){
  return (
    <div>
      <h1>Sport</h1>
      <p> Sports list</p>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  )
}

export default Sport
