import React from 'react'
import HeaderSG from './HeaderSG'
import Search from './Search'
import Sport from './Sport'
import LocationDate from './Location'
import Highlight from './Highlight'
import TicketList from './TicketList'
import { Switch, Route } from 'react-router-dom'
import NewTicketForm from './NewTicketForm'
import Main from './Main'


function App(){
  var container = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1673e6',
    display: 'inline-block',
    textAlign: 'center',
    display: 'block',
    fontFamily: 'Arial,Helvetica,sans-serif',
  }
  var main = {
    width: '100%',
    height: '100%',
    backgroundColor: '#1673e6',
    display: 'inline-block',
    textAlign: 'center',
    display: 'block',
  }
  return (
    <div className="header-box" style={container}>
      <div className="main-box" style={main}>
        <HeaderSG/>
        <Search/>
      </div>
      <div className="main-box" style={main}>
        <LocationDate/>
      </div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route path='/sport' component={Sport} />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  )
}

export default App
