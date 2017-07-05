import {StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom} from 'react-navigation';
import React, {Component}from 'react';
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

// 闪屏页面
import SplashView from '../components/splash/SplashView';

// 登录页面
import LoginView from '../components/login/LoginView';

// 主页面
import StudyView from '../components/main/StudyView';

// 主页面
import TabBase from '../components/main/TabBase';
import TabComponent from '../components/main/TabComponent';
import TabApi from '../components/main/TabApi';
import SliderMenu from '../components/main/SliderMenu';

//---------------------------------------------------------------------------------------


const MainTabView = TabNavigator({
        TabBase: {
            screen: TabBase,
        },
        TabComponent: {
            screen: TabComponent,
        },
        TabApi: {
            screen: TabApi,
        },
    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            // activeBackgroundColor: 'yellow',
            inactiveTintColor: 'green',
            // inactiveBackgroundColor: 'gray',
            showLabel: true,
            showIcon: true,
            labelStyle: {
                fontSize: 10,
            },
            style: {
                // backgroundColor: 'blue',
            },
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        initialRouteName: 'TabBase',
        backBehavior: 'initialRoute',
    });

MainTabView.navigationOptions = {
    // header: null,
    drawerLabel: '首页',
    drawerIcon: ({tintColor}) => (
        <Icon name="ios-home" size={24} color={tintColor}/>
    ),
};

//---------------------------------------------------------------------------------------

const SliderTabView = DrawerNavigator(
    {

        MainTabView: {
            screen: MainTabView,
        },

        StudyView: {
            screen: StudyView,
        }

    },

    {
        drawerWidth: 160,
        drawerPosition: 'left',
        initialRouteName: 'MainTabView',
        backBehavior: 'initialRoute',

        contentComponent: SliderMenu,

        contentOptions: {

            activeTintColor: '#e91e63',
            // activeBackgroundColor: 'yellow',
            inactiveTintColor: '#518cdc',
            // inactiveBackgroundColor: 'gray',

            style: {
                // flex:1,
                // backgroundColor: 'red',
            },

            labelStyle: {
                // color: 'red',
                // fontSize: 12,
            },

        },
    }
);

SliderTabView.navigationOptions = {
    // header: null,
    title: "Dream",
    headerLeft: <TouchableOpacity style={{alignSelf:'center',marginLeft:16}}><Icon name="ios-cafe-outline" color='white' size={32}/></TouchableOpacity>
};

//---------------------------------------------------------------------------------------

const routeConfigs = {
    Splash: {screen: SplashView},
    Login: {screen: LoginView},
    Main: {screen: SliderTabView},
}

const stackNavigatorConfig = {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {
            height: 48,
            backgroundColor: '#518cdc',
        },
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'normal'
        },
        headerTintColor: 'white',
        gesturesEnabled: true,
    }
}

export default StackNavigator(routeConfigs, stackNavigatorConfig);

