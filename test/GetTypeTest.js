const { expect } = require('chai')
const { getType } = require('../index')

describe('getType', () => {
  it('should return a string containing the type of the given argument', () => {
      expect(getType([])).to.be.eq('array')
      expect(getType({})).to.be.eq('object')
      expect(getType('')).to.be.eq('string')
      expect(getType(true)).to.be.eq('boolean')
      expect(getType(() => {})).to.be.eq('function')
      expect(getType(1)).to.be.eq('number')
      expect(getType(new Date)).to.be.eq('date')
  })
})
