const { getType } = require('../GetType')

exports.isUndefined = (it) => {
  return getType(it) === 'undefined' 
}