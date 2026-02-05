import { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import DeliveryCard from './components/DeliveryCard';
import BottomNav from './components/BottomNav';
import FloatingActionButton from './components/FloatingActionButton';
import NotificationBanner from './components/NotificationBanner';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'Активные', count: 5 },
    { id: 'requires-action', label: 'Требую действия', count: 4 },
    { id: 'closed', label: 'Закрытые', count: 0 }
  ];

  const deliveries = [
    {
      orderNumber: 'WL-2024-001234',
      statusBadge: { text: 'На таможне', variant: 'critical' },
      hasSnowIcon: true,
      route: { from: 'Гуанчжоу', to: 'Москва (Авто) (14 дн)' },
      date: '1 фев.',
      currentStage: 5,
      stages: ['document', 'box', 'delivery', 'qr', 'safe', 'location'],
      notifications: [
        {
          title: 'Подтверждение стоимости',
          description: 'Требуется документ подтверждения',
          variant: 'warning'
        },
        {
          title: 'Подтверждение стоимости',
          description: 'Требуется документ подтверждения',
          variant: 'critical',
          active: true
        }
      ],
      showMoreActions: true,
      moreActionsCount: 2
    },
    {
      orderNumber: 'WL-2024-001238',
      statusBadge: { text: 'На складе кэмп', variant: 'default' },
      route: { from: 'Гуанчжоу', to: 'Москва (Авто) (14 дн)' },
      date: '1 фев.',
      currentStage: 1,
      stages: ['document', 'box', 'delivery', 'qr', 'safe', 'location'],
      notifications: [
        {
          title: 'Подтверждение отмечено как выполненное',
          description: 'Необходимо проверить документы перед переходов',
          variant: 'warning'
        }
      ]
    },
    {
      orderNumber: 'WL-2024-001239',
      statusBadge: { text: 'Доставлено', variant: 'default' },
      route: { from: 'Гуанчжоу', to: 'Москва (Авто) (14 дн)' },
      date: '28 янв.',
      currentStage: 5,
      stages: ['document', 'box', 'delivery', 'qr', 'safe', 'location'],
      notifications: []
    },
    {
      orderNumber: 'WL-2024-001235',
      statusBadge: { text: 'Проблема', variant: 'warning' },
      route: { from: 'Гуанчжоу', to: 'Москва (Авто) (14 дн)' },
      date: '1 фев.',
      currentStage: 4,
      stages: ['document', 'box', 'delivery', 'qr', 'safe', 'location'],
      notifications: [
        {
          title: 'Удержание по КТС',
          description: 'Выпуск заблокирован до разрешения КТС',
          variant: 'critical'
        }
      ]
    }
  ];

  return (
    <div className="app">
      <Header title="Поставки" notificationCount={3} />
      
      <div className="app-content">
        <div className="warning-banner-container">
          <NotificationBanner
            title="Юридическая активация не завершена"
            description="Подтверждение поставок заблокировано"
            variant="warning"
          />
        </div>

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="deliveries-list">
          {deliveries.map((delivery, index) => (
            <DeliveryCard key={index} {...delivery} />
          ))}
        </div>

        <div className="fab-container">
          <FloatingActionButton>Создать поставку</FloatingActionButton>
          <p className="fab-hint">Необходимо проверить документы перед переходов</p>
        </div>
      </div>

      <BottomNav activeTab="deliveries" />
    </div>
  );
}

export default App;
