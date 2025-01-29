import React, { useState } from 'react';
import './Tabs.css';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Headphone');

  return (
    <div className="tabs">
      <button className={activeTab === 'Headphone' ? 'active' : ''} onClick={() => setActiveTab('Headphone')}>Headphone</button>
      <button className={activeTab === 'Headset' ? 'active' : ''} onClick={() => setActiveTab('Headset')}>Headset</button>
    </div>
  );
}

export default Tabs;
