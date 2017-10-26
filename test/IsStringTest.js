const { expect } = require('chai')
const { isString } = require('../index')

describe('isString', () => {
  it('should return true when a String is passed as argument', () => {
      expect(isString('')).to.be.true
  })

  it('should return false when an Array is passed as argument', () => {
      expect(isString([])).to.be.false
  })

  it('should return false when a Null is passed as argument', () => {
      expect(isString(null)).to.be.false
  })

  it('should return false when a Number is passed as argument', () => {
      expect(isString(1)).to.be.false
  })

  it('should return false when an Undefined is passed as argument', () => {
      expect(isString(undefined)).to.be.false
  })

  it('should return false when an Object is passed as argument', () => {
      expect(isString({})).to.be.false
  })
})
