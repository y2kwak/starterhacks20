/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'



/*
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
  },
  {
    initialRouteName: 'Home'
  }
);
*/

class App extends Component {
    state = {
        date: {
          '2020-01-16': {selected: true, marked: true, selectedColor: 'blue'},
          '2020-02-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true}
        }
    }
    
    render() {
        const { date } = this.state
        
        return (
          <>
                <Text>
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                </Text>
                <View style={{alignItems: "center"}}>
                <Text style={{fontSize: 30}}> Groceries</Text>
                </View>
                <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={date}
                 />
                <Button
                   title="Add Item"
                   onPress={() => {
                   console.log("hello")
                   this.setState({
                    date: {
                        '2020-01-16': {selected: true, marked: true, selectedColor: 'yellow'},
                        '2020-01-17': {marked: true},
                        '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                        '2012-05-19': {disabled: true, disableTouchEvent: true}
                          }
                
                        })
                   }}
                />
                <Text style={{fontSize: 20 }}>
                    {"\n"}
                    {" "} Expires in a week: Eggs, Milk, Bread
                    {"\n"}
                </Text>
                <Text style={{fontSize: 20}}>
                    {" "}   Expired: Tofu, Tomato, Garlic
                </Text>
           </>
        );
    }
}

export default App;

class Dashboard extends React.Component {
  tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  render() {
    return (
      <View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    )
  }
      renderTab = ({ tab, isActive }) => {
      return (
        <FullTab
          key={tab.key}
          isActive={isActive}
          label={tab.label}
          renderIcon={this.renderIcon}
        />
      )
    }

    renderIcon = ({ isActive }) => {
      return <View />
    }
}


/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Compoent{
  static navigationOptions ={
    title: 'Home',
  };
  render(){
    const {nvaigate}=this.props.navigation;
    return(
      <View style={styles.container}>
        <Text
          onPress={ ()=> navigate('Home')}>Navigate to Home
        </Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Compoent{
  static navigationOptions ={
    title: 'Home',
  };
  render(){
    const {nvaigate}=this.props.navigation;
    return(
      <View style={styles.container}>
        <Text
          onPress={ ()=> navigate('Profile')}>Navigate to Profile
        </Text>
      </View>
    );
  }
}
const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen},
  Profile: { screen: ProfileScreen},
  },{
    navigationOptions: {
      headerStyle: {
        marginTop:      Expo.Constants.statusBarHeight
    }
  }
});

export default class App extends React.Component{
  render() {
    return <NavigationApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'centre',
    justifyContent: 'centre',
  },
});
 */





