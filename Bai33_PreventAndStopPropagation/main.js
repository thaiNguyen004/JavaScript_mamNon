//Dom events

/**
 * 1. preventDefault
 * 2. stopPropagation
 */

//Lấy thẻ a bằng anchors thì thẻ a phải có name
/* var aElement = document.anchors
console.log(aElement) */

var aElement = document.links
console.log(aElement)

for(var i = 0; i < aElement.length; ++i){
    aElement[i].onclick = function(e){
        if(!e.target.href.startsWith('https://www.w3schools.com')){
            e.preventDefault()
        }
    }
}

var ulElement = document.querySelector('ul')

ulElement.onmousedown = function(e){
    e.preventDefault()
}

ulElement.onclick = 
function(e){
    console.log(e.target)
}


// Ngăn chặn hành vi nổi bọt

document.querySelector('div').onclick =
function (){
    console.log("DIV")
}

document.querySelector('button').onclick =
function (e){
    e.stopPropagation()
    console.log("Click me")
}