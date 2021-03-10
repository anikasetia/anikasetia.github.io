import './App.css';
import React, {useState} from "react";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TimeSlider from "./Components/TimeSlider";

function App() {

  const timeNow = new Date();
  const [hour, setHour] = useState(timeNow.getHours());

  return (
    <Router>
      <div className = {`g${hour.toString()} App`}>
            <TimeSlider startTime = {hour} setTime = {setHour} />
          
              <Link to="/">Home</Link>
           
              <Link to="/about">About</Link>
         
              <Link to="/users">Users</Link>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );;
}

// function Home() {
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
