import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Weather from './src/Components/Weather';
import styles from './App.style';

class App extends Component {
    render() {
        return(
          <ScrollView>
              <View style={styles.container}>
                  <Text style={styles.heading}>
                      Weather App
                  </Text>
                  <View>
                      <Weather />
                  </View>
              </View>
          </ScrollView>
        );
    };
};
export default App;