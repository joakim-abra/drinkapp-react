import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import backgroundVideo from './shared/vid/bubl.mp4'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div id="App">
  <React.StrictMode>
    <App />
      <div>
<video id="background-video" autoPlay loop muted>
<source src={backgroundVideo} type="video/mp4"/>
</video>
      </div>
  </React.StrictMode>
  </div>
);

