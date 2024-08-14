import React from 'react';
import '../styles/Form.css'
import { useHistory } from 'react-router-dom';
function Form() {
    const history = useHistory();
    const handleSubmit = () => {
        // history.push("VerifyPage")
        window.open('/VerifyPage', '_blank');
        history.push('/Component');
      };
  return (
    <div>
        <br/><center><h2>Write Your Query here</h2></center>
        <div className='userform'>
          <form>
          <input type="text" className='inputpost' placeholder='Name'  /><br />
          <input type="text" className='inputpost' placeholder='Phone' /><br />
          <input type="text" className='inputpost' placeholder='Email'  /><br />
          <textarea className='inputpost' placeholder='Your Complaints here...'  /><br />
          </form>
          <br />
          <button className='submitform' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
export default Form