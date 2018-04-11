import React, { Component } from 'react';
import {
    FlatList,
    ListView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import {
    Button,
    List,
    ListItem
} from 'react-native-elements';
import styles from './styles';


export default class ListItems extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
    });

    render() {
        console.log(this.props.navigation.state.params.name);
        return (
            <View>
                <Text>This is a list!</Text>
            </View>
        );
    }
}