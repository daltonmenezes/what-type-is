const { expect } = require('chai')
const { isPlainObject } = require('../index')

describe('isPlainObject', () => {
  it('should return true when an Plain Object is passed as argument', () => {
      expect(isPlainObject({})).to.be.true
      expect(isPlainObject(new Date)).to.be.false
  })

  it('should return false when the argument passed is not an Plain Object', () => {
      expect(isPlainObject([])).to.be.false
      expect(isPlainObject(null)).to.be.false
      expect(isPlainObject(1)).to.be.false
      expect(isPlainObject('')).to.be.false
      expect(isPlainObject(undefined)).to.be.false
      expect(isPlainObject(() => {})).to.be.false
  })
})
