const { expect } = require('chai')
const { isArray } = require('../index')

describe('isArray', () => {
  it('should return true when an array is passed as argument', () => {
      expect(isArray([])).to.be.true
  })

  it('should return false when the argument passed is not a Array', () => {
      expect(isArray(null)).to.be.false
      expect(isArray(1)).to.be.false
      expect(isArray({})).to.be.false
      expect(isArray(undefined)).to.be.false
      expect(isArray('')).to.be.false
  })
})
