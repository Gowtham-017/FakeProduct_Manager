import React from 'react';
import '../styles/Profile.css'
import { useLocation,Link } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};
  return (
    <div className='profilebox'>
      <div className='pro'>
        <h5><center><img src={userData.userpicture} alt=""  height={30}/></center> {userData.username}</h5>
        <br/>
        <ul>
          <li>Profile</li>
          <Link to="Login"><li>Logout</li></Link>
        </ul>
      </div>
    </div>
  );
};
export default Profile;