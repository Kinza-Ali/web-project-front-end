import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
// import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Blogs from './components/Blogs';
import Recipes from './components/Recipes';
import Workouts from './components/Workouts'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    <Router>
      <div>
      
        
          <Switch>
            
            <Route path="/blogs" component={Blogs } />
            <Route path="/recipes" component={Recipes } />
            <Route path="/workouts" component={Workouts } />
            <Route path="/signUp" component={SignUp} />
            <Route path="/contactUs" component={ContactUs } />
            <Route path="/aboutUs" component={AboutUs } />
            <Route path="/notFound" component={NotFound } />
            <Route path="/home"  component={LandingPage } />
            <Redirect to = "/notfound"/>

          </Switch>

        </div> 
    </Router>
    
  );
}

export default App;
