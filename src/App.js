import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
  );
}

export default App;
