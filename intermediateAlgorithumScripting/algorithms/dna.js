console.log('dna.js');
function pairElement(str) {
    //AT, CG

    //split str into an array  [G,C,A]
    //loop through str-array and pair each letter.
    //create multi-dimensional array
        //

        // var str = ['G','C','G'];
        str = str.split('');
        console.log(str);
        var strLen = str.length;
        var innerArr = [];
        var arr = [];
        //AT, CG

        for(var i = 0; i < strLen; i++){
        	innerArr.push(str[i]);//[G]
        	switch(str[i]){
        		case 'G':
        			innerArr.push('C');
        		break;
        		case 'C':
        			innerArr.push('G');
        		break;
        		case 'A':
        		  innerArr.push('T');
        		break;
        		case 'T':
        			innerArr.push('A');
        		break;
        	}
        	console.log('innerArr:');
        	console.log(innerArr);
        	arr.push(innerArr);
        	console.log('arr:');
        	console.log(arr);
        	innerArr = [];
        	console.log(innerArr);
        }

  return arr;
}

// pairElement("GCG"); // should return [["G", "C"], ["C","G"],["G", "C"]]
// pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].


//test:
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
