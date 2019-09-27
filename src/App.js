import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        NODE_ENV: {process.env.NODE_ENV}
      </div>
      <div>
        REACT_APP_SERVER_URL: {process.env.REACT_APP_SERVER_URL}
      </div>
      <div>
        REACT_APP_ENVIRONMENT: {process.env.REACT_APP_ENVIRONMENT}
      </div>
      <button>This is the best button</button>
    </div>
  );
}

export default App;
