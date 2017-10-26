const { expect } = require('chai')
const { isObject } = require('../index')

describe('isObject', () => {
  it('should return true when an Object is passed as argument', () => {
      expect(isObject({})).to.be.true
      expect(isObject([])).to.be.true
      expect(isObject(null)).to.be.true
      expect(isObject(new Date)).to.be.true
  })

  it('should return false when the argument passed is not an Object', () => {
      expect(isObject(1)).to.be.false
      expect(isObject('')).to.be.false
      expect(isObject(undefined)).to.be.false
  })
})
