import React from 'react';
import {CalenderContextProvider} from './context/CalenderContext';
import Router from './routes/Router';

const App = () => {
  return (
    <CalenderContextProvider>
      <Router />
    </CalenderContextProvider>
  );
};

export default App;
