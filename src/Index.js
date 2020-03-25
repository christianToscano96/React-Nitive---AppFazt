/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataBanner: [],
    };
  }

  componentDidMount() {
    const url = 'http://tutofox.com/foodapp/api.json';
    return fetch(url)
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          isLoading: false,
          dataBanner: resJson,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{width: width, alignItems: 'center'}}>
          <Image
            //resizeMode="contain"
            style={{height: 100, width: width / 2, margin: 10}}
            source={require('./img/logo.jpg')}
          />
          <Swiper style={{height: width / 2}}>
            {
             this.state.dataBanner.map((itemmap, key)=>{
                return (
                  // eslint-disable-next-line no-undef
                  <Image key={key} style={styles.imageBanner} resizeMode="contain" source={{uri:itemmap} }/>
                );
              })
            }
          </Swiper>
        </View>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <Text>App Delivery </Text>
          <Text>{JSON.stringify(this.state.dataBanner)}</Text>
        </View>
      </ScrollView>
    );
  }
}
