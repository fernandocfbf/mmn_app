import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import FlashMessage from "react-native-flash-message";

import Router from './src/routes'
import store from './src/store';
import { setNavigator } from './src/services/navigation';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router
          ref={(nav: any) => setNavigator(nav)} />
      </Provider >
      <FlashMessage position="top" style={{ marginTop: 40 }} />
    </>


  );
}
