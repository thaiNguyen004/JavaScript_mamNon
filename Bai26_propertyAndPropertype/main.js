//innerText, textContent


var select = document.querySelector('.headingText')

// //1. innerText
// console.log(select.innerText)

// //2. textContent
// console.log(select.textContent)

//set nội dung text cho một element bằng innerText


/*  1. innerText sẽ set text đúng như những gì ở js, 
các enter hoặc khoảng trống vẫn được hiểu
    2. textContent sẽ set text như cách mà DOM đọc code
*/



select.textContent = `Đoạn văn

bản mới`


select.innerText = `Đoạn văn

bản mới`

/**
 * 1. Dùng innerText để console.log thì nó sẽ hiện đúng như những gì 
 * nhìn thấy ở js
 * 2. Dùng textContent sẽ bỏ qua các kí tự khoảng trống
 * 
 * Lưu ý: nếu dùng inner hay content để console.log
 * text ở file HTML thì lại khác 
 * 1. textContent sẽ lấy ra tất cả textNode bao gồm cả 
 * khoảng trắng và <style></style>   
 * 2. innerText sẽ lấy ra text như những gì bạn nhìn thấy ở web
 */


console.log(select.innerText)
console.log(select.textContent)

