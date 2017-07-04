'use strict';

import React ,{Component}from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

import * as Actions from '../../actions';
import {connect} from 'react-redux';


/**
 * 用户登录页面.
 * Created by william on 17-2-14.
 */
class LoginView extends Component {


    static navigationOptions = {
        title: 'Login',
    }


    constructor(props) {
        super(props)
        this.state = {
            isHidePwd: true,
            username: 'trainer_test',
            password: '123456',
            isTheme: true
        }
    }


    /**
     * 登录.
     */
    loginAction() {
        let actionLogin = Actions.loginAction(this.state);
        // this.props.dispatch(actionLogin);
        // this.props.navigation.navigate('Main');
        this.props.navigation.dispatch({type:'Main'});
    }


    /**
     * 显示或隐藏密码.
     */
    showHidePwd() {
        this.setState({isHidePwd: !this.state.isHidePwd});
    }


    render() {

        const {theme} = this.props.screenProps;
        
        return (
            <View style={[theme.bg,theme.login_root]}>

                <View style={theme.login_row}>

                    <TextInput
                        style={[theme.login_ti]}
                        ref={(ref) => this.username = ref}
                        onFocus={() => this.username.focus()}
                        onChangeText={(text) => this.setState({username: text})}
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        defaultValue={this.state.username}/>
                </View>

                <View style={[theme.login_row, {marginBottom: 8}]}>

                    <TextInput
                        style={theme.login_ti}
                        ref={(ref) => this.password = ref}
                        onFocus={() => this.password.focus()}
                        onChangeText={(text) => this.setState({password: text})}
                        secureTextEntry={this.state.isHidePwd}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        defaultValue={this.state.password}/>

                    <TouchableOpacity style={[{paddingLeft: 4}]} onPress={this.showHidePwd.bind(this)}>

                        <Image
                            source={
                                this.state.isHidePwd
                                    ? require('./img/eye_pressed.png')
                                    : require('./img/eye_normal.png')
                            }/>
                    </TouchableOpacity>

                </View>


                <TouchableOpacity style={theme.login_btn} onPress={this.loginAction.bind(this)}>
                    {
                        this.props.state != 'doing'
                            ?
                            <Text style={theme.login_btn_text}>Login Action</Text>
                            :
                            <ActivityIndicator color='white'/>
                    }
                </TouchableOpacity>


            </View>
        );
    }

}


function mapStateToProps(state) {

    return {
        state: state.state,
        isSuccess: state.isSuccess,
        userInfo: state.userInfo
    }

}

export default connect(mapStateToProps)(LoginView);