
let item = document.querySelector("#ehliyet")

let = userName = prompt("Kullanıcı adı girin")
let = age = prompt("Yaşınızı girin")

if(userName && age >18){
    item.innerHTML = "Ehliyet alabilirsiniz"
}else if(!userName){
    item.innerHTML = "Kullanıcı adı bilgisi eksik"
}else if(age<18){
    item.innerHTML = "Yaş bilgisi hatalı veya 18 yaşından küçüksünüz"
}


