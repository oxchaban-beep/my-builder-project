import Badge from './Badge';
import ProgressTracker from './ProgressTracker';
import NotificationBanner from './NotificationBanner';
import './DeliveryCard.css';

const TimeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.25 3.99999V7.87867C7.25 8.4754 7.48705 9.0477 7.90901 9.46966L9.46967 11.0303L10.5303 9.96966L8.96967 8.409C8.82902 8.26834 8.75 8.07758 8.75 7.87867V3.99999H7.25Z" fill="#65758B"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 12.5296L13.5303 8.52959C13.8232 8.2367 13.8232 7.76183 13.5303 7.46893L9.53033 3.46893L8.46967 4.52959L11.191 7.25097L2.00028 7.24926L2 8.74926L11.1876 8.75097L8.46967 11.4689L9.53033 12.5296Z" fill="#65758B"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 18L15 12L9 6" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SnowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M1.33331 8H14.6666" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 1.33334V14.6667" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3334 10.6667L10.6667 8.00001L13.3334 5.33334" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66669 5.33334L5.33335 8.00001L2.66669 10.6667" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6666 2.66666L7.99998 5.33332L5.33331 2.66666" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33331 13.3333L7.99998 10.6667L10.6666 13.3333" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function DeliveryCard({ 
  orderNumber, 
  statusBadge, 
  route, 
  date, 
  currentStage,
  stages,
  notifications = [],
  showMoreActions = false,
  moreActionsCount = 0,
  hasSnowIcon = false
}) {
  return (
    <div className="delivery-card">
      <div className="delivery-card-header">
        <div className="delivery-card-heading">
          <h3 className="delivery-card-order-number">{orderNumber}</h3>
          {hasSnowIcon && <SnowIcon />}
          {statusBadge && <Badge variant={statusBadge.variant}>{statusBadge.text}</Badge>}
        </div>
        <ChevronIcon />
      </div>

      <div className="delivery-card-route">
        <div className="delivery-card-route-info">
          <TimeIcon />
          <div className="delivery-card-route-text">
            <span>{route.from}</span>
            <ArrowIcon />
            <span>{route.to}</span>
          </div>
        </div>
        <div className="delivery-card-date">{date}</div>
      </div>

      <ProgressTracker stages={stages} currentStage={currentStage} />

      {notifications.length > 0 && (
        <div className="delivery-card-notifications">
          {notifications.map((notification, index) => (
            <NotificationBanner
              key={index}
              title={notification.title}
              description={notification.description}
              variant={notification.variant}
              active={notification.active}
            />
          ))}
          {showMoreActions && (
            <button className="delivery-card-more-actions">
              <div className="more-actions-content">
                <span>Ещё действия</span>
                <ExpandIcon />
              </div>
              {moreActionsCount > 0 && (
                <Badge variant="more">+{moreActionsCount}</Badge>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
