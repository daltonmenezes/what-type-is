const { expect } = require('chai')
const { isNumber } = require('../index')

describe('isNumber', () => {
  it('should return true when an Number is passed as argument', () => {
      expect(isNumber(1)).to.be.true
  })

  it('should return false when an Array is passed as argument', () => {
      expect(isNumber([])).to.be.false
  })

  it('should return false when a Null is passed as argument', () => {
      expect(isNumber(null)).to.be.false
  })

  it('should return false when a String is passed as argument', () => {
      expect(isNumber('')).to.be.false
  })

  it('should return false when an Undefined is passed as argument', () => {
      expect(isNumber(undefined)).to.be.false
  })

  it('should return false when a Object is passed as argument', () => {
      expect(isNumber({})).to.be.false
  })
})
