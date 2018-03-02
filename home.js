import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Home extends Component{
    render(){
        return <View style = {styles.container}>
            <Text>点击跳转</Text>
        </View>
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        flex:1,
        justfyContent:'center',
        alignItems:'center'
    }
});

module.exports = Home;
