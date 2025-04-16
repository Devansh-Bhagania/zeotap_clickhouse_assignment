import React from 'react';

function ResultDisplay({ result }) {
  if (!result) return null;

  if (result.error) {
    return (
      <div className="card" style={{ border: '2px solid #ef4444' }}>
        <div className="card-header" style={{ background: '#ef4444', color: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
              <path d="M12 8v4" />
              <path d="M12 16h.01" />
            </svg>
            <h3>Error</h3>
          </div>
        </div>
        <div className="card-body">
          <p style={{ color: '#ef4444', fontSize: '1.125rem' }}>{result.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ border: '2px solid #10b981' }}>
      <div className="card-header" style={{ background: '#10b981', color: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <h3>Success</h3>
        </div>
      </div>
      <div className="card-body">
        <p style={{ fontSize: '1.25rem' }}>
          <strong>Records Processed:</strong> {result.records_processed}
        </p>
        {result.message && <p style={{ fontSize: '1.125rem' }}>{result.message}</p>}
      </div>
    </div>
  );
}

export default ResultDisplay;