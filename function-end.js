//bölüm sonu egzersizi

let counter = localStorage.getItem('counterInfo') ? Number(localStorage.getItem('counterInfo')) : 0


let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let numberText = document.querySelector("#number-text")

numberText.innerHTML = counter

increase.addEventListener("click",clickEvent)
decrease.addEventListener("click",clickEvent)
//localStorage.setItem('counterInfo',counter)


function clickEvent(){
    this.id == "increase" ? counter++ : counter--
    localStorage.setItem('counterInfo',counter)
    numberText.innerHTML = counter
}

