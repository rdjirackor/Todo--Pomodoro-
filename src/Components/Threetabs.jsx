import React, { useState } from 'react';
import '../Styles/Tabs.css';


const Threetabs = () => {
  const [activeTab, setActiveTab] = useState('pomodoro'); 

  return (
    <div className="three-tabs">
      <div
        className={`tab ${activeTab === 'pomodoro' ? 'active' : ''}`}
        onClick={() => setActiveTab('pomodoro')}
      >
        Pomodoro <span className="count">0</span>
      </div>
      <div
        className={`tab ${activeTab === 'rest' ? 'active' : ''}`}
        onClick={() => setActiveTab('rest')}
      >
        Rest <span className="count">0</span>
      </div>
      <div
        className={`tab ${activeTab === 'longrest' ? 'active' : ''}`}
        onClick={() => setActiveTab('longrest')}
      >
        Long Rest <span className="count">0</span>
      </div>
    </div>
  );
};

export default Threetabs;
