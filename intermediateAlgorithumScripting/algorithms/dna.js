console.log('dna.js');
function pairElement(str) {
    var paired = [];

    for(var i = 0; i < str.length; i++){
    	switch(str[i]){
    		case 'G':
    			paired.push(['G', 'C']);
    		break;
    		case 'C':
    			paired.push(['C', 'G']);
    		break;
    		case 'A':
    		  paired.push(['A','T']);
    		break;
    		case 'T':
    			paired.push(['T','A']);
    		break;
    	}
    }
  return paired;
}

// pairElement("GCG"); // should return [["G", "C"], ["C","G"],["G", "C"]]
// pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


//test:
// console.log('test.js');
// //
// //
// (function () {
//   'use strict';
//
//   describe('pairElement', function () {
//       it('translates GCG to [["G", "C"], ["C","G"],["G", "C"]]', function () {
//         expect(pairElement('GCG')).toEqual([["G", "C"], ["C","G"],["G", "C"]]);
//       });
//       it('translates ATCGA to [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', function () {
//         expect(pairElement('ATCGA')).toEqual([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
//       });
//       it('translates TTGAG to [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', function () {
//         expect(pairElement('TTGAG')).toEqual([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
//       });
//       it('translates CTCTA to [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', function () {
//         expect(pairElement('CTCTA')).toEqual([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);
//       });
//   });
// })();
