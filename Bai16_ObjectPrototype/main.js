
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    //method
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`
    }
}

//tạo ra một thuộc tính thêm cho constructor
User.prototype.ngaySinh = '12'
//Khi được thêm một prototype thì lúc in ra 
//thuộc tính đó sẽ không hiện ra ở phần user
//mà sẽ hiện ở phần proto

User.prototype.getClassName = function(){
    return this.getName;
}

var user = new User('Nguyên', 'Thái', 'avatar')
var user2 = new User('Nguyên', 'Thái', 'avatar')
console.log(user)