//Call back
/* 
    1. Là hàm (function) 
    2. được truyền qua đối số 
*/

function myFunction(param){
    console.log(typeof param)
}
function myFunction(param){
    if(typeof param === 'function'){
        param(42)
    }
}

//Gọi function
// myFunction("Học lập trình")

function mycallback(value){
    console.log('Value: ', value)
}

myFunction(mycallback);


// CallBack phần 2
// 1. Là hàm
// 2. Truyền qua đối số
// 3. Được gọi lại

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]


//Tạo array constructor method map2
Array.prototype.map2 = function(callback){
    var ouput = [];
    var lg = this.length
    for(var i=0; i< lg; i++){
        // callback(this[i], i)
        var result = callback(this[i])
        ouput.push(result)
    }
    return ouput
}

var html = courses.map2(function(course){
    return `<h2>${course}</h2>`
})

console.log(html)

// courses.map(function(course){
//     console.log(course)
// })


// var htmls = courses.map2(function(course){
//     return `<h2>${course}</h2>`
// })
// console.log(htmls.join("  "))

