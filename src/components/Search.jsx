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
    width: '80%',
    height: '60px',
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'white',
    borderRadius: '12px',
    margin: '0',
    padding: '0',
    border: '0',
    fontSize: '100%',
    font: 'inherit',
  }
  var styles3 = {
    padding: '10px',
    width: '100%',
    height: '60px',
  }
  var titleStyles = {
    font: '50px proxima-nova,Proxima Nova,Helvetica Neue,Arial,Helvetica',
    fontWeight:'400',
    fontSize: '50px',
    lineHeight: '110%',
  }
  var inputWrapper = {
    font: '300 1.25em proxima-nova,Proxima Nova,Arial,Helvetica,sans-serif',
    lineHeight: '1.25em',
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: '9px 10px',
    width: '90%',
    whiteSpace: 'nowrap',
    display: 'inline-block',
  }
  var searchButton = {
    flex: '0 0 105px',
    width: '105px',
    border: '1px solid #1673e6',
    background: '#0670e9',
    borderRadius: '6px',
    height: '38px',
    color: 'white',
    cursor: 'pointer',
    lineHeight: '37px',
    fontSize: '18px',
  }

  return (
    <div className="square-box" style={styles1}>
      <h1 className="title-box" style={titleStyles}>Millions of tickets in one place.</h1>
      <form className="search-box" style={styles2}>
        <div className="bg-search" style={styles3}>
          <i className="sg-icon" data-svg="magnifying-glass"><svg x="0px" y="0px" width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 16 16"><path fill="#1673E6" d="M15.7,14.3l-4-4C12.5,9.3,13,7.9,13,6.5C13,2.9,10.1,0,6.5,0S0,2.9,0,6.5S2.9,13,6.5,13c1.4,0,2.8-0.5,3.8-1.3l4,4 c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C16.1,15.3,16.1,14.7,15.7,14.3z M6.5,11C4,11,2,9,2,6.5S4,2,6.5,2S11,4,11,6.5 S9,11,6.5,11z"></path></svg></i>
          <input style={inputWrapper} placeholder="Search by team, artist, event, or venue"
          ref={input => this.search = input}
          />
          <input type="submit" class="search-submit-large" style={searchButton} value="Search"/>
        </div>
      </form>
    </div>
  )
}

export default Search
