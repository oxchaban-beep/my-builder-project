import './NotificationBanner.css';

const AlertIcon = ({ variant }) => {
  const strokeColor = variant === 'critical' ? '#EF4343' : '#F59F0A';
  
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6819 1.33333 7.99998 1.33333C4.31808 1.33333 1.33331 4.3181 1.33331 8C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 5.33333V7.99999" stroke={strokeColor} strokeWidth={variant === 'critical' ? '1.5' : '1'} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10.6667H8.00667" stroke={strokeColor} strokeWidth={variant === 'critical' ? '1.5' : '1'} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function NotificationBanner({ title, description, variant = 'warning', active = false, onClick }) {
  return (
    <button 
      className={`notification-banner notification-banner-${variant} ${active ? 'notification-banner-active' : ''}`}
      onClick={onClick}
    >
      <AlertIcon variant={variant} />
      <div className="notification-banner-content">
        <div className="notification-banner-title">{title}</div>
        <div className="notification-banner-description">{description}</div>
      </div>
      <ChevronIcon />
    </button>
  );
}
