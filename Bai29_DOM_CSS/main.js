//Css: background-position
//Js : backgroundPosition  (camelCase)

let boxElement = 
    document.querySelector('h1')
 
//Css 1
// console.log(boxElement.style.color = 'red')


//Css 2
//Write many css

//Example write many css for 'boxElement'
Object.assign(boxElement.style, {
    fontStyle: 'italic',
    color: 'red',
    fontWeight: 'bold'
})

//get
/* 

console.log(boxElement.style.fontStyle)
console.log(boxElement.style.color) 

*/


//Nguyen lam vi du
let box = document.querySelector('.box');
console.log(box.style)
Object.assign(box.style, {
    width: '300px',
    height: '300px',
    background: 'url(https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png)',
    borderRadius: '300px',
    backgroundSize: '100%'
})  


