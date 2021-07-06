let obj_1 = new Object();
obj_1.a = "a";
console.log(Object.getOwnPropertyDescriptor(obj_1,"a"));

Object.defineProperty(obj_1,"b",{});
console.log(Object.getOwnPropertyDescriptor(obj_1,"b"));

delete obj_1.b;
obj_1.b = "b";
console.log(obj_1)


/* configurable */
Object.defineProperty(obj_1,"c",{
  configurable: true
});
console.log(obj_1)
delete obj_1.c;
obj_1.c = "c";
console.log(obj_1)

/* enumerable */
Object.defineProperty(obj_1,"d",{
  enumerable: true
});

for(let key in obj_1){
  console.log(key)/*a c d(为什么c会有呢，因为c被描述后，configurable为true，被删掉了，通过obj_1.c赋值的属性描述对象布尔值都为true,可以理解为通常情况下的赋值方式)*/
}


/* get and set */
function _set(obj,key){
  Object.defineProperty(obj,key,{
    configurable: true,
    set(){
      console.log(this)
    }
  });
}
const obj_2 = new Object();
_set.call(obj_2,obj_2,"a");
obj_2.a = 2;/* 触发set函数，打印this对象 */
Object.defineProperty(obj_2,"a",{
  value:"1"
});/* 不会触发set */
console.log(obj_2.a);/* 1 */
console.log(obj_2.b);/* undefined */


function _get(obj,key){
  Object.defineProperty(obj,key,{
    configurable: true,
    get(){
      return "get"
    }
  });
}
const obj_3 = new Object();
_get.call(obj_3,obj_3,"a");
console.log(obj_3.a);/* get */
console.log(obj_3.b);/* undefined */