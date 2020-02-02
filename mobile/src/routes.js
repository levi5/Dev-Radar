import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen:Main,
            navigationOptions:{
                title:'Devs'
            },
        },
        Profile:{
            screen:Profile,
            navigationOptions:{
                title:'Perfil Do Github'
            },
        },
    },{
        defaultNavigationOptions:{
            headerBackTitleVisible:false,
            headerTintColor:'#FFF',
            headerTitleAlign:"center",

            headerStyle:{
                backgroundColor:'#C1292E',
            },
        }
    })
);

export default Routes;