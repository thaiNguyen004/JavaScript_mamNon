/* ClassList property
    1. add
    2. contains
    3. remove
    4. toggle */

var h1Element = document.querySelector('.h1')

//Them 1 class cho element
h1Element.classList.add('blue')

//Them nhieu class cho element
h1Element.classList.add('blue', 'green')

//Kiem tra xem Class element co hay khong 
console.log(h1Element.classList.contains('blue'))

//Xoa class 
h1Element.classList.add('red')


// setTimeout(() =>{
//     h1Element.classList.remove('red')
// }, 3000)

//Toggle
setInterval(() =>{
    h1Element.classList.toggle('red')
}, 100)

//In ra tat ca cac class dang String 
console.log(h1Element.classList.value)

console.log(h1Element.classList)