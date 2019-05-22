import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { apiPath } from '../api/TokenService';
import { getItem, STORAGE_KEYS } from '../services/StorageService';

class FaultsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async deleteFault() {
    const Id = await getItem(STORAGE_KEYS.PERSONNEL_ID);

    const body = {
      id: this.props.navigation.state.params.fault.id,
      personnelId: Id
    };
    const res = await fetch(apiPath + '/api/fault/delete', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
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
        <View style={{ flexDirection: 'row', padding: 30, borderRadius: 10 }}>
          <View style={{ display: 'flex', borderRightWidth: 3, borderRightColor: '#1abc9c' }}>
            <Text style={styles.leftText}>Arıza Kodu</Text>
            <Text style={styles.leftText}>Makine</Text>
            <Text style={styles.leftText}>Personel</Text>
            <Text style={styles.leftText}>Öncelik</Text>
            <Text style={styles.leftText}>Tarih</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.rightText}>{fault.faultType.name}</Text>
            <Text style={styles.rightText}>{fault.machine.name}</Text>
            <Text style={styles.rightText}>{fault.personnel.name}</Text>
            <Text style={styles.rightText}>{fault.priority}</Text>
            <Text style={styles.rightText}>{fault.date}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 150,
            height: 40,
            marginVertical: 20,
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
    );
  }
}

export default FaultsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  leftText: {
    marginVertical: 6,
    fontSize: 16,
    fontWeight: '400',
    borderBottomWidth: 3,
    borderBottomColor: '#1abc9c',
    paddingRight: 20
  },
  rightText: {
    marginVertical: 6,
    fontSize: 16,
    fontWeight: '500',
    borderBottomWidth: 3,
    borderBottomColor: '#1abc9c',
    paddingLeft: 30
  }
});
