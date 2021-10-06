import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import WeatherData from '../Screens/Weather';
import FormData from '../Screens/Form';

const onBackPress = () => {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.pop();
    return true;
  };

  const Navigation = () => (
    <Router backAndroidHandler={() => onBackPress()}>
      <Scene key="root">
        <Scene key="WeatherApp" component={FormData} title="Weather App"/>
        <Scene key="WeatherData" component={WeatherData} back={true} title="Weather Data" />
        </Scene>
    </Router>
  );

  export default Navigation;