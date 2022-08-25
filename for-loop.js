
let ulDOM = document.querySelector("#userList")
let user = ["lorem","ipsum","dolor"]

for(let i=0;i<user.length;i++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = user[i]
    ulDOM.appendChild(liDOM)
}