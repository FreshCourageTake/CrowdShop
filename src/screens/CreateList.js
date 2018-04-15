import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import t from 'tcomb-form-native'
const Form = t.form.Form;

import {
    View
} from 'react-native'
import {
    Button
} from 'react-native-elements'

import {ActionCreators} from "../actions/index";

const options = {
    fields: {
        listName: {
            label: 'Shopping List Name'
        },
        store: {
            label: 'Where will you be shopping?'
        }
    }
};

let Store = t.enums({});

let List = t.struct({
    listName: t.String,
    store: Store
});

class CreateList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: t.enums({}),
        };
    }

    componentDidMount() {
        this.props.fetchStores()
            .then(() => {
                if (this.props.stores && this.props.stores.data) {
                    let newOptions = this.props.stores.data.reduce((opts, store) => {
                        opts[store._id] = store.name;
                        return opts;
                    }, {});

                    this.setState({
                        stores: t.enums(newOptions)
                    });
                }
            })
    }

    handlePressSubmit() {
        let formData = this.refs.newListForm.getValue();
        if (formData) {
            this.props.navigation.state.params.createList(formData.listName, formData.store);
            this.props.navigation.goBack(null);
        }
    }

    handlePressCancel() {
        this.props.navigation.goBack(null);
    }

    getForm() {
        return (
            t.struct({
                listName: t.String,
                store: this.state.stores
            })
        )
    }

    render() {
        return (
            <View>
                <Form
                    type={this.getForm()}
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

const mapStateToProps = state => {
    return {
        stores: state.stores
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);