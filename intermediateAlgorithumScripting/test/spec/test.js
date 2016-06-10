console.log('test.js');
//
//
(function () {
  'use strict';

  describe('pairElement', function () {
      it('translates GCG to [["G", "C"], ["C","G"],["G", "C"]]', function () {
        expect(pairElement('GCG')).toEqual([["G", "C"], ["C","G"],["G", "C"]]);
      });
      it('translates ATCGA to [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', function () {
        expect(pairElement('ATCGA')).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
      });
      it('translates TTGAG to [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', function () {
        expect(pairElement('TTGAG')).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
      });
      it('translates CTCTA to [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', function () {
        expect(pairElement('CTCTA')).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
      });
  });
})();
