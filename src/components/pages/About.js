import React from 'react'
import '../styles/About.css'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
function About() {
  return (
    <div id="about">
    <div className='abody'>
        <center><h1>Trustify Solutions</h1></center>
        <div className='cont'>
          <div className='one'>
            <h2>Highly Accurate, Financially Guaranteed
              <br/><br/>
            <p>Near-100% accuracy rate with added protection against potential financial losses <br/>
              Infinitely more secure and scalable than manual solutions</p></h2>
            <img src={image1}  alt='test' />
          </div>
            <button className='lm1'>Learn More</button>
        </div>
        <div className='cont'>
          <div className='two'>
            <img src={image2}  alt='test' />
            <h2>Easy to Implement, Easy to Use
              <br/><br/>
            <p>User-friendly application can be used with little training<br/>
              Vision-based approach requires no product modifications </p></h2>
          </div>
            <button className='lm2'>Learn More</button>
        </div>
        </div>
    </div>
  )
}
export default About