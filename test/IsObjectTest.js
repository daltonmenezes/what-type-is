const { expect } = require('chai')
const { isObject } = require('../index')

describe('isObject', () => {
  it('should return true when an Object is passed as argument', () => {
      expect(isObject({})).to.be.true
  })

  it('should return false when the argument passed is not an Array', () => {
      expect(isObject([])).to.be.false
      expect(isObject(1)).to.be.false
      expect(isObject('')).to.be.false
      expect(isObject(undefined)).to.be.false
      expect(isObject(null)).to.be.false
  })
})
