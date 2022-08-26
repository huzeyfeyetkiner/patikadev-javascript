const PRODUCTS = ["Laptop","Phone","Car","Playstation","Speaker","Mouse","Keyboard"]

PRODUCTS.forEach((product,index,array) => array[index] = `${product.toUpperCase()}`) //product = array[index]

/*
let ulDOM = document.querySelector("#userList")
for(let i=0;i<user.length;i++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = user[i]
    ulDOM.appendChild(liDOM)
}
*/

//yukarıda for döngüsü ile yapılan işlemi aşağıda foreach kullanarak yaptım

let ulDOM = document.querySelector("#userList")

PRODUCTS.forEach(product => {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = product
    ulDOM.appendChild(liDOM)
})