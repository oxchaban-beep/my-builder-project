import './ScreenMain.css';

function ScreenMain() {
  return (
    <div className="screen-main">
      {/* Header */}
      <div className="screen-main-header">
        <h1 className="screen-main-title">Главная</h1>
        <div className="screen-main-actions">
          <button className="icon-button notification-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.2996 21C10.467 21.3044 10.7131 21.5583 11.0121 21.7352C11.3112 21.912 11.6522 22.0053 11.9996 22.0053C12.347 22.0053 12.6881 21.912 12.9871 21.7352C13.2862 21.5583 13.5322 21.3044 13.6996 21" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="notification-badge">3</span>
          </button>
          <button className="icon-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9004 19.9996C9.80897 20.9787 12.0045 21.2439 14.0913 20.7474C16.1781 20.251 18.019 19.0255 19.2822 17.2918C20.5454 15.5582 21.1478 13.4304 20.981 11.2918C20.8141 9.15326 19.889 7.14462 18.3722 5.62784C16.8554 4.11107 14.8468 3.1859 12.7082 3.01907C10.5697 2.85223 8.44187 3.4547 6.70822 4.7179C4.97456 5.9811 3.74909 7.82196 3.25262 9.90876C2.75615 11.9956 3.02134 14.1911 4.0004 16.0997L2.0004 21.9996L7.9004 19.9996Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.09024 9.00057C9.32534 8.33224 9.78939 7.76868 10.4002 7.4097C11.011 7.05073 11.7291 6.91951 12.4274 7.03928C13.1257 7.15906 13.7591 7.52209 14.2153 8.0641C14.6716 8.6061 14.9213 9.29209 14.9202 10.0006C14.9202 12.0006 11.9202 13.0006 11.9202 13.0006" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17.0004H12.01" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="screen-main-content">
        {/* Greeting */}
        <div className="greeting-section">
          <p className="greeting-label">Добро пожаловать,</p>
          <h2 className="greeting-company">ООО "Торговый Дом Восток"</h2>
        </div>

        {/* Warning Banner */}
        <div className="warning-banner">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 5.33334V8.00001" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 10.6667H8.00667" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="warning-content">
            <h3 className="warning-title">Юридическая активация не завершена</h3>
            <p className="warning-description">Подтверждение поставок заблокировано</p>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6667 4.66667V2.66667C12.6667 2.48986 12.5964 2.32029 12.4714 2.19526C12.3464 2.07024 12.1768 2 12 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333C2 3.68696 2.14048 4.02609 2.39052 4.27614C2.64057 4.52619 2.97971 4.66667 3.33333 4.66667H13.3333C13.5101 4.66667 13.6797 4.7369 13.8047 4.86193C13.9298 4.98695 14 5.15652 14 5.33333V8M14 8H12C11.6464 8 11.3072 8.14048 11.0572 8.39052C10.8071 8.64057 10.6667 8.97971 10.6667 9.33333C10.6667 9.68696 10.8071 10.0261 11.0572 10.2761C11.3072 10.5262 11.6464 10.6667 12 10.6667H14C14.1768 10.6667 14.3464 10.5964 14.4714 10.4714C14.5964 10.3464 14.6667 10.1768 14.6667 10V8.66667C14.6667 8.48986 14.5964 8.32029 14.4714 8.19526C14.3464 8.07024 14.1768 8 14 8Z" stroke="#132439" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 3.33334V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H13.3333C13.5101 14 13.6797 13.9298 13.8047 13.8047C13.9298 13.6797 14 13.5102 14 13.3333V10.6667" stroke="#132439" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="balance-header-title">Балансы</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="balance-amounts">
            <div className="balance-item balance-primary">
              <span className="balance-label">Логистика (₽)</span>
              <span className="balance-amount">900 000 ₽</span>
            </div>
            <div className="balance-item">
              <span className="balance-label">Агентский (¥)</span>
              <span className="balance-amount balance-secondary">70 000 ¥</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs-section">
          <button className="tab-button tab-active">
            Активные
            <span className="tab-count">5</span>
          </button>
          <button className="tab-button">
            Требую действия
            <span className="tab-count">4</span>
          </button>
        </div>

        {/* Actions Section */}
        <div className="actions-section">
          <div className="section-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.31811 1.33333 8.00001C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 5.33334V8.00001" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 10.6667H8.00667" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="section-title">Требуют действия</h3>
          </div>

          {/* Delivery Card 1 */}
          <div className="delivery-card">
            <div className="delivery-header">
              <div className="delivery-id-row">
                <span className="delivery-id">WL-2024-001234</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.33333 8H14.6667" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 1.33331V14.6666" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 10.6666L10.6667 7.99998L13.3333 5.33331" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.66667 5.33331L5.33334 7.99998L2.66667 10.6666" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 2.66669L7.99999 5.33335L5.33333 2.66669" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.33333 13.3334L7.99999 10.6667L10.6667 13.3334" stroke="#4A90E2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="status-badge status-critical">На таможне</span>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="#65758B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="delivery-route">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM7.25 3.99999V7.87867C7.25 8.4754 7.48705 9.0477 7.90901 9.46966L9.46967 11.0303L10.5303 9.96966L8.96967 8.409C8.82902 8.26834 8.75 8.07758 8.75 7.87867V3.99999H7.25Z" fill="#65758B"/>
              </svg>
              <div className="route-text">
                <span>Гуанчжоу</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.53033 12.5296L13.5303 8.52959C13.8232 8.2367 13.8232 7.76183 13.5303 7.46893L9.53033 3.46893L8.46967 4.52959L11.191 7.25097L2.00028 7.24926L2 8.74926L11.1876 8.75097L8.46967 11.4689L9.53033 12.5296Z" fill="#65758B"/>
                </svg>
                <span>Москва (Авто) (14 дн)</span>
              </div>
              <span className="delivery-date">1 фев.</span>
            </div>

            <div className="delivery-progress">
              <div className="progress-step step-done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V3.5L7.5 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 1V3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4H10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 4.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="progress-line progress-done"></div>
              <div className="progress-step step-done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 10.865C5.65202 10.9528 5.82446 10.999 6 10.999C6.17554 10.999 6.34798 10.9528 6.5 10.865L10 8.86501C10.1519 8.77733 10.278 8.65125 10.3658 8.49943C10.4535 8.34761 10.4998 8.17538 10.5 8.00001V4.00001C10.4998 3.82465 10.4535 3.65242 10.3658 3.50059C10.278 3.34877 10.1519 3.22269 10 3.13501L6.5 1.13501C6.34798 1.04724 6.17554 1.00104 6 1.00104C5.82446 1.00104 5.65202 1.04724 5.5 1.13501L2 3.13501C1.84813 3.22269 1.72199 3.34877 1.63423 3.50059C1.54647 3.65242 1.50018 3.82465 1.5 4.00001V8.00001C1.50018 8.17538 1.54647 8.34761 1.63423 8.49943C1.72199 8.65125 1.84813 8.77733 2 8.86501L5.5 10.865Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 11V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.64502 3.5L6.00002 6L10.355 3.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.75 2.13501L8.25 4.71001" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="progress-line progress-done"></div>
              <div className="progress-step step-done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 9V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V8.5C1 8.63261 1.05268 8.75979 1.14645 8.85355C1.24021 8.94732 1.36739 9 1.5 9H2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 9H4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.5 9H10.5C10.6326 9 10.7598 8.94732 10.8536 8.85355C10.9473 8.75979 11 8.63261 11 8.5V6.675C10.9998 6.56153 10.961 6.45151 10.89 6.363L9.15 4.188C9.10324 4.12944 9.04391 4.08214 8.9764 4.0496C8.9089 4.01706 8.83494 4.00011 8.76 4H7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10C9.05228 10 9.5 9.55228 9.5 9C9.5 8.44772 9.05228 8 8.5 8C7.94772 8 7.5 8.44772 7.5 9C7.5 9.55228 7.94772 10 8.5 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 10C4.05228 10 4.5 9.55228 4.5 9C4.5 8.44772 4.05228 8 3.5 8C2.94772 8 2.5 8.44772 2.5 9C2.5 9.55228 2.94772 10 3.5 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="progress-line progress-done"></div>
              <div className="progress-step step-done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V3.5C1.5 3.77614 1.72386 4 2 4H3.5C3.77614 4 4 3.77614 4 3.5V2C4 1.72386 3.77614 1.5 3.5 1.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 1.5H8.5C8.22386 1.5 8 1.72386 8 2V3.5C8 3.77614 8.22386 4 8.5 4H10C10.2761 4 10.5 3.77614 10.5 3.5V2C10.5 1.72386 10.2761 1.5 10 1.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.5 8H2C1.72386 8 1.5 8.22386 1.5 8.5V10C1.5 10.2761 1.72386 10.5 2 10.5H3.5C3.77614 10.5 4 10.2761 4 10V8.5C4 8.22386 3.77614 8 3.5 8Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 8H9C8.73478 8 8.48043 8.10536 8.29289 8.29289C8.10536 8.48043 8 8.73478 8 9V10.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 10.5V10.5045" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 3.5V5C6 5.26522 5.89464 5.51957 5.70711 5.70711C5.51957 5.89464 5.26522 6 5 6H3.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.5 6H1.50455" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 1.5H6.00455" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8V8.00455" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6H8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.5 6V6.00455" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 10.5V10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="progress-line progress-done"></div>
              <div className="progress-step step-done">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0002 6.49998C10.0002 8.99998 8.25024 10.25 6.17024 10.975C6.06133 11.0119 5.94301 11.0101 5.83524 10.97C3.75024 10.25 2.00024 8.99998 2.00024 6.49998V2.99998C2.00024 2.86737 2.05292 2.7402 2.14669 2.64643C2.24046 2.55266 2.36764 2.49998 2.50024 2.49998C3.50024 2.49998 4.75024 1.89998 5.62024 1.13998C5.72617 1.04948 5.86092 0.999756 6.00024 0.999756C6.13957 0.999756 6.27432 1.04948 6.38024 1.13998C7.25524 1.90498 8.50024 2.49998 9.50024 2.49998C9.63285 2.49998 9.76003 2.55266 9.8538 2.64643C9.94757 2.7402 10.0002 2.86737 10.0002 2.99998V6.49998Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="progress-line progress-done"></div>
              <div className="progress-step step-active">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div className="delivery-notifications">
              <div className="notification-item notification-warning">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8 1.33331C4.3181 1.33331 1.33333 4.31808 1.33333 7.99998C1.33333 11.6819 4.3181 14.6666 8 14.6666Z" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 5.33331V7.99998" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10.6667H8.00667" stroke="#F59F0A" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="notification-content">
                  <h4 className="notification-title">Подтверждение стоимости</h4>
                  <p className="notification-description">Требуется документ подтверждения</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="notification-item notification-critical">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8 1.33331C4.3181 1.33331 1.33333 4.31808 1.33333 7.99998C1.33333 11.6819 4.3181 14.6666 8 14.6666Z" stroke="#EF4343" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 5.33331V7.99998" stroke="#EF4343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 10.6667H8.00667" stroke="#EF4343" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="notification-content">
                  <h4 className="notification-title">Подтверждение стоимости</h4>
                  <p className="notification-description">Требуется документ подтверждения</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <button className="more-actions-button">
                <span>Ещё действия</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="more-count">+2</span>
              </button>
            </div>
          </div>
        </div>

        {/* Create Button */}
        <button className="create-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Создать поставку
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item nav-active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10.0005C2.99993 9.70952 3.06333 9.42208 3.18579 9.15817C3.30824 8.89427 3.4868 8.66025 3.709 8.47246L10.709 2.47346C11.07 2.16836 11.5274 2.00098 12 2.00098C12.4726 2.00098 12.93 2.16836 13.291 2.47346L20.291 8.47246C20.5132 8.66025 20.6918 8.89427 20.8142 9.15817C20.9367 9.42208 21.0001 9.70952 21 10.0005V19.0005C21 19.5309 20.7893 20.0396 20.4142 20.4147C20.0391 20.7897 19.5304 21.0005 19 21.0005H5C4.46957 21.0005 3.96086 20.7897 3.58579 20.4147C3.21071 20.0396 3 19.5309 3 19.0005V10.0005Z" stroke="#4A90E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Главная</span>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 21.7301C11.304 21.9057 11.6489 21.9981 12 21.9981C12.3511 21.9981 12.696 21.9057 13 21.7301L20 17.7301C20.3037 17.5548 20.556 17.3026 20.7315 16.999C20.9071 16.6953 20.9996 16.3509 21 16.0001V8.00015C20.9996 7.64942 20.9071 7.30496 20.7315 7.00131C20.556 6.69766 20.3037 6.44551 20 6.27015L13 2.27015C12.696 2.09461 12.3511 2.0022 12 2.0022C11.6489 2.0022 11.304 2.09461 11 2.27015L4 6.27015C3.69626 6.44551 3.44398 6.69766 3.26846 7.00131C3.09294 7.30496 3.00036 7.64942 3 8.00015V16.0001C3.00036 16.3509 3.09294 16.6953 3.26846 16.999C3.44398 17.3026 3.69626 17.5548 4 17.7301L11 21.7301Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.28906 6.99976L11.9991 11.9998L20.7091 6.99976" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 4.27026L16.5 9.42026" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Поставки</span>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 5.00098V19.001C3 19.5314 3.21071 20.0401 3.58579 20.4152C3.96086 20.7903 4.46957 21.001 5 21.001H20C20.2652 21.001 20.5196 20.8956 20.7071 20.7081C20.8946 20.5205 21 20.2662 21 20.001V16.001" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Финансы</span>
        </button>
        <button className="nav-item">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9995 21V19C18.9995 17.9391 18.5781 16.9217 17.8279 16.1716C17.0778 15.4214 16.0604 15 14.9995 15H8.99951C7.93865 15 6.92123 15.4214 6.17108 16.1716C5.42094 16.9217 4.99951 17.9391 4.99951 19V21" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9995 11C14.2087 11 15.9995 9.20914 15.9995 7C15.9995 4.79086 14.2087 3 11.9995 3C9.79037 3 7.99951 4.79086 7.99951 7C7.99951 9.20914 9.79037 11 11.9995 11Z" stroke="#65758B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Профиль</span>
        </button>
      </div>
    </div>
  );
}

export default ScreenMain;
