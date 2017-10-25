const { getType } = require('../GetType')

exports.isObject = (it) => {
  return getType(it) === 'object' 
}