const { isArray } = require('./src/is/IsArray')
const { isString } = require('./src/is/IsString')

exports.isArray = (it) => {
  return isArray(it)
}

exports.isString = (it) => {
  return isString(it)
}