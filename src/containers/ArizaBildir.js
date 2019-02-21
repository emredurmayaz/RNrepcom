import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import PickerRn from '../component/PickerRn.js';

const faults = require('../mockdata/faults.json');
const deneme = require('../mockdata/deneme.json');


class ArizaBildir extends Component {
    render() {      
        return (
          <View style={{margin: 20,backgroundColor:'rgba(218, 255, 239, 1)',borderRadius:10}}>
            <View style={{ elevation:1, paddingVertical: 30, borderWidth: 0.3 , borderRadius: 10}}>
              <PickerRn data={faults}/>
              <PickerRn data={deneme}/>
              <PickerRn data={faults}/>
              <PickerRn data={deneme}/>
              <PickerRn data={faults}/>
              <TouchableOpacity style={{width:150,height: 40,marginTop: 30, borderRadius: 16,  backgroundColor:"#1abc9c", justifyContent:"center" ,alignItems:"center", alignSelf: "center"}}>
                <Text style={{color:"white"}}>Arıza Bildir</Text>
              </TouchableOpacity>
            </View>
          </View>
    );  
  }
}



// <Picker
// selectedValue={this.state.selectedItem}
// style={{height: 50, width: 400}}
// onValueChange={(itemValue) =>
//     console.log(itemValue)
//   }>
//     { faults.map(item=>{
//         <View>
//     <Picker.Item label={"item.id"} value="default" />
//     </View>
//     })}


// </Picker>




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       flexDirection: 'column'
//     },
//     text: {
//         fontSize: 20,
//         alignSelf: 'center',
//      }
//   });

export default ArizaBildir;