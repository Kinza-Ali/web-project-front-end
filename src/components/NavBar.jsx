import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
const NavBar = () => {
    return (

        <div >
        <div className="row" >
            <ul className = 'main-nav' >
                <li className='main-navli main-navlink '> <Link style = {{color:'white',float:'right'}}className='main-navlink' to="/home" class="active"> Home </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'white',float:'right'}} to="/blogs"> Blogs </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'white',float:'right'}} to="/recipes"> Recipes </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'white',float:'right'}} to="/workouts"> Workouts </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'white',float:'right'}}to="/signUp"> Sign Up </Link> </li>
                <li className='main-navli main-navlink'>  <Link style = {{color:'white',float:'right'}} to="/contactUs"> Contact Us </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'white',float:'right'}}to="/aboutUs"> About Us </Link> </li>
            </ul>
    </div> 
    </div>
    
    );
}

export default NavBar;