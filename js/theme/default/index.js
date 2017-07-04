/**
 * Created by william on 5/19/17.
 *
 * 主题以及局部自定义的样式
 * 此处统一导出.
 * eg.  import * as Theme from '../../theme';
 */

import style from './common/style';
import action_bar from './common/action_bar';
import tab_bar from './common/tab_bar';
import slider_menu from './common/slider_menu';

import SplashStyle from './splash/SplashStyle';
import LoginStyle from './login/LoginStyle';
import MainStyle from './main/MainStyle';


export default theme = Object.assign(
    style,
    action_bar,
    tab_bar,
    slider_menu,

    SplashStyle,
    LoginStyle,
    MainStyle,
);