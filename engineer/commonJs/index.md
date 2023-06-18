### 一、commonjs

1. commonjs规范内容
每一个文件就是一个模块，拥有自己独立的作用域，变量，以及方法等，对其他的模块都不可见。CommonJs规范规定，每个模块内部，moudle变量代表当前模块。这个变量是一个对象，它
的exports属性（即moudle.exports）s是对外接口。
加载某个模块，其实就是加载该模块的moudle.exports属性。require方法用于加载模块。
加载方式：同步加载
```js{4}
var name = "zhangsan";
function sayHello() {
    console.log(`my name is ${name}`)
}
// 方法一导出
moudle.exports = {
    name;
    sayHello;
}
// 方法二导出
exports.sayHello = sayHello;
4e
```
```js
var Person = require('./person');
console.log(Person); // 
console.log(Person.sayHello()) // my name is zhangsan;
```

2. CommonJs特点

所有代码都运行在模块作用域，不会污染全局作用域
模块可以多次加载，但只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载 ，就直接读取缓存结果。要想让模块再次运行，必须清除缓存
模块加载的顺序，按照其在代码中出现的顺序
模块输出的值是值得拷贝：从而控制了数据得访问权限

3. require得内部处理流程
require命令是CommonJs归案之中，用来加载其他模块得命令。它其实不是一个全局命令，而是指向当前模块得module.require命令，二后者有调用Node得内部命令Moudle._load。

```js
Module._load = function(request, parent, isMain) {
    1. 检查 Moudle._cache,是否缓存之中有指定模块
    2. 如果缓存之中没有，就创建一个新的Module实例
    3. 将它保存到缓存
    4. 使用module.load() 加载指定得模块文件，
        读取文件内容之后，使用module.compile() 执行文件代码
    5. 如果加载/解析过程报错，就从缓存删除该模块
    6. 返回该模块得module.exports
}
```

一旦require函数准备完毕，整个所要加载得脚本内容，就被放到一个新的函数之中，这样可以避免污染全局环境。该函数得参数包括require、 module、 exports,以及其他一些参数。


```js
(function (exports, require, module, _filename, _dirname) {
    // 你的代码被导入在这里
})



```
4. 不能在浏览器中直接使用CommonJs（browserify介绍）

``` js

```



### 二、 模块导入

1. AMD 规范
AMD规范只定义了一个函数‘define’， 它是全局变量
2. CMD 规范
异步加载，可以像在Node环境中一样来书写模块代码。代码得书写格式如下：

```js
define(function(require, exports, module) {
    var $ = require('jquery');
    exports.sayHello = function(0 {
        $('#Hello').toggle('slow')
    })
})
```

3. ESModule介绍
在编译阶段确定依赖关系和输入输出
export导出模块： export为普通导出、 export default为默认导出
import加载模块

特点：
. 每一个模块只加载一次，并执行一次，再加载同一文件，直接从内存中读取；
. 每一模块内声明的变量都是局部变量，不会污染全局作用域；
. 通过export导出模块，通过import导入模块
. ES6模块只支持静态导入和导出，只可以在模块的最外层作用域使用import和export


