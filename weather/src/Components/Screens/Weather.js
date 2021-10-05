/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text} from 'react-native';
import WeatherData from '../WeatherData';
import styles from './Weather.style';
import {useSelector} from 'react-redux';

const Weather = () => {
  const { data, error } = useSelector(state => state.weather);
  if (error) {
    return <View style={styles.container}>
      <Text style={styles.error}>{error}</Text>
    </View>;
  }

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <WeatherData data={data} />
    </View>
  );
};

export default Weather;
