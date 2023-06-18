#### 一、 变量

* var 关键字

* let 声明
* const 声明

#### 二、 数据类型

* typeof 操作符
* undefined 类型
* Null 类型
* Boolean 类型
* Number 类型
* String 类型

* Symbol 类型

`symbol`(符号)是`ECMAScript6`新增的数据类型。符号原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性唯一标识符，不会发生属性冲突的危险。
符号就是用来创建唯一记号，进而用作非字符串形式的对象属性。
1. 符号的基本用法
> 符号需要使用Symbol（） 函数初始化。因为符号本身是原始类型，所以typeof操作符对付好返回symbol。
```js
let sym = symbol();
console.log(typeof sym) // symbol
```
2. 使用全局符号注册表
 > 如果运行时的不同部分需要共享和重用符号实例， 那么可以用一个字符串作为键，在全局符号注册表中创建并重用符号。
 > 为此需要使用Symbol.for()方法：
 ```js
 let fooGlobalSymbol = Symbol.for('foo');
 console.log(typeof fooGlobalSymbol); // symbol
 ```

* Object 类型
对象通过new操作符后跟对象类型的名称来创建。开发者可以通过创建Object类型的实例来创建自己的对象，然后再给对象添加属性和方法：
```js
let o = new Object()
```
每个Object实例都有如下属性和方法
* constructor：用于创建当前对象的函数。在前面的例子中，这个属性的值就是Object() 函数。
* hasOwnProperty: 用于判断当前对象实例上是否存在给定的属性。要检查的属性名必须是字符串。
* isPrototypeOf： 用于判断当前对象是否为另一个对象的原型。
* propertyIsEnumerable： 用于判断给定的属性是否可以使用for-in语句枚举。与hasOwnProperty()一样，属性名必须是字符串。
* toLocaleString(): 返回对象的字符串标识，该字符串反应对象所在的本地化执行环境。
* toString(): 返回对象的字符串表示。
* valueOf()： 返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同。

```js
let o = new Object();
o.name = '张三';
console.log(o); // {name: '张三'}
console.log(o.constructor()); // 
console.log(o.hasOwnProperty('name')); // true

```
#### 三、 操作符

* 一元操作符
1. 递增/递减操作符(++ --)
2. 位操作符（& |）
3. 乘性操作符（*）
4. 指数操作符（Math.pow()）
6. 加法操作符（+）
7. 减法操作符（-）
8. 关系操作符（< > <= >=）
9. 相等操作符（==）
10. 条件操作符（ ？ ：）
11. 赋值操作符（=）
12. 逗号操作符（，）

#### 四、 语句 
13. if语句
14. do-while语句
> do-while语句是一种后测试循环语句，即循环体中的代码执行后才会推出条件进行求值。
下面是这个例字
```js
let i = 0;
do {
    i += 2;
} while (i < 10)
```
在这个例子中只要i<10,循环就会重复执行。i从0开始，每次循环递增2。

15. while语句

while语句是一种先测试循环语句，即先检测退出条件，再执行循环体内的代码。因此，while循环体内的代码有可能不会执行。下面是while循环的语法：
```js
let i = 0;
while (i < 10) {
    i += 2;
}
```
在这个例子中，变量i从0开始，每次循环递增2.只要i小于10，循环就会继续。
15. for语句
```js
let count = 0;
for (let i = 0; i< count; i++) {
    console.log(i);
}
```
16. for-in 语句
for-in 语句是一种严格的迭代语句，用于枚举对象中的非符号键属性，语法如下：
```js
for (const propName in window ) {
    document.write(propName)
}
```
17. for-of语句
for-of 语句是一种严格的迭代语句，用于遍历可迭代对象的元素，语法如下：
```js
for (let el of [2, 4, 6, 8]) {
    document.write(el)
}
```
18. 标签语句
标签语句用于给语句加标签
```js
start: for(let i =0; i<count; i++) {
    consol.elog(i);
}
```
在这个例子中，start是一个标签，可以在后面通过break或continue语句引用。标签语句的典型应用场景是嵌套循环。
19. break和continue语句
break和continue语句执行循环代码提供了更严格的控制手段。其中，break语句用于立即推出循环，强执行循环后的下一条语句。
而continue语句也用于立即退出循环，但会再次从循环顶部开始执行。
```js
let num = 0;
for (let i = 1; i<10; i++>) {
    if (i % 5 == 0) {
        break；
    }
    num++;
}
console.log(num); // 4
```
```js
let num = 0;
for (let i = 1; i<10; i++>) {
    if (i % 5 == 0) {
       continue;
    }
    num++;
}
console.log(num); // 8
```
20. with语句
使用with语句的主要场景是针对一个对象反复操作，这时候将代码作用域设置为该对象能提供便利。
```js
let qs = location.search.substring(1);
let hostName = location.hostName;
let url = location.href;
```
> 上面代码中的每一行都用到了location。如果使用with语句，就可以少写一些代码：
```js
with(location) {
    let qs = search.substring(1);
    let hostName = hostName;
    let url = href;
}
```
> 在这里，with语句用于连接location对象。这意味着在这个语句内部，每个变量首先会被认为是一个局部变量。如果没有找到该
> 局部变量，则会搜索location对象，看它是否有一个同名的属性。如果有，则该变量会被求值为location对象的属性。
> 严格模式下不允许使用with语句，否则会抛出错误。

21. switch语句
switch语句是与if语句紧密相关的一种流控语句，从其他语言借鉴而来。
```js
switch(expression) {
    case value1：
        statement
        break;
    case value2:
        statement
        break;
    default: statement
}
```
> 这里的每个case相当于： '如果表达式等于后面的值，则执行下面的语句。'break关键字会导致代码执行跳出switch语句。
> 如果没有break，则代码会继续匹配下一个条件。default关键字用于在任何条件都没有满足时指定默认执行的语句（相当于else）


#### 五、 函数
函数的基本用法
```js
function functionName(arg0, arg1, ..., argN) {
    statements
}
```
严格模式下对函数有一些限制

> * 函数不能以eval或arguments作为名称；
> * 函数的参数不能叫eval或arguments；
> * 两个命名参数不能拥有同一个名称。

### 变量、作用域与内存

#### 一、原始值与引用值
`原始值`就是最简单的数据，`引用值`则是由多个值构成的对象。
按照值属性存储的类型有： undefined、null、Boolean、string、number、symbol，biglnt
* 复制值
```js
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas"
```
> 在把引用值从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。区别在于，
> 这里复制的值实际是一个指针，它指向存储在堆内存中的对象。操作完成后，两个变量实际上指向同一个对象，
> 因此一个对象上面的变化会在另一个对象上反映出来。


#### 二、执行上下文与作用域





