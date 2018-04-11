import React, { Component } from 'react'
import { View } from 'react-native';
import { Provider } from 'react-redux'

import store from './src/store'
import { HomePage } from './src/containers'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <HomePage />
                </View>
            </Provider>
        );
    }
}