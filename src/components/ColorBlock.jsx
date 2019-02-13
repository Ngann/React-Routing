import React from 'react'
function ColorBlock() {
  var styles1 = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: '#1673e6',
    display: 'inline-block',
  }
  var styles2 = {
    margin: '20px',
    width: '200px',
    height: '200px',
    backgroundColor: '#01a1e7',
    display: 'inline-block',
  }
  return (
    <div>
      <div className="square-box" style={styles1}>
      </div>
      <div className="square-box" style={styles2}>
      </div>
    </div>
  )
}
export default ColorBlock
