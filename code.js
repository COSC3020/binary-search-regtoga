const { int32 } = require("jsverify");

function binarySearch(list, element) {
    //list.sort((a, b) => a - b);
    //console.log("inputs: (" + list + ") " + element)
    //console.log("list thing: " + list[list.length-1] + ", element: " + element)
    if (!Array.isArray(list)) {
        return -1;
    }else if ((list[list.length-1] < element)) {
        return -1;
    }else if (list.length == 2 && list[0] == element) {
        return 0;
    }else if (list.length == 3 && list[0] == element) {
        return 0;
    }

    var length = list.length - 1;
    const decimalPart = length/2 - Math.floor(length/2);
    var middle = Math.round(length/2);
    if (decimalPart === 0.5) {
        var length_middle = length - middle + 1;
    }else {
        var length_middle = length - middle;
    }
    
    //console.log(middle);
    //console.log("looking for " + element + ", list: (" + list + "), chop at " + middle);
    
    //check if the the element is larger than the middle of the list
    //if so search for it on the left of the middle
    if (element < list[middle]){
        return binarySearch(list.slice(0, middle), element);
    }

    //else search for it on the right
    else if (element > list[middle]){
        return length_middle + binarySearch(list.slice(middle), element)
    }

    //if the element IS the middle index then we found our boi
    else if (element == list[middle]){
        return middle;
    }
    
    return -1;
}


//console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 4));
//console.log(binarySearch([1,2,3,4,5,8,9,10], 10));
//console.log(binarySearch([1,2,3,4,5,8,9,10], 11));
//console.log(binarySearch([1,9,10], 9));
//console.log(binarySearch([0, 0], 0));
//console.log(binarySearch([7,7,7], 7));
//console.log(binarySearch([4,3], 4));
//console.log(binarySearch([3,4], 4));
//console.log(binarySearch([1,0], 1));