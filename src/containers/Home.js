import React, { Component } from 'react';
import {View, ScrollView} from 'react-native';

import Card from '../component/Card';
import { setItem } from '../services/StorageService';
import { getAll } from '../api/HttpService';

const faults = require("../mockdata/faults.json")

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    async componentDidMount(){
        await setItem("emre","emre1");
        // const res = await getAll('/users/');
        // console.log('====================================');
        // console.log(res);
        // console.log('====================================');
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {
                    faults.map((item,i) => (
                            <Card key={i} data={item} onPress={()=> this.props.navigation.navigate('FaultsDetail')}/>  
                        )
                    )
                    }
                </ScrollView>
            </View>
        );
    }
}

export default Home;