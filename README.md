# BFD UI

[![build status](https://img.shields.io/travis/baifendian/bfd-ui.svg)](https://travis-ci.org/baifendian/bfd-ui)
[![npm package](https://img.shields.io/npm/v/bfd-ui.svg)](https://www.npmjs.org/package/bfd-ui)
[![NPM downloads](http://img.shields.io/npm/dm/bfd-ui.svg)](https://npmjs.org/package/bfd-ui)

企业级 React 组件库 [http://ui.baifendian.com](http://ui.baifendian.com)

## 安装

```sh
npm install bfd-ui --save
```

## 使用

BFD UI 抛弃传统的资源加载方式，基于 [webpack](https://webpack.github.io/) 打包，资源种类多种多样，会涉及一些 webpack 的配置，如下：

```js
{
  module: {
    loaders: [{
      test: /\\.(eot|woff|woff2|ttf|svg|png|jpg)(\\?v=[\\d\\.]+)?$/,
      loader: 'file?name=files/[hash].[ext]'
    }, {
      test: /\\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    alias: {
      bfd: 'bfd-ui/lib'
    }
  }
}
```
webpack 配置完成后，即可在代码中使用组件，以 [DatePciker](http://ui.baifendian.com/components/DatePicker) 为例：
```js
import React, { Component } from 'react'
import DatePicker from 'bfd/DatePicker'

class App extends Component {

  handleSelect(date) {
    console.log(date)
  }

  render() {
    return <DatePicker onSelect={this.handleSelect} />
  }
}
```
> 强烈建议基于[脚手架](https://github.com/baifendian/create-bfd-app)开发，省去繁琐的环境配置、项目基本结构、模板以及开发和部署相关工作


## 组件全局配置

覆盖或扩展 `defaultProps` 即可，以 [DatePciker](http://ui.baifendian.com/components/DatePicker) 为例：
```js
DatePicker.defaultProps = Object.assign(DatePicker.defaultProps || {}, {
  placeholder: 'Please select date'
})
```
命令式 API 模块 [message](http://ui.baifendian.com/components/message)、[confirm](http://ui.baifendian.com/components/confirm)、[xhr](http://ui.baifendian.com/components/xhr) 也支持全局配置，涉及 url 方式加载数据的组件以及 [Form](http://ui.baifendian.com/components/Form) 均依赖 xhr。详细配置请参考其各自文档

> 全局配置后，这些 API 会变成有状态的，即最终结果受配置影响，所以尽量一次性配置并向其它开发者说明


## 受控属性与不受控属性

组件支持不受控（`defaultXXX`）的使用方式，关于为什么区分受控 / 不受控请参考 [Controlled / Uncontrolled Components](https://facebook.github.io/react/docs/forms.html#controlled-components)


## 浏览器支持

Chrome、Firefox、Safari、IE9+


## 开发者说明

#### 开发环境安装

```sh
git clone https://github.com/yourName/bfd-ui.git

# DEMO 站集成了脚手架项目的说明，所以需要依赖这个项目的一些资源，与 bfd-ui clone 在同一目录下即可
git clone https://github.com/baifendian/create-bfd-app.git

cd bfd-ui

npm install

npm start
```
查看: http://localhost:4001


#### 开发规范

- 向下兼容
- 单元测试：组件根目录下创建 `__tests__` 文件夹
- 代码规范参考 [airbnb react](https://github.com/airbnb/javascript/tree/master/react)


#### 编写一个新组件
```sh
npm run create MyComponent
```
查看: http://localhost:4001/components/MyComponent


## 更新日志

[CHANGELOG](http://ui.baifendian.com/changelog)


## LICENSE

[BSD License](https://github.com/baifendian/bfd-ui/blob/master/LICENSE)
