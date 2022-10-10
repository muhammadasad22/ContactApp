import React from 'react';
import GlobleProvider from './src/context/Providers';
import AppNavContainer from './src/navigation';

const App = () => {
  return (
    <GlobleProvider>
      <AppNavContainer />
    </GlobleProvider>
  );
};

export default App;
