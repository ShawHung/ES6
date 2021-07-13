// const Obj_getP_one = {
//   key:"name",
//   sayKey(){
//     console.log("construct")
//   }
// };

// Obj_getP_one.prototype = {
//   sayKey(){
//     console.log("proto")
//   }
// }

// const Obj_getP_two = Object.create(Obj_getP_one);
// console.log(Object.getPrototypeOf(Obj_getP_two));
// Obj_getP_two.sayKey();
// Obj_getP_two.prototype.sayKey();

// const proxy_one = new Proxy(Obj_getP_one,{
//   getPrototypeOf(target){
//     return {};
//   }
// });
// console.log(Object.getPrototypeOf(proxy_one));



// const obj_setpro_one = {
//   name:"c"
// };

// const proxy_two = new Proxy(obj_setpro_one,{
//   setPrototypeOf(target,prototype){
//     prototype.set = true;
//     Object.setPrototypeOf(target,prototype)
//     return true;
//   }
// });

// Reflect.setPrototypeOf(proxy_two,{name:"a"})
// console.log(Reflect.getPrototypeOf(proxy_two));

// Object.setPrototypeOf(proxy_two,{name:"b"})
// console.log(Object.getPrototypeOf(proxy_two));

const obj_apply = {
  name:'name',
  say(){
    console.log({...arguments})
    console.log(this.name);
  }
}

const proxy_three = new Proxy(obj_apply.say,{
  apply(target,thisArg,args){
    console.log("aaa")
    target.call(thisArg,"a","b","c");
    return "a";
  }
})

proxy_three("1","2","3");

global.name = "window"

proxy_three("1","2","3");