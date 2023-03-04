/* 
    === 
    !== 
    (so sánh tuyệt đối)
*/

var a = 1;
var b = '1';
console.log(a === b)


/* 
Toán tử logical và câu lệnh điều kiện if
*/
// var a = 1;
// var b = 2;

// var result  = a < b;
// console.log(result)


/* 
    0
    ''
    null
    undefined
    NaN
    false
*/

var a = 1;
var b = 2;

var result  = 'A' || null || 'B'
console.log(result)

if (result) {
    console.log('Điều kiện đúng')
} else {
    console.log('Điều kiện sai')
}
