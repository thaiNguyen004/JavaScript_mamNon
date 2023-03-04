
//ForEach2
// console.log(Array.prototype)

// Array.prototype.forEach2 = function(callBack){
//     //Cách kiểm tra các phần tử có không nằm trong proto không
//     //dùng hasOwnProperty
    
//     for (var index in this) {
//         if(this.hasOwnProperty(index))
//         {
//             callBack(this[index], index, this)
//         }
//     }
// }


// var courses = new Array(100)
// courses.push('JavaScript')

// var output = courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// })
// console.log(output)

//every2
var course = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,
        isFinish: true
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 2,
        isFinish: true
    },
    {
        id: 3,
        name: 'Java',
        coin: 100,
        isFinish: true
    },
    {
        id: 4,
        name: 'PHP',
        coin: 100,
        isFinish: false
    },
]

Array.prototype.every2 = function(callBack){
    var output = true
    for (const index in this) {
        if(this.hasOwnProperty(index)){
            var result = callBack(this[index], index, this)
            if(!result){
                output = false
                break
            }
        }
    }
    return output
}

var result = course.every2(function(course, index, array){
    return course.isFinish
})

console.log(result)

