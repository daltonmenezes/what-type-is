const { getType } = require('../GetType')

exports.isArray = (it) => {
  return getType(it) === 'array' 
}