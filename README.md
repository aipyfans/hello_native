## React Native 代码规范

具体详见[《 React Native 代码规范》](/doc/CN_React_Native_Code_Specification.md)

下面所列出的命名规范是必须遵守的


### 包命名(即文件夹)

* 包名必须全部使用小写字母。e.g: login

* 多个连续的单词之间使用中划线`-`进行分隔。e.g: order-detail

### 文件与组件命名

-   **扩展名**: 使用`.js`作为js文件的扩展名。如果同一个文件夹下有同名而不同作用的js文件，则通过中缀（小写）进一步区分，例如：`HomeView.component.js`,`HomeView.style.js`,`HomeView.action.js`等。

-  **文件命名**: 使用驼峰命名法且首字母大写，如`HomeView.js`。

-  **组件命名**: 与文件名（除中缀外）完全一致。如果组件单独放置在目录中，则目录名也一致。

    ```javascript
    // bad
    import Footer from './Component/Footer/FooterView'

    // good
    import Footer from './Component/Footer/Footer'

    // good
    import Footer from './Footer'
    ```


### 组件声明
-   使用class与extends关键字。不使用React.createClass方法。需要导出的组件直接在class关键字前使用export default。
    ```javascript
    // bad
    export default React.createClass({
    });

    // good
    export default class HomeView extends React.Component {
    }
    ```


## React Native 项目结构

具体详见[《React Native 项目结构》](/doc/CN_React_Native_Project_Structure.md)


## React Native 主题规范


### 包命名(即文件夹)

与[《 React Native 代码规范》](/doc/CN_React_Native_Code_Specification.md)中的包命名一致。

    注意：components文件夹下的包命名的名称必须与theme文件夹下的(业务模块的)包命名一一对应。

### 文件与样式命名

-   **扩展名**: 使用`.js`作为js文件的扩展名。

-  **文件命名**: 使用驼峰命名法且首字母大写，如`HomeStyle.js`。

-  **样式命名**: 与文件名完全一致。默认不写，直接导出。参见如下代码：

    注意：components文件夹下的包模块下的**组件名称**必须与theme文件夹下的包模块下的**样式名称**一一对应。
    唯一的区别在于后缀名不一致：eg. LoginView.js 对应着 LoginStyle.js

    ```javascript
    // 文件名为 SplashStyle.js，样式名默认不写，直接导出

    import {StyleSheet} from 'react-native';

    export default StyleSheet.create({

        splash_root: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

    });
    ```

-   **前缀名称**: 前缀名称主要用于样式文件内的样式对象。

    >   前缀名称主要是根据业务组件或UI组件的名称来定制的。主要作用就是避免合并样式对象引起的冲突。

        eg.业务组件的文件名与组件名称为：SplashView.js，那么前缀名称就是splash,

        上面的代码片段中的样式对象：splash_root，splash即为前缀名称。



## 引用库

【框架库】

| 名称       | 链接                | 备注                |
| -------- | ----------------- | ----------------- |
| node-url | https://github.com/defunctzombie/node-url | 处理URL的工具库|
| redux | https://github.com/reactjs/redux | http://redux.js.org/|
| react-redux | https://github.com/reactjs/react-redux | react-redux|
| redux-thunk | https://github.com/gaearon/redux-thunk | redux-thunk|
| redux-logger | https://github.com/evgenyrodionov/redux-logger | redux-logger|
| i18n | https://github.com/AlexanderZaytsev/react-native-i18n| 国际化|
| device-info |  https://github.com/rebeccahughes/react-native-device-info| 设备信息|
| react-navigation |  https://reactnavigation.org | 官方文档|
| react-navigation |  http://blog.lijunbo.com/2017/06/18/react-navigation-index/ | 中文文档|
| react-native-image-picker |  https://github.com/react-community/react-native-image-picker | 图片选择 |
| react-native-image-crop-picker |  https://github.com/ivpusic/react-native-image-crop-picker | 图片选择并裁剪【IOS可多图选择】 |

【UI库】

| 名称       | 链接                | 备注                |
| -------- | ----------------- | ----------------- |
| react-native-button |  https://github.com/ide/react-native-button | react-native-button |
| ActionSheet |  https://github.com/xgfe/react-native-ui-xg/tree/master/components/ActionSheet | ActionSheet |
| popup-dialog | https://github.com/jacklam718/react-native-popup-dialog | popup-dialog
| modal-datetime-picker | https://github.com/mmazzarolo/react-native-modal-datetime-picker | react-native-modal-datetime-picker
| react-native-vector-icons | https://github.com/oblador/react-native-vector-icons | react-native-vector-icons

【功能库】

| 名称       | 链接                | 备注                |
| -------- | ----------------- | ----------------- |
| momentjs | http://momentjs.cn/ | 日期时间、解析、格式化 |



