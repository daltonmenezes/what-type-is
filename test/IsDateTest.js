const { expect } = require('chai')
const { isDate } = require('../index')

describe('isDate', () => {
  it('should return true when a Date Object is passed as argument', () => {
      expect(isDate(new Date)).to.be.true
  })

  it('should return false when the argument passed is not a Date Object', () => {
      expect(isDate(null)).to.be.false
      expect(isDate('05/09/1989')).to.be.false
      expect(isDate({})).to.be.false
      expect(isDate(undefined)).to.be.false
      expect(isDate('')).to.be.false
  })
})
