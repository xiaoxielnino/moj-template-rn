import React from 'react';

import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp } from '@react-navigation/web';

// // import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { RouteConfig } from './src/routes';


const AppNavigator = createSwitchNavigator(RouteConfig);
const AppContainer = createBrowserApp(AppNavigator);

// export default AppContainer;

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
                {/* <NavigationContainer>
                    <Stack.Navigator name="home" component={Home} />
                </NavigationContainer> */}
            </Provider>
        )
    }
}

export default App;