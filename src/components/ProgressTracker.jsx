import './ProgressTracker.css';

const STAGE_ICONS = {
  document: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M7.5 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V3.5L7.5 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 1V3C7 3.26522 7.10536 3.51957 7.29289 3.70711C7.48043 3.89464 7.73478 4 8 4H10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5 4.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 8.5H4" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  box: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M5.5 10.865C5.65202 10.9528 5.82446 10.999 6 10.999C6.17554 10.999 6.34798 10.9528 6.5 10.865L10 8.86501C10.1519 8.77733 10.278 8.65125 10.3658 8.49943C10.4535 8.34761 10.4998 8.17538 10.5 8.00001V4.00001C10.4998 3.82465 10.4535 3.65242 10.3658 3.50059C10.278 3.34877 10.1519 3.22269 10 3.13501L6.5 1.13501C6.34798 1.04724 6.17554 1.00104 6 1.00104C5.82446 1.00104 5.65202 1.04724 5.5 1.13501L2 3.13501C1.84813 3.22269 1.72199 3.34877 1.63423 3.50059C1.54647 3.65242 1.50018 3.82465 1.5 4.00001V8.00001C1.50018 8.17538 1.54647 8.34761 1.63423 8.49943C1.72199 8.65125 1.84813 8.77733 2 8.86501L5.5 10.865Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 11V6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.64502 3.5L6.00002 6L10.355 3.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.75 2.13501L8.25 4.71001" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  delivery: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M7 9V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2H2C1.73478 2 1.48043 2.10536 1.29289 2.29289C1.10536 2.48043 1 2.73478 1 3V8.5C1 8.63261 1.05268 8.75979 1.14645 8.85355C1.24021 8.94732 1.36739 9 1.5 9H2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 9H4.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5 9H10.5C10.6326 9 10.7598 8.94732 10.8536 8.85355C10.9473 8.75979 11 8.63261 11 8.5V6.675C10.9998 6.56153 10.961 6.45151 10.89 6.363L9.15 4.188C9.10324 4.12944 9.04391 4.08214 8.9764 4.0496C8.9089 4.01706 8.83494 4.00011 8.76 4H7" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 10C9.05228 10 9.5 9.55228 9.5 9C9.5 8.44772 9.05228 8 8.5 8C7.94772 8 7.5 8.44772 7.5 9C7.5 9.55228 7.94772 10 8.5 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 10C4.05228 10 4.5 9.55228 4.5 9C4.5 8.44772 4.05228 8 3.5 8C2.94772 8 2.5 8.44772 2.5 9C2.5 9.55228 2.94772 10 3.5 10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  qr: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
  ),
  safe: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10.0002 6.49998C10.0002 8.99998 8.25024 10.25 6.17024 10.975C6.06133 11.0119 5.94301 11.0101 5.83524 10.97C3.75024 10.25 2.00024 8.99998 2.00024 6.49998V2.99998C2.00024 2.86737 2.05292 2.7402 2.14669 2.64643C2.24046 2.55266 2.36764 2.49998 2.50024 2.49998C3.50024 2.49998 4.75024 1.89998 5.62024 1.13998C5.72617 1.04948 5.86092 0.999756 6.00024 0.999756C6.13957 0.999756 6.27432 1.04948 6.38024 1.13998C7.25524 1.90498 8.50024 2.49998 9.50024 2.49998C9.63285 2.49998 9.76003 2.55266 9.8538 2.64643C9.94757 2.7402 10.0002 2.86737 10.0002 2.99998V6.49998Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  location: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M10 5C10 7.4965 7.2305 10.0965 6.3005 10.8995C6.21386 10.9646 6.1084 10.9999 6 10.9999C5.8916 10.9999 5.78614 10.9646 5.6995 10.8995C4.7695 10.0965 2 7.4965 2 5C2 3.93913 2.42143 2.92172 3.17157 2.17157C3.92172 1.42143 4.93913 1 6 1C7.06087 1 8.07828 1.42143 8.82843 2.17157C9.57857 2.92172 10 3.93913 10 5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function ProgressTracker({ stages = [], currentStage = 0 }) {
  return (
    <div className="progress-tracker">
      {stages.map((stage, index) => (
        <div key={index} className="progress-stage-wrapper">
          <div className={`progress-stage ${
            index < currentStage ? 'progress-stage-done' : 
            index === currentStage ? 'progress-stage-current' : 
            'progress-stage-pending'
          }`}>
            {STAGE_ICONS[stage]}
          </div>
          {index < stages.length - 1 && (
            <div className={`progress-track ${index < currentStage ? 'progress-track-done' : 'progress-track-pending'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
