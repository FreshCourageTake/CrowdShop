import React, { Component } from 'react'
import t from 'tcomb-form-native'
const Form = t.form.Form;
import {
    View
} from 'react-native'
import {
    Button
} from 'react-native-elements'

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

export default class CreateList extends Component {

    handlePressSubmit() {
        let formData = this.refs.newListForm.getValue();
        if (formData) {
            this.props.navigation.state.params.createList(formData.listName, formData.storeName);
            this.props.navigation.goBack(null);
        }
    }

    handlePressCancel() {
        this.props.navigation.goBack(null);
    }

    render() {
        return (
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
                    onPress={() => this.handlePressSubmit()}
                />
                <Button
                    raised
                    title='Cancel'
                    backgroundColor='red'
                    onPress={() => this.handlePressCancel()}
                />
            </View>
        )
    }
}