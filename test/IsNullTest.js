const { expect } = require('chai')
const { isNull } = require('../index')

describe('isNull', () => {
  it('should return true when an Null is passed as argument', () => {
      expect(isNull(null)).to.be.true
  })

  it('should return false when an Array is passed as argument', () => {
      expect(isNull([])).to.be.false
  })

  it('should return false when a Number is passed as argument', () => {
      expect(isNull(1)).to.be.false
  })

  it('should return false when a String is passed as argument', () => {
      expect(isNull('')).to.be.false
  })

  it('should return false when an Undefined is passed as argument', () => {
      expect(isNull(undefined)).to.be.false
  })

  it('should return false when a Object is passed as argument', () => {
      expect(isNull({})).to.be.false
  })
})
