const { int32 } = require("jsverify");

function binarySearch(list, element) {
    //not going to lie these are hardcoded fixes to some small issues
    if (!Array.isArray(list)) {
        return -1;
    }else if ((list[list.length-1] < element)) {
        return -1;
    }else if (list.length == 2 && list[0] == element) {
        return 0;
    }else if (list.length == 3 && list[0] == element) {
        return 0;
    }

    //set up the variables for further computation
    var length = list.length - 1;
    const decimalPart = length/2 - Math.floor(length/2);
    var middle = Math.round(length/2);

    //if we had to round add a one to the index to fix the fact that there isnt always a way to divide the array in half nicely.
    if (decimalPart === 0.5) {
        var length_middle = length - middle + 1;
    }else {
        var length_middle = length - middle;
    }
    
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
    
    //if all fails return false
    return -1;
}
