import React from 'react'
import { Link } from 'react-router-dom'
import Highlight from './Highlight'

function Main(){
  var styles1 = {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'inline-block',
    textAlign: 'center',
  }
  var styles2 = {
    width: '200px',
    height: '200px',
    backgroundColor: '#01a1e7',
    display: 'inline-block',
  }
  var styles3 = {
    width: '200px',
    height: '200px',
    backgroundColor: 'red',
    display: 'inline-block',
  }
  return (
    <div className="square-box" style={styles1}>
      <Highlight/>
      <h1 >Popular Events</h1>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
      <h1 >Top Artist</h1>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
      <h1 >Popular This Weekend</h1>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
      <div className="square-box" style={styles2}>
      </div>
      <div className="square-box" style={styles3}>
      </div>
    </div>
  )
}


export default Main
