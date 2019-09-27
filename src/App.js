import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleClicked = () => {
    const list = []
    list[0].jub()
  }

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
      <p>
        Click button below to make an error and see on sentry logger
      </p>
      <button onClick={handleClicked}>This is the best button</button>
    </div>
  );
}

export default App;
