const { expect } = require('chai')
const { isNumber } = require('../index')

describe('isNumber', () => {
  it('should return true when an Number is passed as argument', () => {
      expect(isNumber(1)).to.be.true
  })

  it('should return false when the argument passed is not a Number', () => {
      expect(isNumber([])).to.be.false
      expect(isNumber('')).to.be.false
      expect(isNumber({})).to.be.false
      expect(isNumber(undefined)).to.be.false
      expect(isNumber(null)).to.be.false
  })
})
