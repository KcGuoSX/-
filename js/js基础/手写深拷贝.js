
// typeof运算符
// 识别所有值类型
// 判断是否是引用类型（不可再细分）

//深拷贝

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = obj1
obj2.address.city = 'shanghai'
console.log(obj1.address.city);
