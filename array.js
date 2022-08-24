let domain = "kodluyoruz"
let isActive = false
let items = [1, 2, 3, isActive, domain]

console.log(items)

// items += [1, 2, 3]
console.log(items)

let emptyArray = []

console.log(items.length)
console.log(emptyArray.length)
console.log(typeof(items))
console.log(Array.isArray(items))
console.log(Array.isArray(isActive))

console.log(items[ Math.floor(items.length / 2) ])
