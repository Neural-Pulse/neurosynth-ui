import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            <ul className="flex border-b">
                {tabs.map((tab) => (
                    <li key={tab.id} className="-mb-px mr-1">
                        <button
                            className={`bg-white inline-block py-2 px-4 text-neuralpulse-dark hover:text-neuralpulse-green font-semibold ${tab.id === activeTab ? 'border-l border-t border-r rounded-t text-neuralpulse-green' : ''
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="pt-4">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${tab.id === activeTab ? 'block' : 'hidden'
                            } p-4`}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;