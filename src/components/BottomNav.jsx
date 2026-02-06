import './BottomNav.css';

const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 10.0005C2.99993 9.70952 3.06333 9.42208 3.18579 9.15817C3.30824 8.89427 3.4868 8.66025 3.709 8.47246L10.709 2.47346C11.07 2.16836 11.5274 2.00098 12 2.00098C12.4726 2.00098 12.93 2.16836 13.291 2.47346L20.291 8.47246C20.5132 8.66025 20.6918 8.89427 20.8142 9.15817C20.9367 9.42208 21.0001 9.70952 21 10.0005V19.0005C21 19.5309 20.7893 20.0396 20.4142 20.4147C20.0391 20.7897 19.5304 21.0005 19 21.0005H5C4.46957 21.0005 3.96086 20.7897 3.58579 20.4147C3.21071 20.0396 3 19.5309 3 19.0005V10.0005Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BoxIcon = ({ active }) => {
  const strokeColor = active ? '#4A90E2' : '#65758B';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11 21.7301C11.304 21.9057 11.6489 21.9981 12 21.9981C12.3511 21.9981 12.696 21.9057 13 21.7301L20 17.7301C20.3037 17.5548 20.556 17.3026 20.7315 16.999C20.9071 16.6953 20.9996 16.3509 21 16.0001V8.00015C20.9996 7.64942 20.9071 7.30496 20.7315 7.00131C20.556 6.69766 20.3037 6.44551 20 6.27015L13 2.27015C12.696 2.09461 12.3511 2.0022 12 2.0022C11.6489 2.0022 11.304 2.09461 11 2.27015L4 6.27015C3.69626 6.44551 3.44398 6.69766 3.26846 7.00131C3.09294 7.30496 3.00036 7.64942 3 8.00015V16.0001C3.00036 16.3509 3.09294 16.6953 3.26846 16.999C3.44398 17.3026 3.69626 17.5548 4 17.7301L11 21.7301Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.28906 6.99976L11.9991 11.9998L20.7091 6.99976" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 4.27026L16.5 9.42026" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const CashIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 5.00098V19.001C3 19.5314 3.21071 20.0401 3.58579 20.4152C3.96086 20.7903 4.46957 21.001 5 21.001H20C20.2652 21.001 20.5196 20.8956 20.7071 20.7081C20.8946 20.5205 21 20.2662 21 20.001V16.001" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18.9995 21V19C18.9995 17.9391 18.5781 16.9217 17.8279 16.1716C17.0778 15.4214 16.0604 15 14.9995 15H8.99951C7.93865 15 6.92123 15.4214 6.17108 16.1716C5.42094 16.9217 4.99951 17.9391 4.99951 19V21" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.9995 11C14.2087 11 15.9995 9.20914 15.9995 7C15.9995 4.79086 14.2087 3 11.9995 3C9.79037 3 7.99951 4.79086 7.99951 7C7.99951 9.20914 9.79037 11 11.9995 11Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BottomNav({ activeTab = 'deliveries' }) {
  const tabs = [
    { id: 'home', label: 'Главная', Icon: HomeIcon },
    { id: 'deliveries', label: 'Поставки', Icon: BoxIcon },
    { id: 'finance', label: 'Финансы', Icon: CashIcon },
    { id: 'profile', label: 'Профиль', Icon: UserIcon }
  ];

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-content">
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`bottom-nav-tab ${activeTab === id ? 'bottom-nav-tab-active' : ''}`}
          >
            {activeTab === id && <div className="bottom-nav-selection" />}
            <Icon active={activeTab === id} />
            <span className={activeTab === id ? 'bottom-nav-label-active' : ''}>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
