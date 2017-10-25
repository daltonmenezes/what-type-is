const { getType } = require('../GetType')

exports.isNull = (it) => {
  return getType(it) === 'null'
}
