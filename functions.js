// Arrow Functions -> ES6 ile gelen farklı bir fonksiyon yazım şekli


// let func = (sayi1,sayi2,sayi3) => sayi1*sayi2*sayi3;

//***** yukarıdaki fonksiyon ile aşağıdaki fonksyion birebir aynı işleve sahip

// function topla(sayi1,sayi2,sayi3) {
//     return sayi1*sayi2*sayi3;
// }


// console.log(func(10,5,3))
// console.log(topla(10,5,3))


// let experience = prompt("Kaç yıllık iş tecrübeniz var?:")
// //**** koşula göre iki farklı fonksiyon çalıştırmak
// let developper = experience > 5 ? ()=> alert("Tecrübelisin") :() => alert("Tecrübesizsin")
// developper();


function greetings(firstName="", lastName="") {
    return `Hello ${firstName} ${lastName} `
}

function domIdWriteNames(id,info){
    let domObj = document.querySelector(`#${id}`)
    domObj.innerHTML = info
}

domIdWriteNames("greeting",greetings("Huzeyfe","Yetkiner"))
