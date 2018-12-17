const Shed = require('../domain-models/Shed')

describe('Shed', () => {
  describe('default constructor', () => {
    let shed;

    beforeEach(() => {
      shed = new Shed();
    })

    it('provides a default width', () => {
      expect(shed.width()).toEqual((10).feet());
    })

    it('provides a default length', () => {
      expect(shed.length()).toEqual((10).feet());
    })
  })
})
