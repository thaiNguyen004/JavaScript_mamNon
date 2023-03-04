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

var totalCoin = course2.reduce(function(total, course2, index){
    
    console.log(index, total, course2)
    return total + course2.coin
}) //initial value
console.log(totalCoin)
//Khi không khởi tạo initial value thì mặc định accumulator là ob đầu
//trong array và ở lần đầu thì course2 ở lần đầu là ob thứ 2 trong arr


var number = [100,200,300,400,500]

var totalNumber = number.reduce(function(total, number){
    return total + number
},0)

console.log(totalNumber)


//Bài tập làm phẳng mảng từ mảng sâu
var dethArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

var platArray = dethArray.reduce(function(accumulator, Value){
    return accumulator.concat(Value)
},[])

console.log(platArray)
//Lấy ra khóa học đưa vào mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
]

var listCourse = topics.reduce(function(accumulator, course){
    return accumulator.concat(course.courses)
},[])
console.log(listCourse)

var list = listCourse.map(function(course){
    return course.title
})

console.log(list.join('  '))