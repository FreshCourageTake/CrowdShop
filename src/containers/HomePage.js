import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import t from 'tcomb-form-native'
const Form = t.form.Form;
import {
    Modal,
    View
} from 'react-native'
import {
    Button
} from 'react-native-elements'

import { ActionCreators } from '../actions/index'
import ShoppingLists from '../components/ShoppingLists'
import AdBox from '../components/AdBox'

const Store = t.enums({
    walmart: 'Walmart',
    target: 'Target',
    dollargeneral: 'Dollar General',
    smiths: 'Smiths'
});

const options = {
    fields: {
        listName: {
            label: 'Shopping List Name'
        },
        storeName: {
            label: 'Where will you be shopping?'
        }
    }
};

const List = t.struct({
    listName: t.String,
    storeName: Store
});

class HomePage extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        }
    }

    toggleModalVisibility() {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        });
    }

    createList() {
        let formData = this.refs.newListForm.getValue();
        if (formData) {
            this.props.createShoppingList(formData.listName, formData.storeName);
            this.toggleModalVisibility();
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View>
                        <Form
                            type={List}
                            ref='newListForm'
                            options={options}
                        />
                        <Button
                            raised
                            title='Create'
                            backgroundColor='green'
                            onPress={() => this.createList()}
                        />
                        <Button
                            raised
                            title='Cancel'
                            backgroundColor='red'
                            onPress={() => this.toggleModalVisibility()}
                        />
                    </View>
                </Modal>

                <View style={{flex: 10}}>
                    <ShoppingLists lists={this.props.lists} />
                </View>
                <View style={{flex: 1}}>
                    <Button
                        raised
                        title='Create a list!'
                        backgroundColor='green'
                        onPress={() => this.toggleModalVisibility()}
                    />
                </View>
                <View style={{flex: 1}}>
                    <AdBox />
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