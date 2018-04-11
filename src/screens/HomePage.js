import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
    View
} from 'react-native'
import {
    Button
} from 'react-native-elements'

import { ActionCreators } from '../actions/index'
import ShoppingLists from '../components/ShoppingLists'
import AdBox from '../components/AdBox'

class HomePage extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    handlePressCreateList() {
        this.props.navigation.navigate('CreateList', { createList: (listName, storeName) => this.props.createShoppingList(listName, storeName) });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <AdBox />
                </View>
                <View style={{flex: 10}}>
                    <ShoppingLists lists={this.props.lists} navigation={this.props.navigation}/>
                </View>
                <View style={{flex: 1}}>
                    <Button
                        raised
                        title='Create a list!'
                        backgroundColor='green'
                        onPress={() => this.handlePressCreateList()}
                    />
                </View>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);