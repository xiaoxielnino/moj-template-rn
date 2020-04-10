/* eslint-disable react/prop-types */
import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { connectByModule } from '../../redux/store';

@connectByModule('home', state => ({
    saidWords: state.home.saidWords
}))
class Home extends React.PureComponent {
    render() {
        const {
            // eslint-disable-next-line react/prop-types
            saidWords
        } = this.props;
        return (
            <View>
                <Text>home</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('detail')}
                    title="go to detail" />
                <Button
                    onPress={() => this.props.actions.say('hello')}
                    title="dispatch action" />
                <Text>{saidWords}</Text>
            </View>
        );
    }
}
console.log(Home, 111);

export default Home;
