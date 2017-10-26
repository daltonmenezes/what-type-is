const { getType } = require('../GetType')

exports.isBoolean = (it) => {
  return getType(it) === 'boolean'
}
