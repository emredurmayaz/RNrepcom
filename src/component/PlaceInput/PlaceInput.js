import React, { Component } from 'react';
import {View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component{

    state =  { 
        placeName: ''
      };
      placeNameChangedHandler = val => {
        this.setState({
          placeName:val
        });  
      };

      
   placesubmitHandler =() => {
    if(this.state.placeName.trim() === ""){
      return;
    }
};

        

render() {
    return (
        <View style={styles.inputContainer}>        
        <TextInput 
      style={styles.placeInput}
      stye={styles.placeButton}
        placeholder = 'Awesome place'
        value = {this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
        style={styles.placeInput}
         />
         <Button 
          title="add" 
          style={styles.placeButton}
          onPress={() => this.props.onPlaceAdded(this.state.placeName)}/>
       
   </View>
    );
  
}
}
const styles = StyleSheet.create({

    inputContainer:{
        //flex: 1,
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      placeInput:{
        width: "70%"
      },
      placeButton:{
        
        width: "30%"
      },

});

export default PlaceInput;
