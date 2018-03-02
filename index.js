import React from 'react';
import { View, Text,AppRegistry,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabTopView from './TabTopView.js';
import Bills from './bills.js';

//AppRegistry.registerComponent('Demo', () => Apps);
//AppRegistry.registerComponent('Demo', () => TabTopView);

//var Example = require('./example_advanced.js');

AppRegistry.registerComponent('Demo', () => Bills);
//AppRegistry.registerComponent('Demo', () => Refresh);
//AppRegistry.registerComponent('Demo', () => FlatListDemo);