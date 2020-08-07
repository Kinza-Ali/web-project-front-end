//Home
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
const LandingPage = () => {
    return (
        
        <header className='header'>

        <div className="row" >
    <ul className = 'main-nav' >
            <li className='main-navli main-navlink '> <Link style = {{color:'white'}} to="/home" class="active"> Home </Link> </li>
            <li className='main-navli main-navlink'> <Link style = {{color:'white'}} to="/blogs"> Blogs </Link> </li>
            <li className='main-navli main-navlink'> <Link style = {{color:'white'}} to="/recipes"> Recipes </Link> </li>
            <li className='main-navli main-navlink'> <Link style = {{color:'white'}} to="/workouts"> Workouts </Link> </li>
            <li className='main-navli main-navlink'> <Link style = {{color:'white'}}to="/signUp"> Sign Up </Link> </li>
            <li className='main-navli main-navlink'>  <Link style = {{color:'white'}} to="/contactUs"> Contact Us </Link> </li>
            <li className='main-navli main-navlink'> <Link style = {{color:'white'}}to="/aboutUs"> About Us </Link> </li>
            </ul>
    </div> 
    <div class = "hero">
    <h1> Health and Nutrition  </h1>
            <div class="main-btn">
            <Link to="/signUp" class="btn btn-half"> Ready to Sign Up</Link>
            <Link to="/blogs" class="btn btn-full"> Success Review</Link>
            </div>
    </div> 
    </header>);
}
export default LandingPage;