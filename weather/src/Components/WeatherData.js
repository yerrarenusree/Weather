/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './WeatherData.styles';
import { View, Text, ScrollView } from 'react-native';

const WeatherData = ({ data }) => {

  const groupByDays = (data) => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);
      return list;
    }, []));
  };

  const getInfo = (data, min=[], max=[], humidity=[], feels_like=[],
    grnd_level=[], pressure=[], sea_level=[], temp=[]) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      humidity.push(item.main.humidity);
      feels_like.push(item.main.feels_like);
      grnd_level.push(item.main.grnd_level);
      pressure.push(item.main.pressure);
      sea_level.push(item.main.sea_level);
      temp.push(item.main.temp);
    });
    const average = {
      min: Math.round(min.reduce((curr, next) => curr + next) / min.length),
      max: Math.round(max.reduce((curr, next) => curr + next) / max.length),
      humidity: Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length),
      feels_like: Math.round(feels_like.reduce((curr, next) => curr + next) / feels_like.length),
      grnd_level: Math.round(grnd_level.reduce((curr, next) => curr + next) / grnd_level.length),
      pressure: Math.round(pressure.reduce((curr, next) => curr + next) / pressure.length),
      sea_level: Math.round(sea_level.reduce((curr, next) => curr + next) / sea_level.length),
      temp: Math.round(temp.reduce((curr, next) => curr + next) / temp.length),
    };

    return (
    <View style={styles.box}>
      <Text>Min Tempature:{average.min}</Text>
      <Text>Max Tempature: {average.max}</Text>
      <Text>Humidity: {average.humidity}</Text>
      <Text>Feels Like: {average.feels_like}</Text>
      <Text>Ground Level: {average.grnd_level}</Text>
      <Text>Pressure: {average.pressure}</Text>
      <Text>Sea Level{average.sea_level}</Text>
      <Text>Tempature{average.temp}</Text>
    </View>
    );
  };

  const dateFilter = Object.values(groupByDays(data));
  const cardDeatils = dateFilter.length > 5 ? dateFilter.slice(0, 5) : dateFilter;
  return (
    <ScrollView>
      <View style={styles.container}>
        {cardDeatils.map(item => getInfo(item))}
      </View>
  </ScrollView>
  );
};

export default WeatherData;

