/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

if (Text.defaultProp) {
    Text.defaultProp.allowFontScaling = false;
} else {
    Text.defaultProp = {};
    Text.defaultProp.allowFontScaling = false;
}

if (TextInput.defaultProp) {
    TextInput.defaultProp.allowFontScaling = false;
} else {
    TextInput.defaultProp = {};
    TextInput.defaultProp.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
