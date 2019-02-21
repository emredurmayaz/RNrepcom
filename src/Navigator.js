import React from 'react';
import { Platform, Text } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer ,
    createStackNavigator,
} from 'react-navigation';


import Home from '../src/containers/Home';
import ArizaBildir from './containers/ArizaBildir';
import FaultsDetail from '../src/containers/FaultsDetail';
import Login from './containers/Login';



const stackNav = createStackNavigator({
    FaultsDetail : {
        screen: FaultsDetail
    }
},{
    headerMode:"screen",
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#rgba(192, 253, 251, 1)',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle:"Arıza Onarım",
        headerTitleStyle: {
          alignSelf: (Platform.OS === 'android') ? 'flex-end' : 'center'
       }   
      },
})

const dd = createStackNavigator({
    ArizaBildir : {
        screen: ArizaBildir,
    }
},{
    headerMode:"screen",
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'rgba(192, 253, 251, 1)',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle:"cc"

      },
})

const tabNav = createBottomTabNavigator({
    
    Home: {
      screen: createStackNavigator({
        Home : {
            screen: Home,
            defaultNavigationOptions :{
            }
        }
    },{ 
        headerMode:"screen",
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: 'rgba(192, 253, 251, 1)',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle:"Bekleyen Arızalar",
            headerTitleStyle: {
                alignSelf: (Platform.OS === 'android') ? 'flex-end' : 'center'
             }
               },
    }), navigationOptions: {
      
      title: "Ana Ekran",
      tabBarOptions: {
        activeTintColor: 'black',
        labelStyle: {
          fontSize: 25,
        },
        style: {  
          backgroundColor: 'rgba(192, 253, 251, 1)',
        },
      }
  }
      },
    ArizaBildir : {
        screen: createStackNavigator({
            ArizaBildir : {
                screen: ArizaBildir
            }
        },{
            headerMode:"screen",
            defaultNavigationOptions: {
                headerStyle: {
                  backgroundColor: 'rgba(192, 253, 251, 1)',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
              },
                headerTitle:"Arıza Bildirim",
                
                headerTitleStyle: {
                    alignSelf: (Platform.OS === 'android') ? 'flex-end' : 'center'
                 } 
                
              },
        }),
              navigationOptions: {
            
                title: "Arıza Bildir",
                tabBarOptions: {
                  activeTintColor: 'black',
                  labelStyle: {
                    fontSize: 25,
                  },
                  style: {  
                    backgroundColor: 'rgba(192, 253, 251, 1)',
                  },
          }
        }

    }
});

export const createRootNavigator=(signedIn)=>(
  createAppContainer(createStackNavigator({
  
    tabNav: {
        screen: tabNav,
    },
    stackNav: {
        screen: stackNav
    },
    Login:{
      screen: Login
    }
  }, {
    initialRouteName: signedIn ? "tabNav" : "Login",
    headerMode:"none"
  }))
)