//innerHTML, outerHTML

//1. innerHTML
var boxElement = 
document.querySelector('.box-1')

boxElement.innerHTML = `<p class="pElement">Nội dung </p>`


//2. outerHTML
var boxElement2 = 
document.querySelector('.box-2')

boxElement2.outerHTML = `<h1>Nội dung outerHTML</h1>`

//innerHTML để set element cho thẻ nào thì nó sẽ tạo ra
//element ghi đè tất cả các elememt là con của element đó

//outerHTML để set element cho thẻ nào thì nó sẽ tạo ra element
//ghi đè chính element cha luôn

//Bị thay thế bằng outerHTML rồi nhưng tại sao lại vẫn tồn tại 
//??? => vì biến boxElement2 còn tồn tại trong bộ nhớ
console.log(boxElement2)