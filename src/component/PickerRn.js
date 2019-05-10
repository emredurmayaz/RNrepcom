import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class PickerRn extends Component {
  state = {
    selectedItem: ''
  };

  render() {
    const { data, onChangeItem } = this.props;
    return (
      <View style={{ borderBottomWidth: 1, width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
        <Picker
          selectedValue={this.state.selectedItem}
          style={{ height: 50, width: '100%' }}
          onValueChange={itemValue => {
            this.setState({ selectedItem: itemValue });
            onChangeItem(itemValue);
          }}
        >
          {data.map(item => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          ))}
        </Picker>
      </View>
    );
  }
}

export default PickerRn;
