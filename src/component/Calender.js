import React, { Component } from 'react';
import { Text, TouchableOpacity, View,Dimensions } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


const {width, height} = Dimensions.get('window')



export default class DateTimePickerTester extends Component {
    state = {
        text:"select date",
      isDateTimePickerVisible: false,
    };



    
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log(date.getDate());

    this.setState({
        text : date.getDate()+'/'+date.getMonth()+1+'/'+ date.getFullYear()
    }) 
    this._hideDateTimePicker();
  };
 
  render () {

    
    return (
      <View style = {{marginTop:10}} >
        <TouchableOpacity onPress={this._showDateTimePicker}
         style={{width:width*0.9,height:50, justifyContent:"center",alignItems:"center",alignSelf:"center", borderRadius: 24, backgroundColor:"#192f6a"}} >
          <Text  style = {{fontSize:25, color:"white" }}>{this.state.text}</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
 
}
