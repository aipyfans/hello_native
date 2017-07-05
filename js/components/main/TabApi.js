/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const routes = [
    {routeName: 'AccessibilityInfo'},
    {routeName: 'ActionSheetIOS'},
    {routeName: 'AdSupportIOS'},
    {routeName: 'Alert'},
    {routeName: 'AlertIOS'},
    {routeName: 'Animated'},
    {routeName: 'AppRegistry'},
    {routeName: 'AppState'},
    {routeName: 'AsyncStorage'},
    {routeName: 'BackAndroid'},
    {routeName: 'BackHandler'},
    {routeName: 'CameraRoll'},
    {routeName: 'Clipboard'},
    {routeName: 'DatePickerAndroid'},
    {routeName: 'Dimensions'},
    {routeName: 'Easing'},
    {routeName: 'Geolocation'},
    {routeName: 'ImageEditor'},
    {routeName: 'ImagePickerIOS'},
    {routeName: 'ImageStore'},
    {routeName: 'InteractionManager'},
    {routeName: 'Keyboard'},
    {routeName: 'LayoutAnimation'},
    {routeName: 'Linking'},
    {routeName: 'NativeMethodsMixin'},
    {routeName: 'NetInfo'},
    {routeName: 'PanResponder'},
    {routeName: 'PermissionsAndroid'},
    {routeName: 'PixelRatio'},
    {routeName: 'PushNotificationIOS'},
    {routeName: 'Settings'},
    {routeName: 'Share'},
    {routeName: 'StatusBarIOS'},
    {routeName: 'StyleSheet'},
    {routeName: 'Systrace'},
    {routeName: 'TimePickerAndroid'},
    {routeName: 'ToastAndroid'},
    {routeName: 'Vibration'},
    {routeName: 'VibrationIOS'},
    {routeName: 'Layout Props'},
    {routeName: 'Shadow Props'},
];

export default class TabApi extends Component {

    static navigationOptions = ({navigation, screenProps}) => {
        let {theme} = screenProps;
        return {
            tabBarLabel: 'Apis',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-color-filter-outline"
                    style={[theme.tb_icon]}
                    color={tintColor}/>
            ),
            showIcon: true,
        }
    };


    constructor() {
        super();
    }



    render() {
        let {theme} = this.props.screenProps;
        return (
            <ScrollView style={[theme.bg]}>
                {
                    routes.map((route) => {
                        return (
                            <TouchableOpacity activeOpacity={0.75} style={theme.btn}>
                                <Text style={{color:'white'}}>{route.routeName}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }

}
