const { isArray } = require('./src/is/IsArray')
const { isString } = require('./src/is/IsString')
const { isNumber } = require('./src/is/IsNumber')
const { isObject } = require('./src/is/IsObject')
const { isUndefined } = require('./src/is/isUndefined')
const { isNull } = require('./src/is/IsNull')

exports.isArray = (it) => {
  return isArray(it)
}

exports.isString = (it) => {
  return isString(it)
}

exports.isNumber = (it) => {
  return isNumber(it)
}

exports.isObject = (it) => {
  return isObject(it)
}

exports.isUndefined = (it) => {
  return isUndefined(it)
}

exports.isNull = (it) => {
  return isNull(it)
}