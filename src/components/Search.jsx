import React from 'react'
// import { Link } from 'react-router-dom'

function Search(){
  var styles1 = {
    margin: '20px',
    width: '100%',
    height: '100%',
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
  }
  var styles2 = {
    margin: '20px',
    width: '60%',
    height: '60px',
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'white',
    borderRadius: '5px',
  }
  return (
    <div className="square-box" style={styles1}>
      <h1 >Millions of tickets in one place</h1>
      <form className="search-box" style={styles2}>
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
        />
      <button >Search</button>
      </form>
    </div>
  )
}

export default Search
