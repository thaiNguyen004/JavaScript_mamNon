//include method có sẵn trong array và string

console.log(Array.prototype.includes)
console.log(String.prototype.includes)

var title = 'Nguyễn Thái Nguyên'
console.log(title.includes('Nguyễn'))
console.log(title.includes('Nguyễn', 5))

var courses = ['Java', 'PHP', 'Js']

console.log(courses.includes('PHP',-1))

// Khi truyền số âm sẽ được tính: độ dài + -1
// Nếu độ dài + (số âm) = số âm thì được coi như 0