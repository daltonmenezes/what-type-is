const { getType } = require('../GetType')

exports.isNumber = (it) => {
  return getType(it) === 'number'
}
