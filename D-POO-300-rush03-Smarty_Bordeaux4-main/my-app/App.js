import React from 'react';

import { Text } from 'react-native';

import Map from './Navigation/Routage';
import Login from './Navigation/Routage';
import Activity from './Navigation/Routage';
import Filtre from './Navigation/Routage';
import Accident from './Navigation/Routage';

function App () {
  return (
    <Login></Login>,
    <Map></Map>,
    <Accident></Accident>
  );
};

export default App;