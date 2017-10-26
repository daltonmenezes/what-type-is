const { getType } = require('../GetType')

exports.isPlainObject = (it) => {
  return getType(it) === 'object'
}
