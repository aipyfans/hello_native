import {StackNavigator, TabNavigator, DrawerNavigator, TabBarBottom} from 'react-navigation';

// 闪屏页面
import SplashView from '../components/splash/SplashView';

// 登录页面
import LoginView from '../components/login/LoginView';

// 主页面
import MainView from '../components/main/MainView.js';

//---------------------------------------------------------------------------------------

const routeConfigs = {
    Splash: {screen: SplashView},
    Login: {screen: LoginView},
    Main: {screen: MainView},
}

const stackNavigatorConfig = {
    headerMode: 'float',
    navigationOptions: {
        headerStyle: {
            height:48,
            backgroundColor: '#518cdc',
        },
        headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'normal'
        },
        headerTintColor: 'white',
        gesturesEnabled:true,
    }
}

export default StackNavigator(routeConfigs, stackNavigatorConfig);

