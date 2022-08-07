//******   DOM içinden öğe seçimi   ******

//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

let title = document.getElementById("title")
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

let link = document.querySelector("#kodluyoruzLink")

link.innerHTML += " degisti"
link.style.color = "red"
link.classList.add("btn")




