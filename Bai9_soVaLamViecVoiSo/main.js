//keyword: javascript number methods
var age = 18;
var PI = 3.14;

var otherNumber = new Number(8);

// recommend nên dùng cách 1 (tạo biến tránh new)

console.log(typeof age);
console.log(typeof otherNumber);

var result = 20 / 'ABC';
console.log(result); //=> NaN: đại diện cho 1 số không hợp lệ

//Cách kiểm tra khi nào thì NaN
console.log(isNaN(result)); //=> true

//Chuyển 
console.log(typeof(age.toString()));

var age_string = age.toString();

//Làm tròn số thập phân
//Khi dùng toFixed là chuyển thành String
/* 
3.4 -> 3
3.5 -> 4
*/

var soLinhTinh = 3004.42563633434
console.log(PI.toFixed());


console.log(soLinhTinh.toFixed(3));