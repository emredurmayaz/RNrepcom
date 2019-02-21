

import React, {Component} from "react";
import {Platform, StyleSheet, View,ScrollView,TextInput} from "react-native";

import { createRootNavigator } from './src/Navigator';
import {getItem, STORAGE_KEYS, removeItem } from "./src/services/StorageService";

export default class App extends Component {
 state = {
   places: [],
   obj:{},
   object:{},
   isReady:false
 }; 

 async componentDidMount(){
  //  await removeItem(STORAGE_KEYS.TOKEN);
    const token = getItem(STORAGE_KEYS.TOKEN).then(res => {
       res ? this.setState({signedIn:true, isReady:true}):this.setState({signedIn:false, isReady:true})
    }).catch(err=>{
      this.setState({signedIn:false,isReady:true})
    });

 }

  render() {
     const Main = createRootNavigator(this.state.signedIn)

     if(!this.state.isReady){
        return null;
     }

    return <Main/>;
   }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

    
