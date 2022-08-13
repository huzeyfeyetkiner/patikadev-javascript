

let element = document.querySelector("#greeting")

element.addEventListener("click",domClick);

function domClick(){
    console.log("tiklandı")
    this.style.color == "red" ? this.style.color ="black" : this.style.color ="red"
}

element.addEventListener("mousemove",domMouseOver)

function domMouseOver(){
    this.innerHTML = "Bilgi Degisti" 
}

