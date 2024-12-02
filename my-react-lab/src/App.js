import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  const user = {
    name: 'Yousuf',
    age: 19,
    occupation: 'BSCS-Student',
    location: '' // You can leave this empty or provide a default value if needed
  };

  return (
    <div className="App">
      <ProfileCard 
        name={user.name} 
        age={user.age} 
        occupation={user.occupation} 
        location={user.location}
        ageLabel="Age"
        occupationLabel="Occupation"
        locationLabel={user.location ? "Location" : "Location (Not provided)"}
      />
    </div>
  );
}

export default App;

