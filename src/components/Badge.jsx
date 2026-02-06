import './Badge.css';

export default function Badge({ children, variant = 'default' }) {
  return (
    <div className={`badge badge-${variant}`}>
      {children}
    </div>
  );
}
