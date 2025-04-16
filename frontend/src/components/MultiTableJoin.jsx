import React, { useState } from 'react';

function MultiTableJoin({ tables, config, onChange }) {
  const [showJoinOptions, setShowJoinOptions] = useState(config.enabled);
  const [selectedTables, setSelectedTables] = useState(config.tables || []);
  const [joinConditions, setJoinConditions] = useState(config.joinConditions || []);

  const handleToggleJoin = () => {
    const newEnabled = !showJoinOptions;
    setShowJoinOptions(newEnabled);

    onChange({
      ...config,
      enabled: newEnabled,
      tables: newEnabled ? selectedTables : [],
      joinConditions: newEnabled ? joinConditions : [],
    });
  };

  const handleTableSelect = (event) => {
    const options = event.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    setSelectedTables(selectedValues);

    const newJoinConditions = [...joinConditions];
    while (newJoinConditions.length < selectedValues.length - 1) {
      newJoinConditions.push('');
    }
    while (newJoinConditions.length > selectedValues.length - 1) {
      newJoinConditions.pop();
    }

    setJoinConditions(newJoinConditions);

    onChange({
      ...config,
      tables: selectedValues,
      joinConditions: newJoinConditions,
    });
  };

  const handleJoinConditionChange = (index, value) => {
    const newJoinConditions = [...joinConditions];
    newJoinConditions[index] = value;

    setJoinConditions(newJoinConditions);

    onChange({
      ...config,
      joinConditions: newJoinConditions,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>
          <label className="switch">
            <input
              type="checkbox"
              className="switch-input"
              id="enableJoin"
              checked={showJoinOptions}
              onChange={handleToggleJoin}
              aria-label="Enable multi-table join"
            />
            <span className="switch-slider" />
          </label>
          Multi-Table Join
        </h3>
      </div>

      {showJoinOptions && (
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="joinTables" className="form-label">Select Tables to Join</label>
            <select
              className="select"
              id="joinTables"
              multiple
              value={selectedTables}
              onChange={handleTableSelect}
              style={{ minHeight: `${Math.min(5, tables.length) * 2}rem` }}
              aria-label="Select tables to join"
            >
              {tables.map((table) => (
                <option key={table} value={table}>
                  {table}
                </option>
              ))}
            </select>
            <div className="form-text">Hold Ctrl/Cmd to select multiple tables</div>
          </div>

          {selectedTables.length > 1 && (
            <div>
              <h4 style={{ marginBottom: '1rem' }}>Join Conditions</h4>
              {selectedTables.slice(1).map((table, index) => (
                <div className="form-group" key={index}>
                  <label className="form-label">
                    {selectedTables[0]} JOIN {table} ON:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., t0.id = t1.user_id"
                    value={joinConditions[index] || ''}
                    onChange={(e) => handleJoinConditionChange(index, e.target.value)}
                    style={{ fontFamily: 'monospace' }}
                    aria-label={`Join condition for ${selectedTables[0]} and ${table}`}
                  />
                  <div className="form-text">
                    Use t0 for {selectedTables[0]} and t{index + 1} for {table}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MultiTableJoin;