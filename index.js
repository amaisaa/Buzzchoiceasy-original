import { registerRootComponent } from 'expo';
import {name as appName} from './app.json';
import { AppRegistry } from 'react-native';
import MainNavigation from './src/MainNavigation/MainNavigation';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent('main', () => MainNavigation);
