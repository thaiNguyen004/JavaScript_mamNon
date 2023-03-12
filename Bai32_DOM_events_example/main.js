//Input / select
//Key up / down


//1. Lấy ra nội dung khi nhập
var inputElement = 
    document.querySelector('input[type="text"]')
console.log(inputElement)

// onchange khi nội dung có sự thay đổi thì e sẽ tiếp nhận sau khi bulor
inputElement.onchange = function(e){
    console.log(e.target.value)
}


var info
// oninput khi gõ tớ đâu nhận tới đó không cần bulur

inputElement.oninput = function(e){
    info = e.target.value
}


// Key up / down


inputElement.onkeydown = function(e){
    // console.log(e)
    console.log(e.target.value) 
}

inputElement.onkeyup = function(e){
    console.log(e.target.value)
}


inputElement.onkeyup = function(e){
    console.log(e.which)

    switch (e.which) {
        case 27:
            console.log('exit')
            break;
    
        default:
            break;
    }
}



//Lắng nghe trực tiếp từ document

document.onkeydown = function(e){
    switch (e.which) {
        case 27:
            console.log("exit")
            break;
        case 13:
            console.log("Enter")
        default:
            break;
    }
}

var checkboxElement = 
    document.querySelector('input[type="checkbox"]')

checkboxElement.onchange = function(e){
    console.log(e.target.checked)
}



var selectElement = 
    document.querySelector('select')

selectElement.onchange = function(e){
    console.log(e.target.value)
}

