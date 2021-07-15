import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { Footer } from './components/Footer';
import { MainButton } from './components/MainButton';

function App() {
  return (
    <div className="App">
      <MainButton />
      <Footer />
    </div>
  );
}

export default App;
