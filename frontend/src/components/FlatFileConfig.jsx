import React from 'react';

function FlatFileConfig({ config, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...config,
      [name]: value,
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Flat File Configuration</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="file_path" className="form-label">File Path</label>
          <input
            type="text"
            className="form-control"
            id="file_path"
            name="file_path"
            value={config.file_path}
            onChange={handleChange}
            placeholder="/path/to/file.csv"
            required
            aria-describedby="filePathHelp"
          />
          <div id="filePathHelp" className="form-text">Enter the path to your CSV file</div>
        </div>
        <div className="form-group">
          <label htmlFor="delimiter" className="form-label">Delimiter</label>
          <input
            type="text"
            className="form-control"
            id="delimiter"
            name="delimiter"
            value={config.delimiter}
            onChange={handleChange}
            placeholder=","
            required
            style={{ maxWidth: '100px' }}
            aria-describedby="delimiterHelp"
          />
          <div id="delimiterHelp" className="form-text">Specify the delimiter (e.g., comma, tab)</div>
        </div>
      </div>
    </div>
  );
}

export default FlatFileConfig;