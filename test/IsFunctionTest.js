const { expect } = require('chai')
const { isFunction } = require('../index')

describe('isFunction', () => {
  it('should return true when a Function is passed as argument', () => {
      expect(isFunction(()=>{})).to.be.true
      expect(isFunction(function(){})).to.be.true
  })

  it('should return false when the argument passed is not a Function', () => {
      expect(isFunction(null)).to.be.false
      expect(isFunction('05/09/1989')).to.be.false
      expect(isFunction({})).to.be.false
      expect(isFunction(undefined)).to.be.false
      expect(isFunction('')).to.be.false
  })
})
