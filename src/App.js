// import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={faBookOpen} size="3x" />
        <h1 className="app-title">DICTIONARY APP </h1>
        <p className="app-subtitle">CREATED WITH REACT</p>
      </header>
      <main>
        <Dictionary defaultKeyword="ladybug"/>
      </main>
      <footer className='App-footer'>
         This project is open-sourced on {' '}
      <strong>
        <a href="https://github.com/joanamorais13/react-dictionary-app"
          >GitHub</a>
        </strong>  <FontAwesomeIcon icon={faGithub}/>
      </footer>
      
    </div>
  );
}

export default App;
