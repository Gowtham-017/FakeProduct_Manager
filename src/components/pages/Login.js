import React,{useState,useEffect} from 'react';
import '../styles/Login.css';
import { useHistory } from "react-router-dom"
import  jwtDecode  from 'jwt-decode';

import axios from 'axios';
const Login = () => {
  const history = useHistory();
    //oauth
    const[user,setUser]=useState({});
    function handleCallbackResponse(response){
    console.log("JWT ID token: "+response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    const userData = {
      username: userObject.name,
      useremail: userObject.email,
      userpicture:userObject.picture,
    };
    document.getElementById('signInDiv').hidden = true;
    history.push({
      pathname: '/Form',
      state: { userData } 
    });
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"912529291014-1tduuoi6s7n4klocf280h2j844qs15lv.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
      );
    google.accounts.id.prompt();
  });
  const handleDatabase = async (userData) => {
    alert("Successfully Logged In");
    try {
      await postapi(userData);
    }catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const postapi = async (userData) => {
    try {
      await axios.post('http://localhost:8082/api/v1/auth/send', userData);
      alert("Successfully Added the Data");
    }catch (error) {
        console.log(error.response.data);
        alert("Error occurred while adding data");
    }
  };
return (
    <div className="login-page">
        <div className="login1-page">
            <div className="login-container">
            <form>
            <center>
            <h2>Sign In</h2><br/>
                <input type="email" placeholder="Email" className='inp' required/><br/><br/>
                <input type="password" placeholder="Password" className='inp' required/>
                <br /><br />
                <button type="button"   className='signinbutton'>Log In</button><br/>
                <center><h4>____________ Or ____________</h4></center><br/>
                <center> <div  onClick={handleDatabase} id='signInDiv' ></div> </center>
                </center> 
            </form><br />
            <center>
            <h4 className='newuser'>New User?</h4>
            <button type="button" className='signinbutton'>Create new Account</button></center></div>  
            </div>
            
        <div>  
        </div>
    </div>
);
};
export default Login;
