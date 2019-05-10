import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import { apiPath } from '../api/TokenService';

class FaultsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async deleteFault() {
    const body = { id: this.props.navigation.state.params.fault.id };
    const res = await fetch(apiPath + '/api/fault/delete', {
      method: 'PUT',
      body: JSON.stringify(body)
    }).catch(err => alert(err));

    if (res.status === 200) {
      Alert.alert('Başarılı', 'Arıza Onarılmıştır!', [{ text: 'OK', onPress: () => this.props.navigation.navigate('Home') }], {
        cancelable: false
      });
    } else {
      alert('Hata oluştu');
    }
  }
  //this.props.navigation.state.params.fault.id;

  render() {
    const fault = this.props.navigation.state.params.fault;
    console.log(fault);
    return (
      <View style={{ margin: 20, backgroundColor: 'rgba(218, 255, 239, 1)', borderRadius: 10 }}>
        <View style={{ elevation: 1, paddingVertical: 30, borderWidth: 0.3, borderRadius: 10 }}>
          <Text>{fault.faultType.name}</Text>
          <Text>{fault.machine.name}</Text>
          <Text>{fault.personnel.name}</Text>
          <Text>{fault.priority}</Text>
          <Text>{fault.date}</Text>
          <TouchableOpacity
            style={{
              width: 150,
              height: 40,
              marginTop: 30,
              borderRadius: 16,
              backgroundColor: '#1abc9c',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            }}
            onPress={() => this.deleteFault()}
          >
            <Text style={{ color: 'white' }}>Arıza Onar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FaultsDetail;
