import React, { useState } from 'react'
import About from './About';
import Home from './Home';
import Navigation from './Navigation';
import More from './More';
import Gallery from './Gallery';
import Footer from './Footer';
import Profile from './Profile';
function Component() {
    const [openUser, setOpenUser] = useState(false);
    const toggleProfile = () => setOpenUser(!openUser);
return (

    <div>
        <Navigation openUser={openUser} toggleProfile={toggleProfile} />
        {openUser && <Profile style={{
                        position: 'absolute',
                        top: '70px', 
                        right: '20px',
                        zIndex: 1000,
                    }}/>}
        <Home/>
        <About/>
        <More/>
        <Gallery/>
        <Footer/>
    </div>
)
}
export default Component