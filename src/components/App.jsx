import React from "react";
// import MyStyledComponent from "./components/MyStyledComponent";
import Navigation from "./Navigation";
import Profile from "./Profile";
import HomeScreen from "./Homescreen";


function App(){
  return (
    <div>
      <h1>Social Media App</h1>
      <Navigation/>
      <Profile/>
    </div>
  );
}

export default App;
