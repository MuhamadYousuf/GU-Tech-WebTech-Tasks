import React from 'react';
import '../style/ProfileCard.css';

const ProfileCard = ({ name, age, occupation, location, ageLabel, occupationLabel, locationLabel }) => {
  return (
    <div className='maindiv'>
      <div className="profile-card">
        <h2>{name}</h2>
        <div className='contentdiv'>
          <p>{ageLabel}: {age}</p>
          <p>{occupationLabel}: {occupation}</p>
          <p>{locationLabel}: {location}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
