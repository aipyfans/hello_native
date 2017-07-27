import React, {Component} from 'react';
import {View} from 'react-native';

/**
 * Created by william on 17-7-27.
 *
 * https://reactnative.cn/docs/0.46/listview.html#content
 * https://reactnative.cn/docs/0.46/listviewdatasource.html#content
 *
 * https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8
 * http://moduscreate.com/react-native-listview-with-section-headers/
 */
export default class ListView extends Component {

    static navigationOptions = {
        title: "ListView",
    }

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
