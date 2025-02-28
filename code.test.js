const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        //console.log("(" + arr + "), " + arr[0])
        if(arr.length > 0) {
            arr.sort(function(a, b) { return a - b; });
            return binarySearch(arr, arr[0]) === 0;
        } else {
            return binarySearch(arr, "foo") === -1;
        }
    });
//console.log("" + testSearch);
jsc.assert(testSearch);
