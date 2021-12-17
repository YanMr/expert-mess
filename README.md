### 技术栈
* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
* [Antd-Design](https://ant.design/index-cn)
* [React](https://reactjs.org)
* [React-Router](https://reacttraining.com/react-router/)
* [React-Redux](https://react-redux.js.org)
* [Webpack](https://www.webpackjs.com)
* [ECMAScript 6](http://es6.ruanyifeng.com)
* [Babel](https://babeljs.io)

### 项目结构

```javascript
├── src                     项目主文件目录
│   ├── assets              样式图片及SVG文件
│   │   └── ...
│   ├── axios               axios请求
│   │   └── ...
│   ├── components          组件
│   │   ├── xxx.js
│   │   └── ...
│   ├── redux               redux目录
│   │   ├── actions
│   │   │   └── xxx.js
│   │   ├── constants
│   │   │   └── xxx.js
│   │   ├── reducers
│   │   │   └── xxx.js
│   │   └── store.js
│   ├── router              路由配置
│   │   ├── xxx.js
│   │   └── ...
│   ├── utils               工具
│   │   └── xxx.js
│   └── views               页面目录
│       ├── layout
│       │   │── xxx.js
│       │   └── ...
│       └── xx
│           │── xxx.js
│           └── ...
└── package.json
```

### 开始

安裝依賴
```
cd react-antd-admin
npm i or yarn
```
调试
```
npm start
```
发布应用
```
npm run build
```
