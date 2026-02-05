import './Header.css';

const NotificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.2996 21C10.467 21.3044 10.7131 21.5583 11.0121 21.7352C11.3112 21.912 11.6522 22.0053 11.9996 22.0053C12.347 22.0053 12.6881 21.912 12.9871 21.7352C13.2862 21.5583 13.5322 21.3044 13.6996 21" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.5 11C17.5 14.5899 14.5899 17.5 11 17.5C7.41015 17.5 4.5 14.5899 4.5 11C4.5 7.41015 7.41015 4.5 11 4.5C14.5899 4.5 17.5 7.41015 17.5 11ZM16.1018 17.1624C14.717 18.3101 12.9391 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 12.9391 18.3101 14.717 17.1624 16.1018L20.9991 19.9384L19.9384 20.9991L16.1018 17.1624Z" fill="#65758B"/>
  </svg>
);

export default function Header({ title, notificationCount = 0 }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-actions">
        <button className="header-icon-button">
          <NotificationIcon />
          {notificationCount > 0 && (
            <div className="notification-badge">{notificationCount}</div>
          )}
        </button>
        <button className="header-icon-button">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
