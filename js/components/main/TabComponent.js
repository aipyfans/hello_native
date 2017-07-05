/**
 * Created by william on 17-2-23.
 * 闪屏欢迎页面.
 */
import React, {Component}from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            <View style={[theme.bg]}>

            </View>
        );
    }

}
