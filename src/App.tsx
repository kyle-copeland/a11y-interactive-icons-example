import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  const [value, setValue] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div role='search'>
          <input aria-label='Search for comics' value={value} onChange={(e) => setValue(e.target.value)} />
          {value !== '' && (
          <button aria-label='Clear the search field'  onClick={() => setValue('')}>
            <i className='fa fa-times' aria-hidden='true'/>
          </button>
          )}
       </div>
      </header>
    </div>
  );
}

export default App;
