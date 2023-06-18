#### 1. 配置React源码本地调试
安装淘宝镜像
```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
1. 使用creact-react-app脚手架创建项目
``` js
npx create-react-app react-test
```
2. 弹射create-react-app 脚手架内部配置
```js
npm run eject
```
3. 克隆react官方源码（在项目的根目录下进行克隆）
```js
git clone --branch v16.13.1 --depth=1 https://github.com/facebook/react.git src/react
```

4. 链接本地源码
```js
// 文件位置： react-test/config/webpack.config.js
resolve: {
    alias: {
        "react-native": "react-native-web",
        "react": path.resolve(_dirname, "../src/react/packages/react"),
        "react-dom": path.resolve(_dirname, "../src/react/packages/react-dom")
        "shared": path.resolve(_dirname, "../src/react/packages/react-reconciler"),
        "legacy-events": path.sesolve(_dirname, "../src/react/pcakages/legacy-events")
        }
}
```
5. 改变环境变量
```js
// 文件位置： react-test/config/env.js
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
    _DEV_: true,
    SharedArrayBuffer: true,
    spyOnDev: true,
    spyOnDevAndProd: true,
    spyOnProd: true,
    _PROFILE_: true,
    _UMD_: true,
    _EXPERIMENTAL_: true,
    _VARIANT_: true,
    qate: true,
    trustedTypes: true
  };
```

6. 告诉babel在转换代码时忽略类型检测
```js
npm install @babel/plugin-transform-flow-strip-types -D

// 文件位置： react-test/config/webpack.config.js [babel-loader]
plugins: [
    require,resolve["@babel/plugin-transform-flow-atrip-types"]
]
```
