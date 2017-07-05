/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <View style={[theme.bg]}>

            </View>
        );
    }

}
