//from: http://www.mojavelinux.com/articles/javascript_hashes.html

//removing dupes using hash table: https://dreaminginjavascript.wordpress.com/2008/08/22/eliminating-duplicates/

//From: http://www.algoqueue.com/algoqueue/default/view/3538944/remove-duplicates-in-an-integer-array-using-additional-data-structure
//Create an empty Hash Table.
// Take the first element of the array and check whether it is in the Hash Table. If not, put the element in the Hash Table. If yes, return the element.
// Repeat the above step for all the elements of the array.

function HashTable(obj)
{
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }
    
    var previous = undefined;

    this.setItem = function(key, value)
    {
        // var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    };
    
    this.getItem = function(key) 
    {
        return this.hasItem(key) ? this.items[key] : undefined;
    };
    
    this.hasItem = function(key)
    {
        return this.items.hasOwnProperty(key);
    };
    
    this.removeItem = function(key)
    {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.item[key];
            return previous;
        }
        else {
            return undefined;
        }
    };
    
    this.keys = function()
    {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
    };
    
    this.values = function()
    {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        return values;
        }
    };
    
    this.each = function(fn) 
    {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    };
    
    this.clear = function()
    {
        this.items = {};
        this.length = 0;
    };

}

var h = new HashTable({one: 1, two: 2, three: 3, "im no 4": 4});

console.log('original length: ' + h.length);
console.log('value of key "one": ' + h.getItem('one'));
console.log('has key "foo"? ' + h.hasItem('foo'));
console.log('previous value of key "foo": ' + h.setItem('foo', 'bar'));
console.log('length after setItem: ' + h.length);
console.log('value of key "foo": ' + h.getItem('foo'));
console.log('value of key "im no 4": ' + h.getItem("im no 4"));
h.clear();
console.log('length after clear: ' + h.length);

// var h = new Object(); // or just {}
// h['one'] = 1;
// h['two'] = 2;
// h['three'] = 3;

// // show the values stored
// for (var k in h) {
//     // use hasOwnProperty to filter out keys from the Object.prototype
//     if (h.hasOwnProperty(k)) {
//         console.log('key is: ' + k + ', value is: ' + h[k]);
//     }
//     console.log(h.length);
// }

// var a = new Array(); // or just []
// a[0] = 0;
// a['one'] = 1;
// a['two'] = 2;
// a['three'] = 3;

// console.log(a.length);

// for (var k in a) {
//     if (a.hasOwnProperty(k)) {
//         console.log(('key is: ' + k + ', value is: ' + a[k]));
//     }
// }
// console.log(a.length);
// console.log(a);
        

