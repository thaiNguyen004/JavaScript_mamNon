/* 
CHUỖI TRONG JAVASCRIPT
*/

var fullName = 'Thái Nguyên'; //String
console.log(fullName.length);

var fullName2 = new String('Thái Nguyên'); // Object
console.log(fullName2);
console.log(typeof(fullName2));

var string = 'Nguyên là \'Siêu nhân\'';
console.log(string);

var string2 = 'http:\\\\f8.edu.vn';
/* 
    backslash in javascript
    \\ = \
*/
console.log(string2);

/* 
Kĩ thuật code tiêu chuẩn chỉ code đến kí tự thứ 80 trở xuống theo hàng ngang 
*/

var doanVan = 'Kĩ thuật code tiêu chuẩn chỉ code đến kí tự thứ 80'
+'Kĩ thuật code tiêu chuẩn chỉ code đến kí tự thứ 80'
+'Kĩ thuật code tiêu chuẩn chỉ code đến kí tự thứ 80'
;

var firstName = 'Nguyên';
var lastName = 'Thái';
console.log('Tôi là '+ firstName+' '+lastName);
//cách 2
console.log(`Tôi là: ${firstName} ${lastName}`)

/* 
Làm việc với chuỗi
keyword: Javascript string methods

    1. Length
    2. Find index
    3. Cut string
    4. Replace
    5. Convert to upper case
    6. Convert to lower case
    7. Trim
    8. Split
    9. Get a character by index

*/
var myString = 'Học JS tại F8!';
//1. Length
console.log(myString.length);
//2. Find index
console.log(myString.indexOf('JS', 0));
//console.log(myString.lastIndexOf('JS'));
//search hỗ trợ tìm kiếm theo biểu thức chính quy
console.log(myString.search('JS'));

//3. Cut string
console.log(myString.slice(4,6)); //JS
console.log(myString.slice(4)); //JS tại F8!
//Cắt từ phải sang trái
console.log(myString.slice(-3,-1))
//4. Replace
console.log(myString.replace('JS', 'Javascript'));
   /* đối với replace bình thường chỉ thay thế từ khóa
        đầu tiên 
    $ nếu muốn thay hết tất cả các từ khóa 'JS' bằng 
        Javascript thì sử dụng biểu thức chính quy
    */

var myString1 = 'Học JS tại JS JS JS F8!';
console.log(myString1.replace(/JS/g, 'Javascript')); // thay thế all

//5. Convert to upper case & Convert to lower case
var lastName = 'nGuyÊn';
//VIẾT HOA
console.log(lastName.toUpperCase());
//viết thường
console.log(lastName.toLowerCase());

//6. Trim
//Xóa khoảng trắng

//7. Split
var languages = 'js, php, ruby, java';
console.log(languages.split(', '));

//8. Get a character by index
const myString2 = 'Thai Nguyen';
console.log(myString2.charAt(10));

console.log(myString2[10]); // n
console.log(myString2[101]); // undefinded

console.log(typeof(myString2[10]));