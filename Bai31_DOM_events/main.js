//DOM Event
/**
 * UI event, Animation event, focus event, mouse event
 * 1. Click - Khi click chuột vào một element
 * 2. Change - khi thay đổi gì đó trên web, ví dụ gõ phím
 * 3. Copy - Khi copy trên web
 * 4. Drag drop - Hoạt động kéo thả
 * 5. keydown - bấm phím xuống trên bàn phím, tương tự keyup
 * 6. mouseover - khi đưa chuột vàoo
 * 7. mouseout - di chuột ra
 * 8. mouseup - click và nhấc con chuột ra
 * 9. resize - khi thay đổi kích thước của trình duyệt hoặc của element
 * 10. scroll - Khi lăn con chuột
 */

//Attribute event

//Using the element node
/* var h1Element = document.querySelector('.nodeH1')

h1Element.onclick = function(){
    console.log(Math.random())
}

h1Element.onclick = function(e){
    console.log(e.target)
} */

var h1Element = document.querySelectorAll('.nodeH1')

for(var i = 0; i < h1Element.length; i++){
    h1Element[i].onclick = function(e){
        console.log(e.target)
    }
}