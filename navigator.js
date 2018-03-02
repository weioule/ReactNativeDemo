import React from 'react';
import { View, Text,AppRegistry,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'hello world',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's main"
        onPress={() =>
          navigate('HelloWorld')
        }
      />
    );
  }
}

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile')
        }
      />
    );
  }
}


 class HelloWorldScreen extends React.Component{
    static navigationOptions = {
        title:'啊啊啊啊啊啊啊啊啊',
    };
    render(){

        const { navigate } = this.props.navigation;
        return(
            <Button title = "hello"
            onPress = {()=>navigate('Main')}/>
        );
    }
 }

const Apps = StackNavigator({
  Main:{screen:MainScreen},
  Profile: {screen:ProfileScreen},
  HelloWorld:{screen:HelloWorldScreen},
});


AppRegistry.registerComponent('Demo', () => Apps);