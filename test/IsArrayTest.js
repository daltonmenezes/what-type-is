const { expect } = require('chai')
const { isArray } = require('../index')

describe('isArray', () => {
  it('should return true when an array is passed as argument', () => {
      expect(isArray([])).to.be.true
  })

  it('should return false when an Object is passed as argument', () => {
      expect(isArray({})).to.be.false
  })

  it('should return false when a Number is passed as argument', () => {
      expect(isArray(1)).to.be.false
  })

  it('should return false when a String is passed as argument', () => {
      expect(isArray('')).to.be.false
  })

  it('should return false when an Undefined is passed as argument', () => {
      expect(isArray(undefined)).to.be.false
  })

  it('should return false when a Null is passed as argument', () => {
      expect(isArray(null)).to.be.false
  })
})
