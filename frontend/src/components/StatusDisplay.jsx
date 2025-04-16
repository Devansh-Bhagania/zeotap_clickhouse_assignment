import React from 'react';

function StatusDisplay({ status }) {
  const getStatusText = () => {
    switch (status) {
      case 'idle':
        return 'Ready to connect';
      case 'connecting':
        return 'Connecting to source...';
      case 'connected':
        return 'Connected. Select table or columns';
      case 'fetching':
        return 'Fetching schema...';
      case 'ready':
        return 'Ready to proceed';
      case 'previewing':
        return 'Loading data preview...';
      case 'ingesting':
        return 'Ingesting data...';
      case 'completed':
        return 'Ingestion completed successfully';
      case 'error':
        return 'Error occurred';
      default:
        return 'Unknown status';
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'completed':
        return 'alert-success';
      case 'error':
        return 'alert-danger';
      case 'connecting':
      case 'fetching':
      case 'ingesting':
      case 'previewing':
        return 'alert-warning';
      default:
        return 'alert-info';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        );
      case 'error':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        );
      case 'connecting':
      case 'fetching':
      case 'ingesting':
      case 'previewing':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#854d0e"
            strokeWidth="2"
          >
            <path d="M12 2v6m0 8v6m10-10h-6m-8 0H2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Status</h3>
      </div>
      <div className="card-body">
        <div className={`alert ${getStatusClass()}`}>
          {getStatusIcon()}
          <div>
            {getStatusText()}
            {(status === 'connecting' || status === 'fetching' || status === 'ingesting' || status === 'previewing') && (
              <div className="progress">
                <div className="progress-bar" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusDisplay;