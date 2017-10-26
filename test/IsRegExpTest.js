const { expect } = require('chai')
const { isRegExp } = require('../index')

describe('isRegExp', () => {
  it('should return true when a RegExp Object is passed as argument', () => {
      expect(isRegExp(new RegExp)).to.be.true
  })

  it('should return false when the argument passed is not a RegExp Object', () => {
      expect(isRegExp(null)).to.be.false
      expect(isRegExp('true')).to.be.false
      expect(isRegExp({})).to.be.false
      expect(isRegExp(undefined)).to.be.false
      expect(isRegExp('')).to.be.false
  })
})
