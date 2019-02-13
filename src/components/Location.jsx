import React from 'react'
// import { Link } from 'react-router-dom'

function LocationDate(){
  var styles1 = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'inline-block',
    textAlign: 'center',
  }
  var styles2 = {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#01a1e7',
    display: 'inline-block',
  }
  var styles3 = {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'red',
    display: 'inline-block',
  }
  return (
    <div className="square-box" style={styles1}>
      <div className="square-box" style={styles2}>
        <h1 >Portland</h1>
      </div>
      <div className="square-box" style={styles3}>
        <h1 >AnyDate</h1>
      </div>
    </div>
  )
}

export default LocationDate
