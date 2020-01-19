/*Example of Expandable ListView in React Native*/
import React, { Component } from 'react';
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
  TextInput,
  Button,
} from 'react-native';
//import basic react native components
 
class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 10,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }
 
  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}>
          <Text style={styles.headerText}>{this.props.item.category_name}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
           <>
              <Text style={styles.text}>
                {key}. {item.val}
              </Text>
              <View style={styles.separator} />
            </>
          ))}
        </View>
      </View>
    );
  }
}


export default class App extends Component {
  //Main View defined under this Class
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: CONTENT };
  }
 
  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
        : (array[placeindex]['isExpanded'] = false)
    );
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topHeading}>
            {"\n"}
            ITEMS
            </Text>
            <TouchableOpacity /*onPress={this.saveData}*/>
        <View style={[{ width: "25%", margin: 10, backgroundColor: "#8fbc8f" }]}>
            <Button onPress={this.saveData}
              title="ADD ITEM"
              color="#00008b"
            />
            </View>
        </TouchableOpacity>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.category_name}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
    saveData() {
        alert('Item added.');
    }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#F5FCFF',
  },
  topHeading: {
    textAlign: 'center',
    //paddingLeft: 30,
    fontSize: 50,
    fontFamily: 'Iowan Old Style'
  },
  header: {
    backgroundColor: '#6495ed',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
});
 
//Dummy content to show
//You can also use dynamic data by calling webservice
 CONTENT = [ //const was removed
  {
    isExpanded: false,
    category_name: 'Grapes',
    subcategory: [{ id: 1, val: '1 bunch' }, { id: 3, val: 'Sub Cat 3' }],
  },
  {
    isExpanded: false,
    category_name: 'Coconut',
    subcategory: [{ id: 4, val: '3' }, { id: 5, val: 'Sub Cat 5' }],
  },
  {
    isExpanded: false,
    category_name: 'Ground Beef',
    subcategory: [{ id: 7, val: 'Sub Cat 7' }, { id: 9, val: 'Sub Cat 9' }],
  },
  {
    isExpanded: false,
    category_name: 'Roasted Chicken',
    subcategory: [{ id: 10, val: 'Sub Cat 10' }, { id: 12, val: 'Sub Cat 2' }],
  },
  {
    isExpanded: false,
    category_name: 'Onions',
    subcategory: [{ id: 13, val: '5 onions' }, { id: 15, val: 'Sub Cat 5' }],
  },
  {
    isExpanded: false,
    category_name: 'Item 6',
    subcategory: [{ id: 17, val: 'Sub Cat 17' }, { id: 18, val: 'Sub Cat 8' }],
  },
  {
    isExpanded: false,
    category_name: 'Item 7',
    subcategory: [{ id: 20, val: 'Sub Cat 20' }],
  },
  {
    isExpanded: false,
    category_name: 'Item 8',
    subcategory: [{ id: 22, val: 'Sub Cat 22' }],
  },
  {
    isExpanded: false,
    category_name: 'Item 9',
    subcategory: [{ id: 26, val: 'Sub Cat 26' }, { id: 27, val: 'Sub Cat 7' }],
  },
  {
    isExpanded: false,
    category_name: 'Item 10',
    subcategory: [{ id: 28, val: 'Sub Cat 28' }, { id: 30, val: 'Sub Cat 0' }],
  },
  
];
