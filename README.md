# What Type Is :question:
A simple type checking library for Node.js

<a href="https://github.com/daltonmenezes/uni/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/></a>

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
