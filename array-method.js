let items = [1, 2, 3, 4, 5]

let maleUsers = ["Ahmet","Mehmet","Ali"]
let femaleUsers = ["Zeynep","Ayşe","Merve"]

items.unshift(femaleUsers)

console.log(items);

items.push(maleUsers)

console.log(items);

console.log(items.length);

console.log(items[0]);
console.log(items[0]["length"]);
console.log(items[0].length);
console.log(items[0][0]);

let newItems = items.splice(1,5)
console.log(newItems);
console.log(items);

items.unshift("lorem")
items.push("ipsum")

console.log(items[items.indexOf("ipsum")])

//array copy
let copyItems = items //kopyalamıyo
console.log(items);

copyItems.pop()
console.log("Copy items:",copyItems);
console.log("items:",items);

copyItems = items.slice() //kopyalıyor
copyItems.pop()
console.log("kopyalandıktan sonra ve son itemi alındıktan sonraki hali:",copyItems);
console.log("kopyalanmadan önceki hali",items);


let copyItems2 = [...items] //ES6 kopyalama
console.log(copyItems2);

let allUsers = [...maleUsers, ...femaleUsers]
console.log(allUsers);

console.log(allUsers.toString());
console.log(allUsers.join(" --- "));

allUsers.splice(allUsers.length,0,"Melisa")
allUsers.splice(Math.floor(allUsers.length/2),0,"Lorem")
console.log(allUsers);