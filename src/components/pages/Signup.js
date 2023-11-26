import React from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
return (
    <div className="login-page">
        <div className="login1-page">
            <div className="login-container">
            <form>
            <center>
            <h2>Sign Up</h2><br/>
                <input type="email" placeholder="Email" className='inp' required/><br/><br/>
                <input type="password" placeholder="Password" className='inp' required/>
                <br /><br />
                <Link to="Login"><button type="button"  className='signinbutton'>Create Account</button></Link><br/>
                </center> 
            </form><br />
            <center>
            <h5 style={{color:"black"}}>Existing User?</h5>
            <Link to="Login"><button type="button" className='signinbutton'>Log In</button></Link></center></div>  
            </div>
            
        <div>  
        </div>
    </div>
);
};
export default Login;
