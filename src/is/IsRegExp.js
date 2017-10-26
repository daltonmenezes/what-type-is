const { getType } = require('../GetType')

exports.isRegExp = (it) => {
  return getType(it) === 'regexp'
}
