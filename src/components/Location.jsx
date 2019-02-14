import React from 'react'
// import { Link } from 'react-router-dom'

function LocationDate(){
  var styles1 = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'inline-block',
    textAlign: 'center',
    borderBottom: '1px solid lightgrey',
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
        <p >Portland</p>
      </div>
      <div className="square-box" style={styles3}>
        <p >AnyDate</p>
      </div>
    </div>
  )
}

export default LocationDate
