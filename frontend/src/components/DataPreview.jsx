import React from 'react';

function DataPreview({ data }) {
  if (!data || !data.data || data.data.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h3>Data Preview</h3>
        </div>
        <div className="card-body" style={{ textAlign: 'center', padding: '2rem' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            style={{ marginBottom: '0.5rem' }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v.01" />
            <path d="M12 8v4" />
          </svg>
          <p style={{ color: '#94a3b8' }}>No data to preview</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>Data Preview (First 100 Records)</h3>
      </div>
      <div className="card-body" style={{ padding: 0 }}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {data?.headers?.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((row, index) => (
                <tr key={index}>
                  {data.headers.map((header) => (
                    <td key={`${index}-${header}`}>
                      {row[header] !== null && row[header] !== undefined ? String(row[header]) : 'NULL'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DataPreview;