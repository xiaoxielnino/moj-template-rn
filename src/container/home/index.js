import React from 'react';
import { connect } from 'react-redux';
import { connectByModule } from '../../redux/store';
import {
    View,
    Text,
    Button
} from 'react-native';

@connectByModule('home', state => ({
    saidWords: state.home.saidWords
}))
class Home extends React.PureComponent {
    render() {
        const {
            saidWords
        } = this.props;
        return <View>
            <Text>home</Text>
            <Button
                onPress={() => this.props.navigation.navigate('detail')}
                title="go to detail"
            />
            <Button
                onPress={() => this.props.actions.say('hello')}
                title="dispatch action"
            ></Button>
            <Text>{saidWords}</Text>
        </View>
    }
}
console.log(Home, 111)

export default Home;
