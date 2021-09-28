import React, { Component } from 'react';
import { ScrollView, View, TextInput, Button, Text } from 'react-native';
import styles from './Weather.style';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: '',
          ErrorStatus : true,
        };
      }
      componentDidMount() {
        console.log(this.state.city);
      }
      onPress = event => {
         console.log(this.state.city);
      }
      handleChange = (text) =>{
        if(text.trim() === ''){
          this.setState({city : text, ErrorStatus : true });
       } else {
           this.setState({city : text, ErrorStatus : false });
       }
     }
    render() {
        return(
          <ScrollView>
              <View style= {styles.container}>
                <TextInput style={styles.input}
                placeholder="City"
                onChangeText={this.handleChange}
                />
                <View style={styles.btn}>
                    <Button style={styles.searchBtn}
                      onPress={this.onPress}
                      title='Search'
                    />
                </View>
              </View>
              { this.state.ErrorStatus === true ? (
                    <Text style={styles.errorMessage}>
                      * Please enter the city.
                    </Text>
                    ) : null }
          </ScrollView>
        );
    };
};
export default Weather;