var course2 = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 2
    },
    {
        id: 3,
        name: 'Java',
        coin: 100
    },
    {
        id: 4,
        name: 'PHP',
        coin: 100
    },
]

//REDUCE
var total = course2.reduce(function(){

}, 0);

var i = 0;

//cách viết 2
function coinCourse (accumulator, curentValue, currentIndex, orginArray){
    //accumulator:  biến lưu trữ hiện ra trong lần lặp đầu tiên , từ sau accumulator sẽ nhận giá trị return
    //curentValue: giá trị hiện tại
    //currentIndex: vị trí của currentValue
    //orginArray: mảng đang trỏ tới reduce
    i++
    var total = accumulator + curentValue.coin
    console.table({
        'lượt chạy': i,
        'Biến lưu trữ': accumulator,
        'Giá khóa học': curentValue.coin,
        'Tích trữ được': total
    })

    return total
}
var totaL = course2.reduce(coinCourse, 0)

{


//Biến lưu trữ
var totalCoin = 0

//Lặp qua các phần tử
for (const course of course2) {
    // Thực hiện việc lưu trữ
    totalCoin+=course.coin
}

console.log(totalCoin)

}