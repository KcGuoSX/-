

// typeof能判断哪些类型


// 何时使用=== 何时使用==


// 值类型和引用类型的区别

// 值类型 各过各的 引用类型会相互影响
// 值类型
let a = 100
let b = a
a = 200
console.log(b); //100

//常见的值类型
const q = undefined
const s = 'abc'
const n = 100
const k = true
const z = Symbol('s')

// 引用类型
let c = { age: 200 }
let d = c
d.age = 21
console.log(c.age); //21

// 手写深拷贝