import {
  AppRegistry,
} from 'react-native';

import Home from './components/home/home';
import Scan from './components/scan/scan';

import {StackNavigator} from 'react-navigation';

console.log('home:', Home);

const amazin= StackNavigator({
  Home: {screen: Home},
  Scan: {screen: Scan},
})

AppRegistry.registerComponent('amazin', () => amazin);
