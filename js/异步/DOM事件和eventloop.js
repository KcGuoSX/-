


console.log('hi');

setTimeout(function cb1 () { //回调
  console.log('cb1');
}, 5000)

console.log('bye');

//hi bye cb1


<button id='btn1'>提交</button>

console.log('Hi');

$('#btn1').click(function (e) { //回调
  console.log('button clicked'); //点击触发
})

console.log('Bye');

// 两者时机不一样，一个定时回调，一个触发回调
// 异步（setTimeout,ajax等）使用回调，基于event loop
// DOM事件也是用回调，基于event loop
// DOM事件不是异步