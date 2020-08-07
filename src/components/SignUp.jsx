import React from 'react';
// import { Input  ,button} from "react";
import NavBar from './NavBar';
const SignUp = () => {
    return ( 
        <header className = 'signUp-header'>
        <div>  
        <NavBar/>
        <div ></div>
        <div className = 'form'>
    <div className="container">
    <h3 className="text-center form-h3 h3">Sign Up </h3>
    <input  type="text " placeholder = "Username" className="form-control form-input "/> <br/>
    <input  type="number " placeholder = "Age" className="form-control form-input"/> <br/>
    <input  type="email " placeholder = "Email" className="form-control form-input"/> <br/>
    <input  type="password " placeholder = "password" className="form-control form-input"/> 
    <button className="btn btn-warning submit-btn" > Submit </button>
</div>
</div>
</div>
</header>
);
}
export default SignUp;