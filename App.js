import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './assets/src/navigation/AppNavigator';

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;
