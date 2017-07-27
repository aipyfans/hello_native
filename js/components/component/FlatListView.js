import React, {Component} from 'react';
import {View, FlatList, Text,Dimensions} from 'react-native';

/**
 * Created by william on 17-7-27.
 *
 * https://facebook.github.io/react-native/docs/flatlist.html
 * https://reactnative.cn/docs/0.46/flatlist.html
 *
 * https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
 */
export default class FlatListView extends Component {

    static navigationOptions = {
        title: "FlatListView",
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'aaa'}, {key: 'bbb'}, {key: 'ccc'}, {key: 'ddd'}, {key: 'eee'}, {key: 'fff'}, {key: 'ggg'},
                {key: 'hhh'}, {key: 'iii'}, {key: 'jjj'}, {key: 'kkk'}, {key: 'lll'}, {key: 'mmm'}, {key: 'nnn'},
                {key: 'ooo'}, {key: 'ppp'}, {key: 'qqq'}, {key: 'rrr'}, {key: 'sss'}, {key: 'ttt'},
                {key: 'uuu'}, {key: 'vvv'}, {key: 'www'}, {key: 'xxx'}, {key: 'yyy'}, {key: 'zzz'},
            ],
        }
    }

    _renderItem = ({item}) => (
        <Text style={{padding: 8,flex:1,textAlign:'center'}}>{item.key}</Text>
    );

    _renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    render() {

        let {theme} = this.props.screenProps;

        return (
            <View style={[theme.bg]}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._renderSeparator}
                    numColumns={3}
                    refreshing={false}
                    onRefresh={() => {}}
                />
            </View>
        );
    }

}
