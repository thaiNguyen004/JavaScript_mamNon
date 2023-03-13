/* Đối tượng validator */

function Validator(options){

    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {}


    //Hàm thực hiện validate
    function validate(inputElements, rule){
        var errorMessage
        //var errorElement = getParent(inputElement, '.form-group')
        var errorElement = getParent(inputElements, options.formGroupSelector).querySelector(options.errorSelector)
                 

        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector]


        //Lặp qua từng rule và kiểm tra
        //Nếu có lỗi thì dừng việc kiểm tra
        for(var i = 0; i < rules.length; ++i){
            errorMessage = rules[i](inputElements.value)
            if(errorMessage) break
        }

        if(errorMessage){
            errorElement.innerText = errorMessage 
            getParent(inputElements, options.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText = ''
            getParent(inputElements, options.formGroupSelector).classList.remove('invalid')

        }
        /* Từ input trỏ đến cha của input đang blur và từ cha
        đi đến thẻ form-message 
        */
       return !errorMessage
    }


    //Lấy element của form cần validate
    var formElement = document.querySelector(options.form)
    if(formElement){


        //loại bỏ tính năng của submit
        formElement.onsubmit = function(e){
            e.preventDefault()

            var isFormValid = true

            //Thực hiện lặp qua từng rules và validate luôn
            options.rules.forEach(function(rule){
                var inputElements = formElement.querySelector(rule.selector)
                validate(inputElements, rule)
                isValid = validate(inputElements, rule)
                if(!isValid){
                    isFormValid = false
                }
            })

                


            if(isFormValid){
                //Trường hợp submit với js
                
                //Sử lý khi không có lỗi
                if(typeof options.onSubmit === 'function'){
                    
                    /* Selector tất cả các input có attribute là name và
                    tất cả các input không có attribute là disable*/
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    
                    var formValues = Array.from(enableInputs).reduce(function(value, input){
                        value[input.name] = input.value
                        return value
                    },{})
                    

                    options.onSubmit(formValues)
                }else{
                    //Trường hợp submit với hành vi mặc định
                    formElement.submit()
                }
            }
        }

        //Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule){

            /* Lưu lại các rules cho mỗi input */

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }else{
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelector(rule.selector)
            if(inputElements){
                /* Tạo ra lắng nghe blur cho các node được truyền vào rules */
                inputElements.onblur = function(){
                    //value  : inputElement.value
                    //test : rule.test
                    validate(inputElements, rule)
                    
                }

                //Xử lý mỗi khi người dùng nhập vào input
                inputElements.oninput = function(){
                    var errorElement = getParent(inputElements, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    inputElements.parentElement.classList.remove('invalid')
                }
            }
            
        })
    }
}

/* Định nghĩa các ràng buộc */
//Nguyên tắc của các rules: 
/* 
    1. Khi có lỗi: trả ra message lỗi
    2. Khi hợp lệ : không trả về gì cả

*/
Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        /* Kiểm tra xem người dùng đã nhập chưa */
        test: function (value) {
            //trim là bỏ đi các dấu cách tránh trường hợp người dùng nhập dấu cách
            return value.trim() ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message){
    return {
        selector: selector,
        /* Kiểm tra xem người dùng nhập đúng email chưa */
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message || 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min, message){
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined :message ||  `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}