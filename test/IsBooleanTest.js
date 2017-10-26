const { expect } = require('chai')
const { isBoolean } = require('../index')

describe('isBoolean', () => {
  it('should return true when a Boolean is passed as argument', () => {
      expect(isBoolean(true)).to.be.true
      expect(isBoolean(false)).to.be.true
  })

  it('should return false when the argument passed is not a Boolean', () => {
      expect(isBoolean(null)).to.be.false
      expect(isBoolean('true')).to.be.false
      expect(isBoolean({})).to.be.false
      expect(isBoolean(undefined)).to.be.false
      expect(isBoolean('')).to.be.false
  })
})
