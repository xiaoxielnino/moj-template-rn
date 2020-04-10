import React from 'react';
import {AppRegistry} from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './app';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => <App />);