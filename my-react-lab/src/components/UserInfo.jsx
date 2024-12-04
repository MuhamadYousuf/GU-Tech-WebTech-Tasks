import React from 'react';
import '../style/UserInfo.css';

function UserInfo({ user }) {
  const { name, email, role, profilePicture } = user;

  return (
    <div className="user-info">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
      <div className="user-details">
        <h2>{name}</h2>
        <p>{email}</p>
        <span className={`role ${role.toLowerCase()}`}>{role}</span>
      </div>
    </div>
  );
}

export default UserInfo;
