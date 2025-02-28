// Blocking Code  (synchronous code)

console.log("order is placed...")
console.log("order is on the way")
console.log("order is succesfully delivered")

//Non Blocking Code (asynchronous code)
setTimeout(()=>{
    console.log("order is rejected...")
},2000)
console.log("order is successfully delivered....")

let orderstatus = (status)=>{
    console.log(`your order is ${status}`)
}
orderstatus("Cancelled...");