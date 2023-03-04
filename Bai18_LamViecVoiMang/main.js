/* 
    Lam viec voi array
    array method
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var course = [
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

//foreach
course.forEach(function(course, index){
    console.log(index,course)
});
//every tat ca cac phan tu dung het thi se dung
var isFree = course.every(function(course){
    //Dieu kien dung thi se duyet phan tu tiep theo
    //Con dieu kien sai thi se return luon va ngung
    return course.coin === 0
});

console.log(isFree)


//Some - chi can mot phan tu dung trong mot mang

var isFree2 = course.some(function(course){
    //Dieu kien dung thi se duyet phan tu tiep theo
    //Con dieu kien sai thi se return luon va ngung
    return course.coin === 0
});

console.log(isFree2)

//find
//Chi tim mot dap an dung thoi
var isCourse = course.find(function(cac){
    return cac.name === "PHP" 
})
//Khi nao dung se ngung

console.log(isCourse)

//filter 
//Tim va hien tat ca cac phan tu dung 
var fullfind = course.filter(function(cac){
    return cac.coin === 100
})

console.log(fullfind)

//

console.log("Array map method")

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

var fullMap = course2.map(function(course2, index, originArray){
    return {
        id: course2.id,
        name: `Khoa hoc: ${course2.name}`,
        coin: course2.coin,
        cointText: `Gia: ${course2.coin}`,
        index: index,
        originArray: originArray
    }
})

var namee = course2.map(function(course2){
    return `<h2>Khoa hoc: ${course2.name} </h2>`
})

// console.log(fullMap)
console.log(namee.join(''))


