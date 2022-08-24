// let domain = "kodluyoruz"
// let isActive = false
// let items = [1, 2, 3, isActive, domain]

// console.log(items)

// // items += [1, 2, 3]
// console.log(items)

// let emptyArray = []

// console.log(items.length)
// console.log(emptyArray.length)
// console.log(typeof(items))
// console.log(Array.isArray(items))
// console.log(Array.isArray(isActive))

// console.log(items[ Math.floor(items.length / 2) ])

let items = [10, 20, 30, 40, ]
console.log("items ilk hali : ",items)

items.push(50)
console.log(items);

items.unshift(5)
console.log(items);


let lastItem = items.pop()
console.log(lastItem, items)

let firstItem = items.shift()
console.log(firstItem, items)

items[0] = 555
items[items.length -1] = 1
console.log(items);




