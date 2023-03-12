/**1. Event listener
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance 
 */

//1. Sử lý nhiều việc khi một event xảy ra
//2. Lắng nghe / hủy bỏ lắng nghe

var btn = document.getElementById('btn')

/* Sử lý công việc và hủy bỏ sử lý công việc
btn.onclick = function(){
    //Viec 1
    console.log("Viec 1")
    //Viec 2
    console.log("Viec 2")
    //Viec 3
    console.log("Viec 3")
}
setTimeout(() => {
    btn.onclick = function(){}
}, 3000);
*/

//EventLister chỉ có một hàm trong một addEventLister nhưng lại được add nhiều lần
function viec1(){
    console.log("Viec 1")
}
function viec3(){
    console.log("Viec 3")
}
btn.addEventListener('click', viec1)

// btn.addEventListener('click', function(e){
//     console.log("Viec 2")
// })

btn.addEventListener('click', viec3)


setTimeout(() => {
    btn.removeEventListener('click', viec1)
}, 3000);

