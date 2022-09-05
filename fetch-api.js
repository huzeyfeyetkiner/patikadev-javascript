// ** FETCH.API ile çalışmak
// **https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

fetch("data/settings.json").then(
    response => {
        return response.json()
    }
).then(responseJson => {
    console.log(responseJson);
    console.log(responseJson.userName);
})
let userListDOM = document.querySelector("#userList")

fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
    ).then(
        responseJson =>{
            responseJson.forEach(element => {
                let liDOM = document.createElement("li")
                liDOM.innerHTML = element.title
                userListDOM.append(liDOM)
            });
        }         
    )