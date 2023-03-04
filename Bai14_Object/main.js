
var emailKey = 'email2'

var myInfo = {
    // key: 'value',
    name: 'Thai Nguyen',
    'age': '18',
    address: 'Ha Noi, Viet Nam',
    [emailKey]: 'nguyen@gmail.com', 
    getName: function(){
        return this.name
    }
}

myInfo.email = 'nguyenntph33935@fpt.edu.vn'
//Cách đặt tên key theo các kí tự không cho phép
myInfo['my-email'] = 'nguyenntph33935@fpt.edu.vn'

console.log(myInfo)
console.log(myInfo.name)
console.log(myInfo['my-email'])
//một key không đúng sẽ trả về undefined
console.log(myInfo['nguyên'])


// Cách truy cập tới address của object cách thông thường

myInfo.address

// Cách truy cập tới address của object cách khác

var mykey = 'address'
myInfo[mykey]


// Xóa đi value key trong object
delete myInfo['my-email']
console.log(myInfo)

console.log(myInfo.getName())

//Kiểm tra kiểu dữ liệu
console.log(typeof myInfo.getName)