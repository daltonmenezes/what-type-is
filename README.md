<p align="center"><img src="https://cdn.pixabay.com/photo/2016/03/08/07/08/question-1243504__340.png" alt="logo"/></p>
<h1 align="center">What Type Is?</h1>
<p align="center">A simple type checking library for Node.js</p>

<p align="center">
  <a href="https://github.com/daltonmenezes/what-type-is/releases">
    <img src="https://img.shields.io/badge/release-v1.2.0-lightgray.svg" alt="release version"/>
  </a>
  <a href="#"><img src="https://travis-ci.org/daltonmenezes/what-type-is.svg?branch=master" alt="build status" /></a>
  <a href="https://github.com/daltonmenezes/uni/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license"/>
  </a>
</p>

## Table of Contents
- [Example](#example)
- [Installation](#installation)
- [Tests](#tests)
- [Usage](#usage)
- [API](#api)

## Example
```js
const { getType, isPlainObject, isArray } = require('what-type-is')

getType([]) // array
isPlainObject([]) // false
isArray(['array']) // true
```

## Installation
```
npm i --save what-type-is
```

## Tests
```
npm test
```

## Usage
You can import all functions or import it on-demand using destructuring assignment

### Importing all functions
```js
const it = require('what-type-is')
const message = 'Hello'

console.log(
  it.isString(message)
) // true
```
### Importing on-demand
This is a great way to import only what you need to use. You can import any functions available using destructuring assignment. Just take a look at [API section](#api) to know all functions you can use and import it on-demand.
```js
const { isArray, isObject, isPlainObject isFunction } = require('what-type-is')
const messages = ['Hello', 'World', 'How are you?']

console.log(
  isArray(messages)
) // true

console.log(
  isObject(messages)
) // true

console.log(
  isPlainObject(messages)
) // false

console.log(
  isFunction(messages)
) // false
```


## API
- [getType](#gettype-any-)
- [isArray](#isarray-any-)
- [isString](#isstring-any-)
- [isNumber](#isnumber-any-)
- [isBoolean](#isboolean-any-)
- [isObject](#isobject-any-)
- [isPlainObject](#isplainobject-any-)
- [isFunction](#isfunction-any-)
- [isDate](#isdate-any-)
- [isRegExp](#isregexp-any-)
- [isNull](#isnull-any-)
- [isUndefined](#isundefined-any-)

### getType( any )
Returns a string containing the type of the given argument.

#### Example
```js
getType(['array']) // array
getType(new Date) // date
getType({}) // object
```

### isArray( any )
Check if a given argument is an array and returns a boolean.

#### Example
```js
isArray(['array']) // true
isArray('string') // false 
```

### isString( any )
Check if a given argument is a string and returns a boolean.

#### Example
```js
isString('string') // true
isString(['array']) // false 
```

### isNumber( any )
Check if a given argument is a number and returns a boolean.

#### Example
```js
isNumber(10) // true
isNumber(['array']) // false 
```

### isBoolean( any )
Check if a given argument is a boolean and returns a boolean.

#### Example
```js
isBoolean(true) // true
isBoolean(20) // false 
```

### isObject( any )
Check if a given argument is an object according with ECMA spec and returns a boolean.

#### Example
```js
isObject({}) // true
isObject(['array']) // true
```

### isPlainObject( any )
Check if a given argument is a plain object and returns a boolean.

#### Example
```js
isPlainObject({}) // true
isPlainObject(['array']) // false
```

### isFunction( any )
Check if a given argument is a function and returns a boolean.

#### Example
```js
isFunction(() => {}) // true
isFunction(undefined) // false
```

### isDate( any )
Check if a given argument is a date object and returns a boolean.

#### Example
```js
isDate(new Date) // true
isDate('27/10/2017') // false
```

### isRegExp( any )
Check if a given argument is a regular expression and returns a boolean.

#### Example
```js
isRegExp(new RegExp) // true
isRegExp(/regularexpression/i) // true
```

### isNull( any )
Check if a given argument is a null and returns a boolean.

#### Example
```js
isNull(null) // true
isNull(0) // false
```

### isUndefined( any )
Check if a given argument is an undefined and returns a boolean.

#### Example
```js
isUndefined(undefined) // true
isUndefined(null) // false
```


[Go Back to The Top](#what-type-is)
