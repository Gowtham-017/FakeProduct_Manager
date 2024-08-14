import React from 'react'
import { FaInstagram,FaTwitter,FaYoutube,FaLinkedin, FaHeart} from 'react-icons/fa';
import '../styles/Footer.css'
function Footer() {
return (
    <div>
        <div className="contact">
            <div class="row">
                <div class="left">
                    <h2 class="aboutme">Contact</h2>
                    <div class="icons">
                        <a href="www.instagram.com"><FaInstagram /></a>
                        <a href="www.youtube.com"><FaYoutube /></a>
                        <a href="www.twitter.com"><FaTwitter /></a>
                        <a href="www.linkedin.com"><FaLinkedin /></a>
                    </div>
                </div>
                <div class="right">
                    <h2>Your Queries</h2>
                    <form className='queryform'>
                        <input type="text" placeholder="Name" /><br/>
                        <input type="email" placeholder="Email" />
                        <textarea rows="6">Your Message here</textarea>
                        <button class="btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyrights@2023</p>
            <p>Designed with <FaHeart/></p>
        </div>
    </div>
)
}
export default Footer