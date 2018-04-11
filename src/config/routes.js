import { StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { HomePage } from '../screens'
import { ListItems } from '../screens'
import { CreateList } from '../screens'

const HomeStack = StackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: {
                header: () => null,
            }
        },
        CreateList: {
            screen: CreateList,
            navigationOptions: {
                header: () => null,
            }
        }
    },
    {
        cardStyle: { paddingTop: StatusBar.currentHeight },
        mode: 'modal',
    }
);

export default StackNavigator(
    {
        HomePage: HomeStack,
        ListItems: {
            screen: ListItems,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.title
            })
        },
    }
);