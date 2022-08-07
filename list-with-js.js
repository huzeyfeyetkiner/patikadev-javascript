// liste içerisindeki son elamana ulasmak veya eleman eklemek

let lastChild = document.querySelector("ul#list>li:last-child")
let firstChild = document.querySelector("ul#list>li:first-child")

lastChild.innerHTML = "son oge degisti"

firstChild.innerHTML = "ilk ode degisti"

let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement("li")

liDOM.innerHTML = "kendi olusturdugumuz oge"

ulDOM.prepend(liDOM) //listenin başına ekleme yapmak için
//ulDOM.append(liDOM) listenin en sonuna ekleme yapmak için