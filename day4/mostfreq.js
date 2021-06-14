
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function most(arr) {
    if (arr.length == 0) 
        return null;
    var count = 0;
    var max1;
    var a = {};
    for (let item of arr1) {
        if (a[item] == null) {
        a[item] = 1;
        } else {
            a[item]++;
        }if (a[item] > count) {
            count = a[item];
            max1 =item
        }
    }
    return max1;

}
console.log(most(arr1))