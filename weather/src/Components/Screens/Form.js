/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from './Form.styles';
import { getWeather } from '../../../store/actions/WeatherAction';

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
        <Button title="Search" onPress={searchSubmitHandler} />
      </View>
    </View>
  );
};

export default Form;
