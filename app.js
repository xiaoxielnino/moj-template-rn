import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/container/home';
import Detail from './src/container/detail';

const Stack = createStackNavigator();

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.PureComponent {
    render() {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="home"
                                component={Home} />
                            <Stack.Screen name="detail" component={Detail} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </SafeAreaProvider>
        );
    }
}

export default App;
