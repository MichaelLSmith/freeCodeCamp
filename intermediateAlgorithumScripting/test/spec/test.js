console.log('test.js');
//
(function () {
  'use strict';

  describe('fearNotLetter', function () {
    it('abce returns d', function () {
        expect(fearNotLetter('abce')).toEqual('d');
    });
    // it('abcdefghjklmno returns i', function () {
    //   expect(fearNotLetter('abcdefghjklmno')).toEqual('i');
    // });
    // it('bcd returns undefined', function () {
    //   expect(fearNotLetter('bcd')).toEqual(undefined);
    // });
    // it('yz returns undefined', function () {
    //   expect(fearNotLetter('yz')).toEqual(undefined);
    // });
  });
})();
