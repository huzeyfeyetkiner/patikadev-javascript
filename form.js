
let userFormDOM = document.querySelector("#userForm")

userFormDOM.addEventListener("submit",formHandler)

const alerDOM = document.querySelector("#alert")

const alertFunc = (title,message,className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function formHandler(event){
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value)
    {
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value = "" //verileri gönderdikten sonra sıfırladık
        SCORE.value = ""
    }else{
        console.log("HATA")
        alerDOM.innerHTML = alertFunc("DİKKAT!","Hatalı ya da eksik bilgi girdiniz","danger")
    }
    
}


let userLıstDOM = document.querySelector("#user-list")

const addItem = (userName,score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    userLıstDOM.append(liDOM)
}

