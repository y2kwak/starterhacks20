import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

class Note extends React.Component{
    render(){
        return(
               <View key={this.props.keyval} style={styles.note}>
                
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
               
               <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>-</Text>
               </TouchableOpacity>
               
               </View>
        );
    }
}

export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            noteText: '',
            noteArray: [],
            
        }
    }
    
    render(){
        
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val = {val}
                    deleteMethod={ () => this.deleteNote(key) } />
        });
    
    return(
        <View style = {styles.container}>
           <View style={styles.header}>
             <Text>{"\n"}</Text>
            <Text style={styles.headerText}> - ITEMS - </Text>
           </View>
           
            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>
           
           <View style={styles.footer}>
            
            <TextInput
                style={styles.textInput}
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                placeholder='> Enter new groceries!'
                placeholderTextColor='white'>
            </TextInput>
           
           </View>
           <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
           </TouchableOpacity>
           
        </View>
        );
    }
    
    addNote() {
        
        if (this.state.noteText) {
            
            var d = new Date();
            this.state.noteArray.push({
               'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate(),
                'note': this.state.noteText
            });
            this.setState({noteArray: this.state.noteArray})
            this.setState({noteText: '' });
        }
    }
    
    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
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
        fontSize: 18,
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
        fontSize: 24,
    },
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    },
});
