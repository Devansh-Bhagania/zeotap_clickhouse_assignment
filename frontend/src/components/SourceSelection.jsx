import React from 'react';

function SourceSelection({ sourceType, targetType, onSourceChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Data Flow Direction</h2>
      </div>
      <div className="card-body">
        <div className="radio-group">
          <input
            className="radio-input"
            type="radio"
            name="sourceType"
            id="clickhouseToFlatFile"
            checked={sourceType === 'clickhouse'}
            onChange={() => onSourceChange('clickhouse')}
            aria-label="ClickHouse to Flat File"
          />
          <label className="form-label" htmlFor="clickhouseToFlatFile">
            ClickHouse → Flat File
          </label>
        </div>
        <div className="radio-group">
          <input
            className="radio-input"
            type="radio"
            name="sourceType"
            id="flatFileToClickhouse"
            checked={sourceType === 'flat_file'}
            onChange={() => onSourceChange('flat_file')}
            aria-label="Flat File to ClickHouse"
          />
          <label className="form-label" htmlFor="flatFileToClickhouse">
            Flat File → ClickHouse
          </label>
        </div>
      </div>
    </div>
  );
}

export default SourceSelection;