// Object Contructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    //method
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`
    }
}

//expresstion function
var User2 =  function(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    //method
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`
    }
}

var author = new User('Nguyên', 'Thái', 'avatar');
var user = new User('Anh', 'Ngọc', 'avatar');

console.log(author)
console.log(user)

console.log(author.getName())
console.log(user.getName())

author.title = 'Chia sẻ kiến thức'
user.comment = 'yeu em :D'

console.log(author.constructor === user.constructor)
