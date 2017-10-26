const { expect } = require('chai')
const { isUndefined } = require('../index')

describe('isUndefined', () => {
  it('should return true when an Undefined is passed as argument', () => {
      expect(isUndefined(undefined)).to.be.true
  })

  it('should return false when the argument passed is not an Undefined', () => {
      expect(isUndefined(null)).to.be.false
      expect(isUndefined(1)).to.be.false
      expect(isUndefined({})).to.be.false
      expect(isUndefined([])).to.be.false
      expect(isUndefined('')).to.be.false
  })
})
