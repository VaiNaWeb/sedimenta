// Libs
import React from 'react';

// Components
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="text" name="company" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
}

export default App;
