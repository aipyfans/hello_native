import React, {Component} from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const routes = [
    {routeName: 'ActivityIndicator'},
    {routeName: 'Button'},
    {routeName: 'DatePickerIOS'},
    {routeName: 'DrawerLayoutAndroid'},
    {routeName: 'FlatList'},
    {routeName: 'Image'},
    {routeName: 'KeyboardAvoidingView'},
    {routeName: 'ListView'},
    {routeName: 'Modal'},
    {routeName: 'NavigatorIOS'},
    {routeName: 'Picker'},
    {routeName: 'PickerIOS'},
    {routeName: 'ProgressBarAndroid'},
    {routeName: 'ProgressViewIOS'},
    {routeName: 'RefreshControl'},
    {routeName: 'ScrollView'},
    {routeName: 'SectionList'},
    {routeName: 'SegmentedControlIOS'},
    {routeName: 'Slider'},
    {routeName: 'SnapshotViewIOS'},
    {routeName: 'StatusBar'},
    {routeName: 'Switch'},
    {routeName: 'TabBarIOS'},
    {routeName: 'TabBarIOS.Item'},
    {routeName: 'Text'},
    {routeName: 'TextInput'},
    {routeName: 'ToolbarAndroid'},
    {routeName: 'TouchableHighlight'},
    {routeName: 'TouchableNativeFeedback'},
    {routeName: 'TouchableOpacity'},
    {routeName: 'TouchableWithoutFeedback'},
    {routeName: 'View'},
    {routeName: 'ViewPagerAndroid'},
    {routeName: 'VirtualizedList'},
    {routeName: 'WebView'},
];

/**
 * Created by william on 17-7-27.
 * 组件示例列表.
 */
export default class TabComponent extends Component {

    static navigationOptions = ({navigation, screenProps}) => {
        let {theme} = screenProps;
        return {
            tabBarLabel: 'Components',
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-appstore-outline"
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
                            <TouchableOpacity
                                key={route.routeName}
                                style={theme.btn}
                                activeOpacity={0.75}
                                onPress={() => this.props.navigation.navigate(route.routeName)}>
                                <Text style={{color: 'white'}}>{route.routeName}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        );
    }

}
