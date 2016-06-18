console.log('test.js');
//
//
(function () {
  'use strict';

  describe('fearNotLetter', function () {
    it('abce returns d', function () {
        expect(pairElement('abce')).toEqual('d');
    });
    it('abcdefghjklmno returns i', function () {
      expect(pairElement('abcdefghjklmno')).toEqual('i');
    });
    it('bcd returns undefined', function () {
      expect(pairElement('bcd')).toEqual(undefined);
    });
    it('yz returns undefined', function () {
      expect(pairElement('yz')).toEqual(undefined);
    });
  });
})();
