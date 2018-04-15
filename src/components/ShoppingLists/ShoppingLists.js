import React, { Component } from 'react';
import {
    ListView,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import {
    List,
    ListItem
} from 'react-native-elements';
import styles from './styles';


export default class ShoppingLists extends Component<{}> {

    _renderRow = (rowData, sectionId) => {
        return (
            <TouchableHighlight>
                <ListItem
                    key={sectionId}
                    title={rowData.listName}
                    subtitle={
                        <View style={styles.subtitle}>
                            <Text style={styles.storeName}>{rowData.storeName}</Text>
                            <Text>Estimated Total: ${rowData.estTotal}</Text>
                        </View>
                    }
                    underlayColor='#dddddd'
                    onPress={() => this._showListItems(sectionId, rowData.listName)}
                />
            </TouchableHighlight>
        );
    };

    _showListItems = (sectionId, title) => {
        this.props.navigation.navigate(
            'ListItems', {id: sectionId, title: title}
        );
    };

    render() {
        const emptyList = (
            <View style={styles.container}>
                <Text style={styles.emptyListMessage}>Ready to start saving?</Text>
            </View>
        );

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const populatedList = (
            <View style={styles.listContainer}>
                <List>
                    <ListView
                        renderRow={this._renderRow}
                        dataSource={ds.cloneWithRows(this.props.lists.data)}
                    />
                </List>
            </View>
        );


        return (
            <View>
                {this.props.lists.data.length > 0 ? populatedList : emptyList}
            </View>
        );
    }
}