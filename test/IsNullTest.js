const { expect } = require('chai')
const { isNull } = require('../index')

describe('isNull', () => {
  it('should return true when an Null is passed as argument', () => {
      expect(isNull(null)).to.be.true
  })

  it('should return false when the argument passed is not a Null', () => {
      expect(isNull([])).to.be.false
      expect(isNull(1)).to.be.false
      expect(isNull({})).to.be.false
      expect(isNull(undefined)).to.be.false
      expect(isNull('')).to.be.false
  })
})
