

//js是单线程运行的
//异步要基于回调来实现
//eventloop就是异步回调的实现原理

// js是如何执行的？

// 从前到后，一行一行执行
// 如果某一行执行报错，则停止下面代码的执行
// 先把同步代码执行完，再执行异步

console.log('hi');

setTimeout(function cb1 () {
  console.log('cb1');
}, 5000)

console.log('bye');

//hi bye cb1


// 一旦同步代码执行完，浏览器内核会启动eventloop机制

// 同步代码一行一行放到call stack执行
// 遇到异步，会先记录下来，等待时机触发（定时、网络等）
// 时机到了就移动到Callback Queue里
// 如果call satck为空（即同步代码执行完毕）Eventloop开始工作
// 轮询查找Callback Queue，如果有就移动到Call Stack执行
// 然后继续轮询查找（永动机一样）