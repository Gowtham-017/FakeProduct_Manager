import React, { useState } from 'react';
import '../styles/VerifyPage.css';
import Customerfeed from './Customerfeed';
import ProductVerify from './ProductVerify';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function VerifyPage() {
  const [Option, setOption] = useState('One');
  const handleOption = (option) => {
    setOption(option);
  };
  //button1
  const[vhome,SetVhome] = useState(false);
  const[verify,SetVerify] = useState(false);
  const[feed,SetFeed] = useState(false);
  const handlevhome = () => {
    SetVhome(true);
    SetVerify(false);
    SetFeed(false);
  }
  const handleverify = () => {
    SetVerify(true);
    SetVhome(false);
    SetFeed(false);
  }
  const handlefeed = () => {
    SetFeed(true);
    SetVhome(false);
    SetVerify(false);
  }
return (
    <div id='verify'>
      <div className='vbody'>
          <div className='leftbar'>
            <Link to="Component"><FaHome size={30} style={{margin:"10px 0 0 -110px",cursor:"pointer",color:"white"}}/></Link>
            <h2>Help</h2>
            <button className='leftbarbtn' onClick={handlevhome}>
              About
            </button>
            <button className='leftbarbtn' onClick={handleverify}>
              Verify Product
            </button>
            <button className='leftbarbtn' onClick={handlefeed}>
              Customer Feedback
            </button>
            <button className='leftbarbtn' onClick={() => handleOption('Four')}>
              Track Yours
            </button>
          </div>
          {verify &&
          <ProductVerify/>
          }
          {feed &&
            <Customerfeed/>
          }
      </div>
    </div>
);
}
export default VerifyPage;