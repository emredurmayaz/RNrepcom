import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
const deneme = require('../mockdata/deneme.json');

const { dWidth, dHeight } = Dimensions.get('window');

const Card = ({ data, onPress }) => {
  console.log(data);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ height: 200, width: dWidth - 50, margin: 10, elevation: 5, flexDirection: 'row', borderRadius: 20, overflow: 'hidden' }}
    >
      <View style={{ flex: 1.5, backgroundColor: '#34495e', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.leftText}>Arıza Kodu:</Text>
        <Text style={styles.leftText}>Makine:</Text>
        <Text style={styles.leftText}>Personel:</Text>
        <Text style={styles.leftText}>Öncelik:</Text>
        <Text style={styles.leftText}>Tarih:</Text>
      </View>

      <View
        style={{
          flex: 3,
          backgroundColor: 'rgba(100, 182, 172, 1)',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingHorizontal: 16
        }}
      >
        <Text style={styles.rightText}>{data && data.faultType && data.faultType.name}</Text>
        <Text style={styles.rightText}>{data && data.machine && data.machine.name}</Text>
        <Text style={styles.rightText}>{data && data.personnel && data.personnel.name}</Text>
        <Text style={styles.rightText}>{data && data.priority && deneme[data.priority - 1] && deneme[data.priority - 1].name}</Text>
        <Text style={styles.rightText}>{data && data.date && data.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  leftText: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.5)'
  },
  rightText: {
    marginVertical: 4,
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.5)'
  }
});
