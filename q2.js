function arrayStringify(a) {
    var string = '';
    for (var i = 0; i < a.length; i++) {
        string += a[i];
    }
    return string;
}
// Test cases
var c1 = [1, 2, 3];
var c2 = [10, 9, 8, 7, 6, 5];
var c3 = [];
console.log(arrayStringify(c1)); // 123
console.log(arrayStringify(c2)); // 1098765
console.log(arrayStringify(c3)); // ''
module.exports = arrayStringify;
/*รหัสนศ. 660610791

ชื่อ-นามสกุล : รัฟฟาน วันอิดริส*/
