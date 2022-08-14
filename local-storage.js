// ********localstorage ile veri ekleme ve silme
//localStorage.setItem("userName1","Huzeyfe")
//localStorage.setItem("userName2","Huzo")
//localStorage.getItem('userName')
// localStorage.removeItem('userName')
// localStorage.clear()


let user = {userName:"huzo", isActive:true}

// localStorage.setItem('userInfo', JSON.stringify(user))

// let userInfo = localStorage.getItem('userInfo')
// console.log(userInfo)

// userInfo = JSON.parse(userInfo)
// console.log(userInfo)


let numbers = [1,2,3,4,user]
localStorage.setItem("newItem",JSON.stringify(numbers))
let items = localStorage.getItem("newItem")
console.log(items)
items = JSON.parse(items)
console.log(items)



