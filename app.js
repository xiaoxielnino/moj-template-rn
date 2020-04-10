import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// // import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { RouteConfig, InitConfig} from './src/routes';


const AppNavigator = createStackNavigator(RouteConfig, InitConfig());
const AppContainer = createAppContainer(AppNavigator);
// export default AppContainer;

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

export default App;