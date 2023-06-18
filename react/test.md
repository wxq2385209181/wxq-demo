<!-- <script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script> -->


### 一、创建项目

::: info
    npm init vite
    project name: lege-management
    Select a framework: react
    Select a variant: react-ts
:::
```js{4}
"dependencies": {
    "react": "^18.2.0",
    "react-dom": '^18.2.0',
    "react-redux": "^7.2.8", // 只针对react
    "react-router-dom": "^6.3.0",
    "redux": "^4.1.2"
}
```
```js{4}
    "scripts": {
    "dev": "vite --host --port 3000 --open", // 设置端口号 自动打开
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
```


### 二、项目目录初始化
### 三、样式初始化
```js{4}
    npm i reset-css
```
在src/main.tsx中引入reset-css:
```js{4}
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    // 正确的样式引入顺序
    // 样式初始化一般放在最前面
    import "reset-css"
    // UI框架的样式
    // 组建的样式
    import App from './App'
    ReactDOM.createRoot(document.getElementById('root'),
        <React.strictMode>
            <App/>
        </React.strictMode>
    )
```
### 四、scss的安装和初步使用
安装sass：
```js{4}
    npm i --save-dev sass
```

### 五、配置项目路径别名

#### 5.1、路径别名的配置
目前ts对@指向src目录的提示是不支持的，vite默认也是不支持的。
所以需要手动配置@符号的指向
在vite.config.ts中添加配置：
```js{4}
   import path from 'path'
   // https:''vitejs.dev/config/
   export default defineConfig({
       plugin: [react()],
       resolve: {
           alias: {
               "@": path.resolve(__dirname, './src')
           }
       }
   })
   
```
这时候引入的path模块会报红，但其实我们已经有node，所以就已经有path模块，只是缺少ts的一些声明配置。
所以需要安装关于node这个库的ts声明配置
```
    npm i -D @types/node
```

安装成功就没有报红了，如果import后面的path报红，就把引入换乘import * as path from 'path';
#### 5.2、配置路径别名的提示
虽然现在路径别名已经有了，但是在文件中输入@是没有提示路径的
需要我们在tsconfig.json中添加两项配置
```
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    }
```
配置好之后敲@就有路径提示了
### 六、css模块化
#### 6.1、css的进一步使用
#### 6.2 css的模块化
### 七、Antd Design初步引入
安装Antd Design
```
// 使用npm 安装
npm install antd --save
// 使用yarn 安装
yarn add antd
```
安装图标所需要的模块
```
// 使用npm 安装
npm install --save @ant-design/icons
// 使用yarn安装
yarn add @ant-design/icons
```
### 八、配置Antd Design样式自动按需引入
antd的 4.x版本以上已经支持组件按需引入，我们只需要解决样式上的自动按需引入即可
安装插件vite-plugin-style-import
```
npm install vite-plugin-style-import@1.4.1 -D
```
在vite.config.ts中进行配置
```
import styleImport, {AntdResolve} from 'vite-plugin-style-import';
export default defineConfig ({
    plugin: [
        react(),
        styleImport({
            resolves: [
                AntdResolve()
            ]
        })
    ]
})
```
在去掉APP.vue中的import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'这一行样式引入
启动项目，发现报错，缺少less，进行安装
```
npm i less@2.7.1 -D
```
### 九、 React路由————第一种配置方案（旧项目中的写法）
#### 9.1 初步展示
我们在这里模拟vue中的home和about两个组件展示
【1、准备界面】首先src下创建views文件夹，views文件夹下创建Home.tsx和About.tsx,大致代码如下：
```
function View() {
    return (
        <div className="home">
            <p>Home</p>
        </div>
    )
}
export default View
```
【2、配置对应关系】/src 下新建router文件夹，再进去新建index.tsx
```
import App from '../App'
import Home from '../views/Home'
import About from '../views/About'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// 两种路由模式的组件： BrowerRouter(History模式)， HashRouter(Hash模式)

// const baseRouter = () => {
//     return ()
// }

// 以上写法可以简写为：
const baseRouter = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}

export default baseRouter
```
【3、替换顶级组件】在/src/main.tsx中把顶级组件App替换为这个路由对象：
import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import {BrowserRouter, Routes, Route} from "react-router-dom"
const baseRouter = () => {
    <BrowserRouter>
        <Routes></Routes>
    </BrowserRouter>
}
```

#### 9.2 编程式导航--设置菜单点击跳转
/src/App.tsx中，使用<link />组件进行跳转
```
import {outlet, Link} from "react-router-dom"
<div>
    <Link to="/home">home</Link> |
    <Link to="/about">about</Link>
    {/* 占位符组件，窗口，有点类似于Vue中的router-view */}
    <Outlet />
</div>
```
#### 9.3 配置重定向
### 十、React路由————第二中锋配置方案
#### 10.1、 路由表的写法
#### 10.2、 路由懒加载


### Theme Data
<pre>{{ theme }}</pre>