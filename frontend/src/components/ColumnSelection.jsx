import React from 'react';

function ColumnSelection({ columns, selectedColumns, onColumnsSelect }) {
  const handleSelectAll = () => {
    if (selectedColumns.length === columns.length) {
      onColumnsSelect([]);
    } else {
      onColumnsSelect(columns.map(col => col.name));
    }
  };

  const handleColumnToggle = (columnName) => {
    if (selectedColumns.includes(columnName)) {
      onColumnsSelect(selectedColumns.filter(col => col !== columnName));
    } else {
      onColumnsSelect([...selectedColumns, columnName]);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Column Selection</h3>
      </div>
      <div className="card-body">
        <button
          className="btn btn-primary"
          onClick={handleSelectAll}
          style={{ marginBottom: '1rem' }}
          aria-label={selectedColumns.length === columns.length ? 'Deselect all columns' : 'Select all columns'}
        >
          {selectedColumns.length === columns.length ? 'Deselect All' : 'Select All'}
        </button>
        <div className="grid">
          {columns.map((column) => (
            <div className="checkbox-group" key={column.name}>
              <input
                className="checkbox-input"
                type="checkbox"
                id={`col-${column.name}`}
                checked={selectedColumns.includes(column.name)}
                onChange={() => handleColumnToggle(column.name)}
                aria-label={`Select column ${column.name}`}
              />
              <label htmlFor={`col-${column.name}`}>
                {column.name} <span style={{ color: '#94a3b8', fontSize: '0.875rem' }}>({column.type})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ColumnSelection;