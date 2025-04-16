# Bidirectional ClickHouse Flat File Data Ingestion Application

A modern web application for seamless data transfer between ClickHouse databases and flat files (CSV, TSV, etc.).

## Overview

This application provides a user-friendly interface for:
- Connecting to ClickHouse databases
- Importing data from flat files to ClickHouse
- Exporting data from ClickHouse to flat files
- Previewing data before transfer
- Managing multi-table joins

## Screenshot

![Application Interface](https://res.cloudinary.com/defttssx1/image/upload/v1744821128/rb7hy1ejauyxgnv34ylg.png)

## Features

- **Bidirectional Data Transfer**: Import from flat files to ClickHouse or export from ClickHouse to flat files
- **Modern UI**: Clean, responsive interface with dark theme
- **Real-time Data Preview**: Preview data before transfer
- **Column Selection**: Choose specific columns to transfer
- **Multi-table Join Support**: Join multiple tables when exporting from ClickHouse
- **Progress Tracking**: Visual feedback during data transfer operations
- **Error Handling**: Clear error messages and status indicators

## Architecture

The application consists of two main components:

### Backend (Python/Flask)

- RESTful API endpoints for data operations
- ClickHouse client integration
- Flat file handling
- Data transformation logic

### Frontend (React)

- Modern UI with responsive design
- State management for application flow
- Real-time status updates
- Data preview components

## Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- ClickHouse server or cloud instance

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install Python dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install Node.js dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Usage

1. **Connect to ClickHouse**:
   - Enter your ClickHouse connection details (host, port, database, user, password)
   - Click "Connect" to establish the connection

2. **Select Source and Target**:
   - Choose whether to import from flat file to ClickHouse or export from ClickHouse to flat file
   - Configure the appropriate source and target settings

3. **Select Data**:
   - Choose tables and columns for transfer
   - For ClickHouse exports, optionally configure multi-table joins

4. **Preview Data**:
   - Click "Preview Data" to see a sample of the data before transfer

5. **Start Transfer**:
   - Click "Start Transfer" to begin the data ingestion process
   - Monitor progress through the status indicators

## API Endpoints

### Backend API

- `POST /connect-clickhouse`: Connect to ClickHouse database
- `POST /get-table-schema`: Get schema for a specific table
- `POST /get-flat-file-schema`: Get schema from a flat file
- `POST /preview-data`: Preview data from source
- `POST /clickhouse-to-flat-file`: Export data from ClickHouse to flat file
- `POST /flat-file-to-clickhouse`: Import data from flat file to ClickHouse
- `POST /multi-table-join`: Perform multi-table join and export

## Configuration

### ClickHouse Connection

The application supports connecting to both self-hosted ClickHouse servers and ClickHouse Cloud instances. For ClickHouse Cloud, use the following format for the host:

```
<instance-id>.<region>.azure.clickhouse.cloud
```

### Flat File Settings

Supported flat file formats:
- CSV (comma-separated values)
- TSV (tab-separated values)
- Custom delimiters

## Troubleshooting

### Common Issues

1. **Connection Errors**:
   - Verify ClickHouse server is running and accessible
   - Check network connectivity and firewall settings
   - Ensure correct credentials are provided

2. **Data Transfer Failures**:
   - Verify sufficient disk space for flat file exports
   - Check permissions for file operations
   - Ensure data types are compatible between source and target

3. **UI Issues**:
   - Clear browser cache if UI is not updating
   - Check browser console for JavaScript errors

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- ClickHouse team for the powerful database
- React team for the frontend framework
- Flask team for the backend framework
