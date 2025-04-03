import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"  />
      </header>
      <main>
        <Dictionary defaultKeyword="ladybug"/>
      </main>
      <footer className='App-footer'>
         This project is open sourced on {' '}
      <strong>
        <a href="https://github.com/joanamorais13/react-dictionary-app"
          >GitHub <FontAwesomeIcon icon={faGithub}/> </a>
          
          </strong>
      </footer>
      
    </div>
  );
}

export default App;
