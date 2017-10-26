const { getType } = require('../GetType')

exports.isDate = (it) => {
  return getType(it) === 'date'
}
