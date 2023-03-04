/* 
Loại hàm
    -Built-in
    -Tự định nghĩa
3. Tính chất
    -Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị
*/

// function showDialog() {
//     alert('Hi xin chào các bạn');
// };
// showDialog();

/* Tham số trong hàm

1. Tham số
    - Định nghĩa
    - Kiểu dữ liệu
    - Tình private
    - 1 tham số
    - Nhiều tham số
2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
*/

//Tham số
function writeLog(message) {
    console.log(message);
};

writeLog('Test Message');
writeLog(['CSDL','Js','Java']);

//Kiểu dữ liệu không giới hạn

function writeLog2 (message, message2) {
    if(message){
        console.log(message);
    }

    if(message2){
        console.log(message2);
    }
}

writeLog2('Test');

// Đối tượng arguments
function writeLog3() {
    console.log(arguments);
};

writeLog3('log1', 'log2', 'log3');

function writeLog4() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
};

writeLog4('log1', 'log2', 'log3');

/* Return trong Hàm */

var isComfirm = confirm('Message');
console.log(isComfirm);

function sum(a,b) {
    return a + b;
}
var result = sum(10, 8);
console.log(result);

/* 
Các loại function
    1. Declaration function
        Bắt buộc phải đặt tên
    2. Expression function 
        gán function
*/

//1.
//Gọi trước định nghĩa
showFunction();
showMessage2();
function showFunction() {
    console.log('Declaration function');
}

//2. Lưu ý Expression có thể đặt tên hoặc không
var showMessage2 = function() {
    console.log('Expression function');
}

setTimeout(function autoLogin(){

})

var myObject = {
    myFunction: function() {

    }
}

