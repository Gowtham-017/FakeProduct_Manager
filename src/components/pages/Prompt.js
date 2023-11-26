import React from 'react';
import Modal from 'react-modal';
import '../styles/Prompt.css';
const CustomPrompt = ({ isOpen, onClose, onLogin, onSignup }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Custom Prompt"
      className="custom-prompt-modal"
      overlayClassName="custom-prompt-overlay"
    >
      <div className="custom-prompt">
        <div className='close'>
        </div>
        <br/>
        <button onClick={onSignup}>Create New Account</button>
        <br/><br/>
        <h5>Already a member?</h5>
        <button onClick={onLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};
export default CustomPrompt;
