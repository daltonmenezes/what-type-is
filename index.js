const { isArray } = require('./src/is/IsArray')
const { isString } = require('./src/is/IsString')
const { isNumber } = require('./src/is/IsNumber')

exports.isArray = (it) => {
  return isArray(it)
}

exports.isString = (it) => {
  return isString(it)
}

exports.isNumber = (it) => {
  return isNumber(it)
}