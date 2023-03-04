//querySelectorAll => nodeList
var boxNodes = 
document.querySelectorAll('.box-1')
console.log(boxNodes)

//Cách select tới các li là con của box-1

// var liList = boxNodes.querySelectorAll('li')


//Để select chúng ta không nhất thiết phải đi từ document
//mà chúng ta có thể đi qua các element khác để trỏ vào các
//element con của nó


//getElementsByTagName => HTML collection

var listh1 = document.getElementsByTagName('h1')[1]
console.log(listh1)

console.log(document.forms)