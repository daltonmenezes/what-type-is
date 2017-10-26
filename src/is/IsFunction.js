const { getType } = require('../GetType')

exports.isFunction = (it) => {
  return getType(it) === 'function'
}
