//Math là đối tượng được định nghĩa 
/* 
    Math object methods

    1.Math.PI
    2.Math.round()
    3.Math.abs()
    4.Math.ceil()
    5.Math.floor()
    6.Math.random()
    7.Math.min()
    8.Math.max()
*/

///1.Math.PI
console.log(Math.PI)

///2.Math.round()
console.log(Math.round(1.4))
//đưa về số nguyên có sự ưu tiên

///3.Math.abs()
console.log(Math.abs(-4))

///4.Math.ceil()
//Làm tròn trên
console.log(Math.ceil(4.0000001))


///5.Math.floor()
//Làm tròn dưới
console.log(Math.floor(5.9))

///6.Math.random()
//Kết hợp với floor
console.log(Math.floor(Math.random()*100))

//Ví dụ random
var random = Math.floor(Math.random() * 100)
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
    '60 coin'
]

if(random<5){
    console.log("cường hóa thành công")
}
console.log(bonus[random])


///7.Math.min()
console.log(Math.min(-100, 12, 43,25,55))

///8.Math.max()
console.log(Math.max(-100, 12, 43,25,55))