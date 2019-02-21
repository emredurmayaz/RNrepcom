import React, { Component } from 'react';
import { View, TouchableOpacity, Text,StyleSheet,TextInput,Dimensions } from "react-native";
import { setItem, STORAGE_KEYS } from '../services/StorageService';
import LinearGradient from 'react-native-linear-gradient';
import getToken  from '../api/TokenService';

const {width, height} = Dimensions.get('window')

class Login extends Component { 
       constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:""
         };
    }

   login = async () => {
     console.log('====================================');
     console.log(this.state.email);
     console.log('====================================');
      const res =  await getToken(this.state.email, this.state.password);
      console.log('====================================');
      console.log(res);
      console.log('====================================');
        // await setItem(STORAGE_KEYS.TOKEN,"6226-df1dsfsdf-sdf65dsf");
        // this.props.navigation.navigate("tabNav")
    }

    render() {
      console.log('====================================');
      console.log(this.state.email);
      console.log('====================================');
        return (
              <LinearGradient colors={['rgba(100, 182, 172, 1)','#34495e']} style={styles.linearGradient}>
                  <TextInput 
                    placeholder='e-mail' 
                    value={this.state.email} 
                    style={styles.inputStyle}
                    onChangeText={res => this.setState({email: res})}
                  />
                  <TextInput 
                    placeholder='Password' 
                    value={this.state.password} 
                    style={styles.inputStyle}
                    onChangeText={res => this.setState({password: res})}
                  />
                    <TouchableOpacity style={{backgroundColor:'#1abc9c',width:width-150,borderRadius:15,justifyContent:'center',alignItems:'center', marginTop:50}} onPress={()=>this.login()}>
                      <Text style={styles.buttonText}>LOG IN</Text>
                    </TouchableOpacity> 
               </LinearGradient>
        );
    }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'

  
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',       
  },
  inputStyle: {
    borderWidth:1,
    width:width-50,
    borderRadius:15,
    marginVertical:10,
    backgroundColor:'rgba(255,255,255,0.5)',
    paddingLeft:20,
    fontSize:18
  }
});

export default Login;