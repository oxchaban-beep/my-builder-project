import './Tabs.css';
import Badge from './Badge';

export default function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span>{tab.label}</span>
          {tab.count > 0 && <Badge variant="count">{tab.count}</Badge>}
        </button>
      ))}
    </div>
  );
}
