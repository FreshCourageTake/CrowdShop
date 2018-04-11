import React, { Component } from 'react';
import {
    Button
} from 'react-native-elements';
import styles from './styles'

export default class AddListButton extends Component<{}> {

    render() {
        return (
                <Button
                    raised
                    title='Create List'
                    backgroundColor='green'
                    onPress={this.props.action}
                />
        );
    }
}