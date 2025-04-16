import React from 'react';

function ClickHouseConfig({ config, onChange }) {
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
        <h3>ClickHouse Configuration</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="host" className="form-label">Host</label>
          <input
            type="text"
            className="form-control"
            id="host"
            name="host"
            value={config.host}
            onChange={handleChange}
            placeholder="localhost"
            required
            aria-describedby="hostHelp"
          />
          <div id="hostHelp" className="form-text">Enter the ClickHouse server host</div>
        </div>
        <div className="form-group">
          <label htmlFor="port" className="form-label">Port</label>
          <input
            type="text"
            className="form-control"
            id="port"
            name="port"
            value={config.port}
            onChange={handleChange}
            placeholder="8443"
            required
            aria-describedby="portHelp"
          />
          <div id="portHelp" className="form-text">Use 9440/8443 for HTTPS, 9000/8123 for HTTP</div>
        </div>
        <div className="form-group">
          <label htmlFor="database" className="form-label">Database</label>
          <input
            type="text"
            className="form-control"
            id="database"
            name="database"
            value={config.database}
            onChange={handleChange}
            placeholder="default"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user" className="form-label">User</label>
          <input
            type="text"
            className="form-control"
            id="user"
            name="user"
            value={config.user}
            onChange={handleChange}
            placeholder="default"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jwt_token" className="form-label">JWT Token</label>
          <textarea
            className="form-control"
            id="jwt_token"
            name="jwt_token"
            value={config.jwt_token}
            onChange={handleChange}
            placeholder="JWT Token for authentication"
            rows="4"
            style={{ fontFamily: 'monospace' }}
            aria-describedby="jwtHelp"
          />
          <div id="jwtHelp" className="form-text">Paste your JWT token here</div>
        </div>
      </div>
    </div>
  );
}

export default ClickHouseConfig;