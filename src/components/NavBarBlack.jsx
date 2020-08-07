import React from 'react';
import { Link } from 'react-router-dom';

const NavBarBlack = () => {
    return (
        
        <div>
        <div className="row" >
            <ul className = 'main-nav' >
                <li className='main-navli main-navlink '> <Link style = {{color:'black',float:'right'}} to="/home" class="active"> Home </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'black',float:'right'}} to="/blogs"> Blogs </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'black',float:'right'}} to="/recipes"> Recipes </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'black',float:'right'}} to="/workouts"> Workouts </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'black',float:'right'}}to="/signUp"> Sign Up </Link> </li>
                <li className='main-navli main-navlink'>  <Link style = {{color:'black',float:'right'}} to="/contactUs"> Contact Us </Link> </li>
                <li className='main-navli main-navlink'> <Link style = {{color:'black',float:'right'}}to="/aboutUs"> About Us </Link> </li>
            </ul>
    </div> 
    </div>

    );
}

export default NavBarBlack;