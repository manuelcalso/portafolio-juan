import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div>
      <div className="flex justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => handleTabClick(tab.title)}
            className={`px-4 py-2 -mb-px border-b-2 text-2xl ${activeTab === tab.title
                ? 'border-blue-400 text-blue-500'
                : 'border-transparent text-gray-400'
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) => (
          <div
            key={tab.title}
            className={`${activeTab === tab.title ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
