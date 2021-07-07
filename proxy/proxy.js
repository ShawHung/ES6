const proxyA = new Proxy({},{
  get(target,name){
    console.log(name+"get")
    return "get";
  }
});

const proxyB = Proxy.revocable(proxyA,{
  set(target,prop,val){
    console.log("I'm"+val);
    return "a"
  }
});

console.log(proxyB.proxy["a"])
proxyB.proxy["b"] = "b"
console.log(proxyB.proxy["b"])
proxyB.revoke()
console.log(proxyB.proxy["b"])


