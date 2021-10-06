import React from 'react';
import { Provider} from 'react-redux';
import store from './src/state';
import Navigation from './src/Components/Navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation/>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
