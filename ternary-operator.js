// ******** ternary operator ile short if kullanimi **************

// eger kullanici adın varsa yazdir yoksa kullanıcı bilginiz bulunmadı yaz

// koşul ? dogruysa : yanlışssa

let userName = prompt("Kullanıcı adı girin:")
let info = document.querySelector("#info")

info.innerHTML = `${userName.length > 0 ? userName : "Kullancı adı bilgisi bulunamadı"}`




// *** Patika bölüm sonu testi sorusu
// var money;
// var canBuy = 
//     (money < 17) ? "Satın alamazsın..":
//     (money > 30) ? "Satın alabilirsin..":
//     "Para miktarını girmen gerekmektedir..";

// console.log(canBuy) 