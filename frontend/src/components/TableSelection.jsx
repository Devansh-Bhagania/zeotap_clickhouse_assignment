import React from 'react';

function TableSelection({ tables, selectedTable, onTableSelect }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Table Selection</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="tableSelect" className="form-label">Select Table</label>
          <select
            className="select"
            id="tableSelect"
            value={selectedTable}
            onChange={(e) => onTableSelect(e.target.value)}
            aria-label="Select a table"
          >
            <option value="" disabled>
              -- Select a table --
            </option>
            {tables.map((table) => (
              <option key={table} value={table}>
                {table}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default TableSelection;