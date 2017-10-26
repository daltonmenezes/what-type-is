const { expect } = require('chai')
const { isString } = require('../index')

describe('isString', () => {
  it('should return true when a String is passed as argument', () => {
      expect(isString('')).to.be.true
  })

  it('should return false when the argument passed is not a String', () => {
      expect(isString([])).to.be.false
      expect(isString(1)).to.be.false
      expect(isString({})).to.be.false
      expect(isString(undefined)).to.be.false
      expect(isString(null)).to.be.false
  })
})
