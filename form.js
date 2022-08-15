// FORM SUBMIT

let formDOM = document.querySelector("#userForm")

formDOM.addEventListener("submit",formSubmit)



function formSubmit(event){
    event.preventDefault() //default işlemi engelledik
    console.log("işlem gerçekleşti")
    let scoreInputDom = document.querySelector("#score")
    console.log(scoreInputDom.value)
    localStorage.setItem("score",scoreInputDom.value)
}
