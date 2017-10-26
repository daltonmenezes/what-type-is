<p align="center"><img src="https://cdn.pixabay.com/photo/2016/03/08/07/08/question-1243504__340.png"/></p>
<h1 align="center">What Type Is?</h1>
<p align="center">A simple type checking library for Node.js</>

<p align="center"><a href="https://github.com/daltonmenezes/uni/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/></a></p>

## Example
```js
const { isObject, isArray, isUndefined } = require('what-type-is')

isObject({}) // true
isArray(['array']) // true
isUndefined(null) // false
```

## Installation
```
npm i --save what-type-is
```

## API

| Function | Argument | Return |Example |
| --- | --- | --- |--- |
| isArray | value to check | boolean  | `isArray(['array'])` |
| isString | value to check | boolean | `isString('String')` |
| isNumber | value to check | boolean | `isNumber(10)` |
| isBoolean | value to check | boolean | `isBoolean(true)` |
| isObject | value to check | boolean | `isObject({})` |
| isFunction | value to check | boolean | `isFunction(()=>{})` |
| isDate | value to check | boolean | `isDate(new Date)` |
| isRegExp | value to check | boolean | `isRegExp(new RegExp)` |
| isNull | value to check | boolean | `isNull(null)` |
| isUndefined | value to check | boolean | `isUndefined(undefined)` |
