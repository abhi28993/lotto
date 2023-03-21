import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllStacks from './Navigation/router';

const App = () => {
  return (
    <NavigationContainer>
      <AllStacks />
    </NavigationContainer>
  );
};

export default App;
