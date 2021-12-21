import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { Routes } from './src/routes'
import  store  from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>

  );
}
