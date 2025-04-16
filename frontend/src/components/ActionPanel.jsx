import React from 'react';

function ActionPanel({ onPreview, onStartIngestion, disabled }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Actions</h3>
      </div>
      <div className="card-body">
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            className="btn btn-secondary"
            onClick={onPreview}
            disabled={disabled}
            aria-label="Preview data"
            data-tooltip="View first 100 records"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: '0.5rem' }}
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Preview Data
          </button>
          <button
            className="btn btn-success"
            onClick={onStartIngestion}
            disabled={disabled}
            aria-label="Start ingestion"
            data-tooltip="Begin data ingestion"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginRight: '0.5rem' }}
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Start Ingestion
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActionPanel;