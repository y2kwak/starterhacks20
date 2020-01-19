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

import DatePicker from 'react-native-datepicker'

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

class App extends Component {
    state = {
        date: {
          '2020-01-16': {selected: true, marked: true, selectedColor: 'skyblue'},
          '2020-02-17': {marked: true},
          '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
          '2012-05-19': {disabled: true, disableTouchEvent: true}
        },
        calendarDate: "2020-01-19"
    }
    
    render() {
        const { date } = this.state
        
        return (
          <>
                <View style={{alignItems: "center", width:425, height: 125, backgroundColor: '#663399'}}>
                    <Text style={{fontSize: 30, color:'white'}}>
                        {"\n"}
                        {"\n"}
                        Calendar
                    </Text>
                </View>
                <Text>
                {"\n"}
                </Text>
                <Calendar
                // Collection of dates that have to be marked. Default = {}
                markedDates={date}
                 />
                 <View style={{alignItems: "center"}}>
                <Text>
                {"\n"}
                </Text>
                <DatePicker
                  style={{width: 150}}
                  date={this.state.calendarDate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {this.setState({calendarDate: date})}}
                />
                </View>
                <View style={{flex:5, width:425, height: 125}}>
                <Button
                containerStyle={{}}
                   title="Add Item"
                   onPress={() => {
                    console.log(this.state.calendarDate)
                   this.setState({
                    date: {
                        '2020-01-16': {selected: true, marked: true, selectedColor: 'yellow'},
                        calendarDate : {marked: true},
                        '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                        '2012-05-19': {disabled: true, disableTouchEvent: true}
                          }
                        })
                   }}
                />
                <Text style={{fontSize: 20}}>
                    {"\n"}
                    {" "}Expired: Tofu, Tomato, Garlic
                    {"\n"}
                </Text>
                <Text style={{fontSize: 20}}>
                    {" "}
                    Expires in a week: Eggs, Milk
                    {"\n"}
                </Text>
                <Text style={{fontSize: 20}}>
                    Expires in 10 Days: Bread
                    {" "}
                </Text>
                </View>
                <View style={{flex:3, alignItems: "center", width:425, height: 100, backgroundColor: '#663399'}}>
                    <Text style={{fontSize: 30, color:'white'}}>
                        {"\n"}
                        {"\n"}
                    </Text>
                </View>
                
           </>
        );
    }
}

export default App;
