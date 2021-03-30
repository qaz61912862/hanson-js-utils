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

## 安装

``` javascript
npm i hanson-js-utils
```


## 使用

``` javascript
import { deepDeleteEmptyValue, isEmpty, deepClone, isObject, formatTime } from 'hanson-js-utils'

console.log(deepDeleteEmptyValue({a: 1, b: '', c: null, d: false})) // {a: 1, d: false}
console.log(isEmpty(''))
console.log(deepClone({a: 1}))
console.log(isObject(123))
console.log(isObject({}))
console.log(formatTime(new Date()));
console.log(formatTime(new Date(), 'yyyy-MM-dd'));

