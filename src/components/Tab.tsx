import React, { useState } from 'react';
import '../assets/css/Tab.css'

interface TabsProps {
    tabs: { label: string, content: React.ReactNode }[];
    defaultActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab = 0 }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <div className="tabs">
            <ul className="tabs-list">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tabs-list-item ${index === activeTab ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tabs-content">
                {tabs[activeTab]?.content}
            </div>
        </div>
    );
};

export default Tabs;
