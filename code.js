const { int32 } = require("jsverify");
//I added some default values so that i can keep track of where we are in the array,
//this makes it possible to look ahead and find if we are returning the smallest possible value for our index
//there were probbly other ways to do this but this seemd pretty easy to implement.
function binarySearch(list, element, left = 0, right = list.length - 1) {
    //base case when the search goes out of bounds
    if (left > right) {
        return -1;
    }

    //find the middle
    var middle = Math.floor((left + right) / 2);

    if (list[middle] == element) {
        // Check left of where we are currently to see if there is a more minimal value
        while (middle > left && list[middle - 1] == element) {
            middle -= 1;
        }
        return middle;
    } else if (element < list[middle]) {
        //if is on the left
        return binarySearch(list, element, left, middle - 1);
    } else {
        //if is on the right
        return binarySearch(list, element, middle + 1, right);
    }
}

//console.log(binarySearch([1,2,3,3,4,5,6,7,8,9,1515], 3));
