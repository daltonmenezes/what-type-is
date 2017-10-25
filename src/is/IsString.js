const { getType } = require('../GetType')

exports.isString = (it) => {
  return getType(it) === 'string' 
}