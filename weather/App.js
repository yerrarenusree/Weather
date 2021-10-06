import React from 'react';
import { Provider} from 'react-redux';
import store from './store';
import Navigation from './src/Components/Navigation/Navigation';
import SplashScreen from  "react-native-splash-screen";
// import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      {/* <SafeAreaProvider style={{ flex: 1, backgroundColor: 'red' }}> */}
        <Navigation/>
      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

export default App;
