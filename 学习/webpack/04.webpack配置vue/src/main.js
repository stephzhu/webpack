// 使用commonJs的模块化
// const {add} = require('./unit.js');
// add(10,20);


//es6模块化
import {add} from './unit.js'
console.log(add(20,20))


//加载css
require('./css/normal.css');

//加载less
require('./css/special.less');


//使用vue
import Vue from 'vue'

//import App from './vue/app'


import App from './vue/App.vue'


new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})

// const cpn={
//     template:`
//         <div>
//             <h1>{{message}}</h1>
//             <button>按钮</button>
//         </div>
//     `,
//     data(){
//         return{
//         message:'你好啊'
//         }
//     }
// }
//
// new Vue({
//     el:'#app',
//     template:'<cpn/>',
//     components:{
//         cpn
//     }
// })



