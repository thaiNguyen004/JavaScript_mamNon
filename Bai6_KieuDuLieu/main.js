/* 
1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

//Number type
var a = 1;
var b = 2;
var c = 2.5;

//String type
    //cách hiện dấu ' trong '' thì thêm \
    //còn nếu thêm ' vào trong "" thì thoải mái
var fullName = 'Thái \'Nguyên';
console.log(fullName)

//Boolean type
var isSuccess = true;

//Undefined type
var age;
console.log(age);

//Null
var isNull = null
console.log(isNull)

//Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id') // unique
console.log(id===id2); // false
 
//Function
var myFunction = function(){
    alert('Đây là function')
}
myFunction()


//Object type
var myObject = {
    name: 'Nguyễn Thái Nguyên',
    age: 19,
    address: 'Hà Nội',
    myFunction: function(){
        
    }
}
console.log('myFunction', myObject)

var myArray = ['Js','Java','PHP']
console.log(myArray)

//Cách kiểm tra kiểu dữ liệu
console.log(typeof(myObject)) 
console.log(typeof(fullName))
console.log(typeof(isNull))