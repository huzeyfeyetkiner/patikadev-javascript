// css class eklemek veya çıkarmak

let greeting = document.querySelector("#greeting")


greeting.classList.add("text-primary")
greeting.classList.add("title")

greeting.classList.add("new-info","second-class","third-class") //birden fazla class eklemek

greeting.classList.remove("text-primary")
greeting.classList.remove("second-class","third-class") //birden fazla class silmek
console.log(greeting.classList)

console.log(!!2)
