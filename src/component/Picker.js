import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerTester from './Calender';
class Picker extends Component {
  state = {
    visible: false,
    text: this.props.text ? this.props.text : ''
  };

  render() {
    const { date, data, onPress } = this.props;
    let { width, height } = Dimensions.get('window');
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <TouchableOpacity onPress={() => this.setState({ visible: true })} style={{ left: -10, top: -50 }}>
          <LinearGradient
            colors={['#3b5998', '#192f6a']}
            style={{
              width: width * 0.3,
              height: 85,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 100
            }}
          >
            <Text style={{ fontSize: 15, color: 'white' }}>{this.state.text}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Modal animationType="fade" visible={this.state.visible} transparent onRequestClose={() => console.log('a')}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }} />
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              height: 280,
              width: width - 40,
              top: (height - 170) / 2,
              borderRadius: 20,
              marginHorizontal: 25,
              paddingVertical: 20
            }}
          >
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onPress(item), this.setState({ visible: false, text: item.Name });
                  }}
                >
                  <Text style={{ textAlign: 'center', fontSize: 18, paddingVertical: 6 }}> {item.Name} </Text>
                </TouchableOpacity>
              )}
              disableVirtualization
              contentContainerStyle={{ paddingTop: 0 }}
              style={{ height: 160, maxHeight: 160 }}
              removeClippedSubviews
              disableVirtualization
              scrollEnabled
            />
            <TouchableOpacity
              onPress={() => this.setState({ visible: false })}
              style={{
                backgroundColor: '#1abc9c',
                width: width / 3,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
              }}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>İptal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {date && <DateTimePickerTester />}
      </View>
    );
  }
}

export default Picker;
