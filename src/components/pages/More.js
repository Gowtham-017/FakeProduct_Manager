import React from 'react';
import '../styles/More.css'
import Slider from './Slider';
const AboutComponent = () => {
const opentab = (event, tabname) => {
    const tabs = document.getElementsByClassName("title1");
    const tabcontents = document.getElementsByClassName("tab-content");
    for (const tab of tabs) {
    tab.classList.remove("activetitle");
    }
    for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("activecontent");
    }
    event.currentTarget.classList.add("activetitle");
    document.getElementById(tabname).classList.add("activecontent");
};
return (
    <div id='more'>
        <div className="babout">
            <center>
                <div className='about'>
                    <h2 className="abouth2">About</h2>
                    <br/><br/>
                    <p className="aboutp">
                    <h3>Trustify builds scalable solutions for verifying products using artificial intelligence, enabling businesses to secure inventory and protect supply chains while adding trust to transactions at retail and resale.</h3><br/>
                    Founded and based in India, Trustify develops patented, proprietary solutions that address the needs of businesses, governments and other organizations for whom maintaining trust is mission-critical.
                    </p>
                </div>
            </center>
            <center>
            <div className="titles">
                <p className="title1 activetitle" onClick={(e) => opentab(e, 'remarks')}>
                Remarks
                </p>
                <p className="title1" onClick={(e) => opentab(e, 'timeline')}>
                Timeline
                </p>
                <p className="title1" onClick={(e) => opentab(e, 'awards')}>
                Awards
                </p>
            </div>
            <div className="tab-content activecontent" id="remarks">
                <ul>
                <li>
                    
                    <br />
                    Trustify is an invaluable tool for my business that removes the doubts from the minds of the people<br/>
                    <span>--- Sasuke Uchiha</span>
                </li>
                <li>
                    <br />
                    Trustify gives us a piece of mind to the customers. Selling authentic products are the real success of any company<br/>
                    <span>--- Sakura</span>
                </li>
                </ul>
            </div>
            <div className="tab-content" id="timeline">
                <ul>
                <li>
                    <span>2023-2024</span>
                    <br />
                    Founded
                </li>
                <li>
                    <span>2024-2025</span>
                    <br />
                    StartUp
                </li>
                <li>
                    <span>2025-Present</span>
                    <br />
                    Trustify Solutions Lmtd
                </li>
                </ul>
            </div>
            <div className="tab-content" id="awards">
                <ul>
                <li>
                    <span>XYZ</span>
                    <br />
                    Best Design of the Year
                </li>
                <li>
                    <span>ABC</span>
                    <br />
                    Most used app
                </li>
                </ul>
            </div>
            </center>
            <center><Slider /></center>
        </div>
    </div>
);
};
export default AboutComponent;
