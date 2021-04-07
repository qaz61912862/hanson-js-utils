# hanson-js-utils

前端工具库


## API

### Object类

- isObject             判断是否为对象
- isEmpty              判断是否为空
- deepClone            深拷贝
- deepDeleteEmptyValue 过滤对象空值

### Date类

- formatTime           格式化时间戳


## 打包

``` javascript
npm run build
```

## 单元测试

``` javascript
npm run test
```


## 打包并自动发布到npm

``` javascript
npm run buildAndPublish
```


## 安装

``` javascript
npm i hanson-js-utils
```




## 使用

``` javascript(全局/按需引入)
import hansonJsUtils, { deepDeleteEmptyValue, isEmpty, deepClone, isObject, formatTime } from 'hanson-js-utils'

console.log(hansonJsUtils.deepDeleteEmptyValue({a: 1, b: '', c: null, d: false})) // {a: 1, d: false}
console.log(deepDeleteEmptyValue({a: 1, b: '', c: null, d: false})) // {a: 1, d: false}
console.log(isEmpty('')) // true
console.log(deepClone({a: 1})) // {a: 1}
console.log(isObject(123)) // false
console.log(isObject({})) // true
console.log(formatTime(new Date())); // 2021-03-30 18:00:00
console.log(formatTime(new Date(), 'yyyy-MM-dd')); // 2021-03-30




