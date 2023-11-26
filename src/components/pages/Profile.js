import React from 'react';
import { useLocation } from 'react-router-dom';
const Profile = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};
  return (
    <div className='pro'>
    <img src={userData.userpicture} alt=""  height={30}/>
      <h5>{userData.username}</h5>
    </div>
  );
};
export default Profile;