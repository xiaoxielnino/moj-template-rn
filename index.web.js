import { AppRegistry } from 'react-native';
import ReactDom from 'react-dom';
import App from './app.web';

AppRegistry.registerComponent('web', () => App);

const container = document.getElementById('app');

if (module.hot) {
    ReactDom.unmountComponentAtNode(container);
    module.hot.accept();
}
AppRegistry.runApplication('web', {
    rootTag: container
});
