/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './WeatherData.styles';
import { ScrollView, View, Text } from 'react-native';

const WeatherData = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
        <Text style={styles.title}>{data.name} - {data.sys.country}</Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{data.main.temp}K</Text>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>Wind</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default WeatherData;
