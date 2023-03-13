var info = document.querySelectorAll('.info')
for(let i = 0; i < info.length ; i++){
    console.log(info[i].id)
}
var btn = document.querySelectorAll('button.order')


var myBag = document.querySelector('.myBag')
//Lấy giá tiền

var plice = [12000,20,2000,1000000]
var tong = 0


var myorder = document.querySelector('.myorder')
var html = `<p>Nguyên</p>`
//button 
btn[0].addEventListener('click', function(){
    tong+= plice[0]
    myBag.innerHTML = `<p>${tong}</p>`
    myorder.insertAdjacentElement("afterbegin", html)
})
btn[1].addEventListener('click', function(){
    tong+= plice[1]
    myBag.innerHTML = `<p>${tong}</p>`
})
btn[2].addEventListener('click', function(){
    tong+= plice[2]
    myBag.innerHTML = `<p>${tong}</p>`
})
btn[3].addEventListener('click', function(){
    tong+= plice[3]
    myBag.innerHTML = `<p>${tong}</p>`
})