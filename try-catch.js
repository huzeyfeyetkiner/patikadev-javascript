// **HATA YÖNETİMİ TRY-CATCH

let items


try{
    items.forEach(element => {
        console.log(element);
    });    
    
}catch(error){

    console.log("error:",error);
    items = [1,2,4]
    items.forEach(element => {
        console.log(element);
    });
    
}



console.log("Hata yönetimi düzgün çalışıyor.");

let info = "kodluyoruz"
console.log(info);
