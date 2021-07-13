import React from 'react';
import {ScrollView, View, Text} from 'react-native';
// -----

import Navigation from './src/navigation/Navigation';
// import Alerts from './src/modules/alerts/Alerts';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Navigation />
    </View>
  );
}
export default App;
