/* 
Mảng trong Js
keyword: javascript arrays methods

1.Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var languege = 'js';
var languege2 = 'ruby';
var languege3 = 'java';

//cách 1
var languages = [
    'js',
    'php',
    'ruby',
    'java',
    null,
    undefined,
    function(){
        
    },
    {},
    123
];

console.log(languages);

//1.Tạo mảng

//cách 2
var languages2 = new Array(
    'js',
    'php',
    'ruby',
    'java',
    null,
    undefined,
    function(){
        
    },
    {},
    123
);
console.log(languages2);

//Kiểm tra số phần tử trong mảng
console.log(languages2.length);

//Kiểm tra kiểu dữ liệu
console.log(typeof []);
console.log(typeof {});
//=)))

console.log(Array.isArray({})); /* => false */

console.log(Array.isArray([])); /* => true */

//2. Truy xuất mảng
console.log(languages[2]);



/* LÀM VIỆC VỚI ARRAY
1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing

*/

var ngonNgu = [
    'ruby',
    'java',
    'js'
];

/* 1. To String */
//in
console.log(ngonNgu);
//Chuyển sang dạng String
console.log(ngonNgu.toString());

/*2. Join  */
console.log(ngonNgu.join(', '));

/*3. Pop  */
//Lấy ra phần tử cuối và xóa
console.log(ngonNgu.pop());


/*4. Push  */
//Thêm phần tử vào cuối mảng
console.log(ngonNgu.push('Nguyên'));
console.log(ngonNgu);

/*5. Shift  */
//Lấy ra phần tử đầu mảng và xóa
console.log(ngonNgu.shift());

/* Khi xóa hết sẽ trả về undefined */

/*6. Unshift  */
//Thêm phần tử vào đầu mảng
console.log(ngonNgu.unshift('Đầu mảng', 'Đầu mảng'));
console.log(ngonNgu);

/*7. Splicing */
var ngonNgu2 = [
    'C/C++',
    'JavaScript',
    'PHP',
    'Golang'
]

ngonNgu2.splice(1, 1, 'Dart'); // đặt con trỏ ở vị trí 1 và xóa 1 phần tử
console.log(ngonNgu2);

/*8. Concat */
var ngonNgu3 = [
    'Dart',
    'Ruby'
];
console.log(ngonNgu2.concat(ngonNgu3));

/*9. Slicing */
console.log(ngonNgu2.slice(0, 1));


