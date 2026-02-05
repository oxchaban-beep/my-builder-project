import './FloatingActionButton.css';

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5V19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function FloatingActionButton({ children, onClick }) {
  return (
    <button className="fab" onClick={onClick}>
      <PlusIcon />
      <span>{children}</span>
    </button>
  );
}
