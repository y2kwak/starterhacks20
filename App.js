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
                Groceries
                </Text>
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
          </>

        );
    }
}

export default App;
