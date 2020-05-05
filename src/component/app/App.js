import React from 'react';
import style from './App.module.css';
import Header from '../header/header'

function App(props) {
  return (
    <div className={style.app}>
      <Header />
    </div>
  );
}

export default App;
