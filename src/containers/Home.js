import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

import Card from '../component/Card';
import { apiPath } from '../api/TokenService';
import { NavigationEvents } from 'react-navigation';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Log out</Text>
        </TouchableOpacity>
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      faults: [],
      isReady: false
    };
  }

  async componentDidMount() {
    const res = await fetch(apiPath + '/api/fault/get', {
      method: 'GET'
    });

    if (res.status === 200) {
      const data = await res.json();
      this.setState({ faults: data }, () => this.setState({ isReady: true }));
    }
  }

  render() {
    return (
      <View style>
        <NavigationEvents
          onWillFocus={payload => this.componentDidMount()}
          //   onDidFocus={payload => console.log('did focus', payload)}
        />
        <ScrollView>
          {this.state.isReady && this.state.faults.length <= 0 ? (
            <Text style={{ fontSize: 25, color: 'black' }}>Arıza Bulunmamaktadır</Text>
          ) : null}
          {this.state.faults.map((item, i) => (
            <Card key={i} data={item} onPress={() => this.props.navigation.navigate('FaultsDetail', { fault: item })} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
