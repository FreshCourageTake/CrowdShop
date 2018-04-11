import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles';


export default class AdBox extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.adBox}>Ads go here</Text>
            </View>
        );
    }
}