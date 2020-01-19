import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Modal,
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
            modalVisible: false,
            
        }
    }
    
    setModalVisible(visible) {
      this.setState({modalVisible: visible});

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
            <Text style={styles.headerText}> Apples&Bananas </Text>
           </View>
           
            <ScrollView style={styles.scrollContainer}>
                {foods}
            </ScrollView>
           
           <Modal animationType="slide" visible={this.state.modalVisible} transparent={true}>
            <TouchableOpacity disabled={true} touchSoundDisabled={true} style={styles.box}>
            
           <Text style={styles.calText}>calendar</Text>
            
           </TouchableOpacity>
        </Modal>
           
           <View style={styles.inputBox}>
            
            <TextInput
                style={styles.textInput}
                onChangeText={(foodName) => this.setState({foodName})}
                value={this.state.foodName}
                placeholder='> Enter a new food item!'
                placeholderTextColor='white'>
            </TextInput>
           
           </View>
           <TouchableOpacity onPress={this.addFood.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
           </TouchableOpacity>
           
           <TouchableOpacity style={styles.button}>
           </TouchableOpacity>
           
           <TouchableOpacity disabled={true} touchSoundDisabled={true} style={styles.navigateS1}>
           <Text style={styles.addButtonText}>-ITEMS-</Text>
           </TouchableOpacity>
           
           <TouchableOpacity onPressIn={()=>this.setModalVisible(true)} onPressOut={() => this.setModalVisible(false)} style={styles.navigateS2}>
           <Text style={styles.addButtonText}>- CAL -</Text>
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
        marginTop: 105,
        marginBottom: 115,
    },
    inputBox:{
        position: 'absolute',
        top: 155,
        left: 20,
        right: 70,
        zIndex: 10,
        borderRadius: 50,
        //borderWidth: 10,
        backgroundColor: '#252525',
        borderColor:'#ededed',
        
    },
    textInput:{
        fontSize: 18,
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        //borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    button: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        top: 140,
        backgroundColor: '#664399',
        width: 90,
        height: 90,
        borderRadius: 50,
        elevation: 8,
    },
    addButton: {
        position: 'absolute',
        zIndex: 12,
        right: 20,
        top: 140,
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
        paddingLeft: 5,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    date:{
        paddingLeft: 5,
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
        right: 20,
    },
    deleteText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    navigateS1: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        width: 183,
        height: 90,
        zIndex: 10,
        borderRadius: 20,
        backgroundColor: '#9966cc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigateS2: {
        position: 'absolute',
        bottom: 20,
        width: 183,
        height: 90,
        right: 15,
        zIndex: 10,
        borderRadius: 20,
        backgroundColor: '#663399',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton1: {
        position: 'absolute',
        zIndex: 9,
        right: 50,
        top: 200,
        backgroundColor: '#663399',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    box: {
        position: 'absolute',
        width: 300,
        height: 300,
        backgroundColor:'#9966cc',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        top: 300,
        borderWidth: 5,
        borderColor: '#ddd',
    },
    calText:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 10,
    },
});
