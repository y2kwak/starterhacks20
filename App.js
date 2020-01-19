import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

class Food extends React.Component{
    render(){
        return(
               <View key={this.props.keyval} style={styles.item}>
                
                <Text style={styles.foodName}>{this.props.val.name}</Text>
                <Text style={styles.date}>{this.props.val.date}</Text>
               
               <TouchableOpacity onPress={this.props.deleteMethod} style={styles.foodDelete}>
                <Text style={styles.deleteText}>-</Text>
               </TouchableOpacity>
               
               </View>
        );
    }
}

export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            foodName: '',
            foodArray: [],
            
        }
    }
    
    render(){
        
        let foods = this.state.foodArray.map((val, key) => {
            return <Food key={key} keyval={key} val = {val}
                    deleteMethod={ () => this.deleteFood(key) } />
        });
    
    return(
        <View style = {styles.container}>
           <View style={styles.header}>
             <Text>{"\n"}</Text>
            <Text style={styles.headerText}> - ITEMS - </Text>
           </View>
           
            <ScrollView style={styles.scrollContainer}>
                {foods}
            </ScrollView>
           
           <View style={styles.footer}>
            
            <TextInput
                style={styles.textInput}
                onChangeText={(foodName) => this.setState({foodName})}
                value={this.state.foodName}
                placeholder='> Enter new groceries!'
                placeholderTextColor='white'>
            </TextInput>
           
           </View>
           <TouchableOpacity onPress={this.addFood.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
           </TouchableOpacity>
           
        </View>
        );
    }
    
    addFood() {
        
        if (this.state.foodName) {
            
            var d = new Date();
            this.state.foodArray.push({
               'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate(),
                'name': this.state.foodName
            });
            this.setState({foodArray: this.state.foodArray})
            this.setState({foodName: '' });
        }
    }
    
    deleteFood(key) {
        this.state.foodArray.splice(key, 1);
        this.setState({foodArray: this.state.foodArray})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        backgroundColor: '#663399',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText:{
        color: '#fffafa',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 26,
    },
    scrollContainer:{
        flex: 1,
        marginBottom: 100,
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        
    },
    textInput:{
        fontSize: 18,
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#663399',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    item:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    foodName: {
        fontSize: 25,
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    date:{
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor:'#E91E63',
    },
    foodDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    deleteText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
