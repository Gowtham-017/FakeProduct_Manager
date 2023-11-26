import React, { useState, useRef } from 'react';
import '../styles/ProductVerify.css';
import QrScanner from 'react-qr-scanner';
import { FaUpload} from 'react-icons/fa';
function ProductVerify() {
    const [Option, setOption] = useState('One');
    const handleOption = (option) => {
    setOption(option);
    };
    //qr
    const [result, setResult] = useState('');
        const scannerRef = useRef(null);
        const handleScan = (data) => {
        if (data) {
            setResult(data);
        }
        };
        const handleError = (err) => {
        console.error(err);
        };
return (
    <div className='pbody'>
            <div>
                <center>
                <h1>Verify your Product here...</h1>
                <br />
                <h3>To ensure the authenticity of your product, please enter the required details below.</h3>
                </center>
                <div className='doubt'><p>If you have any questions or concerns regarding the verification process,please contact our customer support</p></div>
            </div>
            <div>
                <div className='box'>
                    <div className='box-contents'>
                        <div className='content' onClick={() => handleOption('One')}>
                            Check using name
                        </div>
                        <div className='content' onClick={() => handleOption('Two')}>
                            Upload image
                        </div>
                        <div className='content' onClick={() => handleOption('Three')}>
                            Scan using QR
                        </div>
                        <div className='content' onClick={() => handleOption('Four')}>
                            Subscribtion
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {Option && (
                    <div className='selected-content'>
                        {Option === 'One' && 
                        <div className='con1'>
                            <center><h4>Enter the name of the Product</h4></center>
                            <br/>
                            <form>
                            <input type='text' /><br/>
                            <button type='submit'>Submit</button>
                            </form>
                        </div>
                        }
                        {Option === 'Two' &&
                        <div className='wrapper'>
                            <form>
                            <label htmlFor="fileInput" className="filelabel">
                            <FaUpload size={30} style={{color:"blue"}} />
                            <p>Click here to upload</p>
                            </label>
                            <input type="file" id="fileInput" className="fileupload visually-hidden"/>
                            </form>
                        </div>
                        }
                        {Option === 'Three' &&
                        <div>
                            <center><h2>Scan QR Code</h2></center>
                            <QrScanner onScan={handleScan} onError={handleError} ref={scannerRef} className="QrScanner" />
                        </div>
                        }
                        {Option === 'Four' &&
                        <div>
                            <h2>Choose plan to unlock more features</h2><br/>
                            <div className="subscription-container">
                            <div className="subscription">
                                <h2> Plan 1</h2>
                                <p>Details about the plan.</p><br/>
                                <button className="payment-button">Subscribe</button>
                            </div>
                            <div className="subscription">
                                <h2> Plan 2</h2>
                                <p>Details about the plan.</p><br/>
                                <button className="payment-button">Subscribe</button>
                            </div>
                            <div className="subscription">
                                <h2> Plan 3</h2>
                                <p>Details about the plan.</p><br/>
                                <button className="payment-button">Subscribe</button>
                            </div>
                            </div>
                        </div>
                        }
                    </div>
                )}
            </div>
        </div>
)
}

export default ProductVerify