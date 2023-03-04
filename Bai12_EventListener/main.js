//dom
var btn = document.getElementById('btn');

//sau 2s mới thực hiện
// setTimeout(function(){
//     btn.onclick = function(){
//         console.log('Việc 1');
    
//         console.log('Việc 2');
    
//         console.log('Việc 3');
//     }
// }, 2000);

//2s sau thì không thực hiện

// btn.onclick = function(){
//     console.log('Việc 1');

//     console.log('Việc 2');

//     console.log('Việc 3');
// }
// setTimeout(function(){
//     btn.onclick = function(){};
// }, 2000)



//eventlistener
//1 eventlistener chỉ chạy được 1 công việc
//loại bỏ từ 'on'
btn.addEventListener('click', function(e){
    console.log(Math.random());
});

function viec2(){
    console.log('Việc 2');
}

function viec1(){
    console.log('Việc 3');
}
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);


setTimeout(function(){
    btn.removeEventListener('click', viec1)
}, 2000)

setTimeout(function(){
    btn.removeEventListener('click', viec2)
}, 3000)
