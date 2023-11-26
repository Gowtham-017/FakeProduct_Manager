import React, { useState } from 'react';
import '../styles/Home.css';
import img2 from '../assets/img2.png';
import Prompt from './Prompt';
import { useHistory } from 'react-router-dom';
function Home() {
  const [showPrompt, setShowPrompt] = useState(false);
  const history = useHistory();
  const handleGetStarted = () => {
    setShowPrompt(true);
  };
  const handleGetCatalogue = () => {
    window.open('/Catalogue', '_blank');
  };
  const handleClosePrompt = () => {
    setShowPrompt(false);
  };
  const handleLogin = () => {
    history.push("Login")
    setShowPrompt(false);
  };
  const handleSignUp = () => {
    history.push("Signup")
    console.log('Sign Up');
    setShowPrompt(false);
  };
  return (
    <div id='home'>
      <div className='hbody'>
        <div className='home-content'>
          <h2>Scalable AI-powered solutions for product verification—anytime, anywhere</h2>
          <p>Secure inventory, protect supply chains and add trust to transactions at retail</p>
          <br />
          <div className='buttons'>
          <button className='getstarted' onClick={handleGetCatalogue}>
            Go to Catalogue
          </button>
          <button className='getstarted' onClick={handleGetStarted}>
            Get Started
          </button>
          </div>
          <Prompt
            isOpen={showPrompt}
            onClose={handleClosePrompt}
            onLogin={handleLogin}
            onSignup={handleSignUp}
            />
        </div>
        <div className='himg'>
          <img src={img2} alt='home' />
        </div>
      </div>
    </div>
  );
}
export default Home;

