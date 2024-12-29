import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserProfile.css';

function UserProfile() {
  const { username } = useParams(); // Fetch the username from the URL

  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default UserProfile;
