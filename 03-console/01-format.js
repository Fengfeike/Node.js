#!/usr/bin/node
const user = { 

  name: '冯菲珂',
  age: '20',
  qq:   '2088399108'
};

const log = console.log;

// 三种占位符
 log('name: %s', user.name);   // 字符串类型
 log('age: %d', user.age);     // 整数类型
 log('JSON: %j', user);        // 对象类型

 log('qq: %s', user.qq);       // 输出方式一：占位符输出
 log('qq:', user.qq);          // 输出方式二：逗号间隔，多变量输出
 log('qq: ' + user.qq);        // 输出方式三：拼接字符串输出
 log(`qq: ${user.qq}`);        // 输出方式四：模板字符串输出

 console.error('Error! something wrong!');
