/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from './Form.styles';
import { getWeather } from '../../services/weather/weather.service';

const Form = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
    }
    dispatch(getWeather(search));
    Actions.push('WeatherData');
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Please Enter Valid city name and search</Text>
      <View>
        <TextInput style={styles.input} placeholder="Enter city name..." value={search} onChangeText={(val) => setSearch(val)} />
        <View style={styles.buttonSpace}>
          <TouchableOpacity style={styles.button} title="Search" onPress={searchSubmitHandler}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
