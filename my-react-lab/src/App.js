import React from 'react';
import UserInfo from './components/UserInfo';
import Statistics from './components/Statistics';
import Messages from './components/Messages';
import './App.css';
import myself from './assets/meeee.jpg';

function App() {
  const userData = {
    name: "Muhammad Yousuf",
    email: "Muhammadyousuf7798bp@gmail.com",
    role: "Admin",
    profilePicture: myself
  };

  const statisticsData = {
    totalUsers: 1299,
    activeUsers: 905,
    newSignups: 43,
    activePercentage: (800 / 1000) * 100
  };

  const messagesData = [
    { id: 1, text: "System performance is running at optimal levels." },
    { id: 2, text: "You have 3 new updates available for your profile." },
    { id: 3, text: "Your last activity was 5 days ago. Check your notifications for new messages!" }
  ];

  return (
    <div className="App">
      <div className="grid-container">
        <UserInfo user={userData} />
        <Statistics stats={statisticsData} />
        <Messages messages={messagesData} />
      </div>
    </div>
  );
}

export default App;
