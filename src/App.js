import React from 'react';
import Routes from './Routes';
import './App.css';
import Routes2022 from '2022/2022Routes'

const App = () => {
  if (window.location?.pathname?.includes('2022')) {
    return <Routes2022 />
  }
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;