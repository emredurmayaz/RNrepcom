import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert } from 'react-native';
import PickerRn from '../component/PickerRn.js';
import { STORAGE_KEYS, getItem } from '../services/StorageService.js';
import { apiPath } from '../api/TokenService.js';

const faults = require('../mockdata/faults.json');
const deneme = require('../mockdata/deneme.json');

class ArizaBildir extends Component {
  state = {
    getMachine: [],
    getFaults: [],
    selectedMachine: '1',
    selectedFault: '1',
    selectedPriority: '1',
    personnelId: ''
  };
  async componentDidMount() {
    const personnelId = await getItem(STORAGE_KEYS.PERSONNEL_ID);
    await this.setState({ personnelId });

    fetch(apiPath + '/api/machine/get', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ getMachine: data }));
    fetch(apiPath + '/api/faultType/get', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ getFaults: data }));
  }

  onClick = async () => {
    const { selectedMachine, selectedFault, selectedPriority, personnelId } = this.state;

    const body = {
      priority: parseInt(selectedPriority),
      machineId: parseInt(selectedMachine),
      faultTypeId: parseInt(selectedFault),
      personnelId: parseInt(personnelId)
    };

    const res = await fetch(apiPath + '/api/fault/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).catch(err => alert(err));

    if (res.status === 200) {
      Alert.alert('Başarılı', 'Arıza Gönderilmiştir', [{ text: 'OK', onPress: () => this.props.navigation.navigate('Home') }], {
        cancelable: false
      });
    } else {
      alert('Hata oluştu');
    }
  };

  render() {
    return (
      <View style={{ margin: 20, backgroundColor: 'rgba(218, 255, 239, 1)', borderRadius: 10 }}>
        <View style={{ elevation: 1, paddingVertical: 30, borderWidth: 0.3, borderRadius: 10 }}>
          <PickerRn data={this.state.getMachine} onChangeItem={id => this.setState({ selectedMachine: id })} />
          <PickerRn data={this.state.getFaults} onChangeItem={id => this.setState({ selectedFault: id })} />
          {/* <PickerRn data={faults} /> */}
          <PickerRn data={deneme} onChangeItem={id => this.setState({ selectedPriority: id })} />
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
            onPress={() => this.onClick()}
          >
            <Text style={{ color: 'white' }}>Arıza Bildir</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ArizaBildir;
