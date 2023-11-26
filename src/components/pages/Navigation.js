import React,{useState,useEffect,useRef} from 'react'
import '../styles/Navigation.css'
import {FaBars} from 'react-icons/fa';
import { FaUser} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
function Navigation() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const[openuser,setOpenUser]=useState(false);
  const location = useLocation();
  const userData = location.state?.userData || {};
    let menuRef = useRef();
    useEffect(() => {
      const handler = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setOpenUser(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [menuRef.current]);
    const toggleProfile = () => {
      setOpenUser(!openuser);
    };
  return (
    <div className='body0'>
      
        <div id="sidebar" className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <div className="logoname">Trustify Solutions</div>
        <FaUser size={40} style={{color:'red'}} onClick={toggleProfile}/>
        <button className="menu-toggle-button" onClick={toggleSidebar}>
        <FaBars size={40} style={{color:'white'}}/>
        </button>
        {sidebarVisible && (
          <>
          <a href="#home"><div className="item2"><h5>Home</h5></div></a>
          <a href="#about"><div className="item2"><h5>About</h5></div></a>
          <a href="#more"><div className="item2"><h5>More</h5></div></a>
          <a href="#gallery"><div className="item2"><h5>Gallery</h5></div></a>
          </>
        )}
        <div className='pro'>
        {openuser && <Profile userData={userData} />}</div>
      </div>
    </div>
  )
}
export default Navigation


