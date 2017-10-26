const { expect } = require('chai')
const { isObject } = require('../index')

describe('isObject', () => {
  it('should return true when an Object is passed as argument', () => {
      expect(isObject({})).to.be.true
  })

  it('should return false when an Array is passed as argument', () => {
      expect(isObject([])).to.be.false
  })

  it('should return false when a Number is passed as argument', () => {
      expect(isObject(1)).to.be.false
  })

  it('should return false when a String is passed as argument', () => {
      expect(isObject('')).to.be.false
  })

  it('should return false when an Undefined is passed as argument', () => {
      expect(isObject(undefined)).to.be.false
  })

  it('should return false when a Null is passed as argument', () => {
      expect(isObject(null)).to.be.false
  })
})
