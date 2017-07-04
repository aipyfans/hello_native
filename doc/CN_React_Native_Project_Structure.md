# React Native项目结构规范

以下目录结构示例中只展示js与静态资源，不包含原生代码。

```
.
├── index.ios.js
├── index.android.js
└── js
    ├── component  		可复用的组件（非完整页面）
    ├── page       			跟业务相关的组件(完整页面)
    ├── config 				配置项（常量、接口地址、路由、多语言化等预置数据）
    ├── util				    工具类（非UI组件)
    ├── style				    全局样式
    └── image				通用图片
```

在component和page目录中，可能还有一些内聚度较高的模块再建目录

```
page/component
└── user
    ├── register.js	
    └── login.js   				
```