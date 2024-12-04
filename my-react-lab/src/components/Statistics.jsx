import React from 'react';
import '../style/Statistics.css';

function Statistics({ stats }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = stats;

  return (
    <div className="statistics">
      <h3>System Statistics</h3>
      <div className="stat-item">
        <p>Total Users: {totalUsers}</p>
      </div>
      <div className="stat-item">
        <p>Active Users: {activeUsers}</p>
      </div>
      <div className="stat-item">
        <p>New Signups: {newSignups}</p>
      </div>

      <div className="stat-item">
        <p>Active Users Percentage: {Math.round(activePercentage)}%</p>
      </div>

      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${activePercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Statistics;
