// 使用commonJs的模块化
const {add} = require('./unit.js');
add(10,20);


//es6模块化
import {add} from './unit'
console.log(add(20,20))


