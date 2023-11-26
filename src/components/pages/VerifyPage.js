// import React, { useState, useRef } from 'react';
// import '../styles/VerifyPage.css';
// import QrScanner from 'react-qr-scanner';
// import { FaUpload, FaBars, FaTimes } from 'react-icons/fa';
// import Customerfeed from './Customerfeed';
// function VerifyPage() {
//   const [Option, setOption] = useState('One');
//   const handleOption = (option) => {
//     setOption(option);
//   };
//   //qr
//   const [result, setResult] = useState('');
//     const scannerRef = useRef(null);
//     const handleScan = (data) => {
//       if (data) {
//         setResult(data);
//       }
//     };
//     const handleError = (err) => {
//       console.error(err);
//     };
    
//   //button1
//   const[vhome,SetVhome] = useState(false);
//   const[verify,SetVerify] = useState(false);

//   const handlevhome = () => {
//     SetVhome(true);
//     SetVerify(false);
//   }
//   const handleverify = () => {
//     SetVhome(false);
//     SetVerify(true);
//   }
// return (
//     <div id='verify'>
//       <div className='vbody'>
//           <div className='leftbar'>
//             <h2>Help</h2>
//         <button className='leftbarbtn' onClick={() => handleOption('One')}>
//           Button 1
//         </button>
//         <button className='leftbarbtn' onClick={() => handleOption('Two')}>
//           Button 2
//         </button>
//         <button className='leftbarbtn' onClick={() => handleOption('Three')}>
//           Button 3
//         </button>
//         <button className='leftbarbtn' onClick={() => handleOption('Four')}>
//           Button 4
//         </button>
//       </div>
//         <div>
          
//             <div>
//               <center>
//               <h1>Verify your Product here...</h1>
//               <br />
//               <h3>To ensure the authenticity of your product, please enter the required details below.</h3>
//               </center>
//               <div className='doubt'><p>If you have any questions or concerns regarding the verification process,please contact our customer support</p></div>
//             </div>
//             <div>
//               <div className='box'>
//                 <div className='box-contents'>
//                   <div className='content' onClick={() => handleOption('One')}>
//                     Check using name
//                   </div>
//                   <div className='content' onClick={() => handleOption('Two')}>
//                       Upload image
//                   </div>
//                   <div className='content' onClick={() => handleOption('Three')}>
//                       Scan using QR
//                   </div>
//                   <div className='content' onClick={() => handleOption('Four')}>
//                       Subscribtion
//                   </div>
//                 </div>
//               </div>
//           </div>
          
//         </div>
//         <div>
//           {Option && (
//             <div className='selected-content'>
//                 {Option === 'One' && 
//                   <div className='con1'>
//                     <center><h4>Enter the name of the Product</h4></center>
//                     <br/>
//                     <form>
//                       <input type='text' /><br/>
//                       <button type='submit'>Submit</button>
//                     </form>
//                   </div>
//                 }
//                 {Option === 'Two' &&
//                   <div className='wrapper'>
//                     <form>
//                     <label htmlFor="fileInput" className="filelabel">
//                       <FaUpload size={30} style={{color:"blue"}} />
//                       <p>Click here to upload</p>
//                     </label>
//                     <input type="file" id="fileInput" className="fileupload visually-hidden"/>
//                     </form>
//                   </div>
//                 }
//                 {Option === 'Three' &&
//                   <div>
//                     <center><h2>Scan QR Code</h2></center>
//                     <QrScanner onScan={handleScan} onError={handleError} ref={scannerRef} />
//                   </div>
//                 }
//                 {Option === 'Four' &&
//                   <div>
//                     <h2>Choose plan to unlock more features</h2><br/>
//                     <div className="subscription-container">
//                       <div className="subscription">
//                         <h2> Plan 1</h2>
//                         <p>Details about the plan.</p><br/>
//                         <button className="payment-button">Subscribe</button>
//                       </div>
//                       <div className="subscription">
//                         <h2> Plan 2</h2>
//                         <p>Details about the plan.</p><br/>
//                         <button className="payment-button">Subscribe</button>
//                       </div>
//                       <div className="subscription">
//                         <h2> Plan 3</h2>
//                         <p>Details about the plan.</p><br/>
//                         <button className="payment-button">Subscribe</button>
//                       </div>
//                     </div>
//                   </div>
//                 }
//               </div>
//           )}
//         </div><br/><br/><br/><br/><br/><br/><br/><br/>
//           <Customerfeed/>
//       </div>
//     </div>
// );
// }
// export default VerifyPage;




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