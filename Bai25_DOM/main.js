//HTML DOM
/* 
    1. Element
    2. Attribute
    3. Text
*/
//----------------------------

//Javascript
/* 
Element
    ID
        getElementById
    class
        getElementsByClassName
    tag
        getElementsByTagName

CSS selector
    querySelector
    querySelectorAll

HTML collection
    document.forms
    document.anchors dành cho thẻ a có attribute : 'name'
    document.images
*/

//Browser : HTML -> DOM -> WEB API

var headingNode = document.getElementById('heading')
console.log(
    {
        element: headingNode
    }
)

var classNotes = document.getElementsByClassName('ClassNote')

console.log(
    {
        element: classNotes
    }
)

var tagName = document.getElementsByTagName('h1')
console.log(
    {
        element: tagName
    }
)

var tagName1 = document.querySelector('#heading')
console.log(
    {
        element: tagName1
    }
)

var select = document.querySelector('html .box .heading-2')
console.log(
    {
        element: select
    }
)

var select2 = document.querySelector('html .box .heading-2:first-child')
console.log(
    {
        element: select2
    }
)

//Lưu ý: querySelector chỉ select được một thằng đầu tiên 
//Nếu muốn select tất cả thì dùng querySelectorAll

var select2 = document.querySelector('html .box .heading-2:nth-child(3)')
console.log(
    {
        element: select2
    }
)
//Như mảng
var select3 = document.querySelectorAll('html .box .heading-2')
console.log(
    {
        element: select3[3]
    }
)

//form

console.log(document.forms)
console.log(document.forms)


console.log(document.anchors)
console.log(document.images)