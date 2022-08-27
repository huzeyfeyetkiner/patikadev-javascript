let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ullength = document.getElementsByTagName("li")

for(let i=0;i<ullength.length;i++){
    let closeBtn = document.createElement("span")
    closeBtn.textContent = "\u00D7"
    closeBtn.classList.add("close")
    closeBtn.onclick = remove
    ullength[i].append(closeBtn)
    ullength[i].onclick = check
}

function newElement(){
    
    if(taskDOM.value){
        $(".success").toast("show")
        let liDOM = document.createElement("li")
        liDOM.innerHTML = taskDOM.value
        listDOM.append(liDOM)
        taskDOM.value = ""


        liDOM.onclick = check
        let closeBtn = document.createElement("span")
        closeBtn.textContent = "\u00D7"
        closeBtn.classList.add("close")
        closeBtn.onclick = remove
        liDOM.append(closeBtn)
        liDOM.onclick = check
    }else{
        $(".error").toast("show")
    }
    
}
 
function remove(){
    this.parentElement.remove();
}

function check(){
    this.classList.toggle("checked")
}
 



