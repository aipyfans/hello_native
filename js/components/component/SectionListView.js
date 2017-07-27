import React, {Component} from 'react';
import {View} from 'react-native';

/**
 * Created by william on 17-7-27.
 *
 * https://reactnative.cn/docs/0.46/sectionlist.html
 *
 * http://www.jianshu.com/p/6302c4d48b97
 */
export default class SectionListView extends Component {

    static navigationOptions = {
        title: "SectionListView",
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
