




let laptop1 = {
    brand: "Apple",
    model: "MacBook pro",
    "2kg":2,
    // model-name:"MacBook pro" **hatalı yazım
    model_name: "MacBook pro"
}

console.log(laptop1);
console.log(laptop1.model);
console.log(laptop1["2kg"]);

console.log(laptop1["model"]);
console.log(laptop1["brand"]);


laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"

console.log(laptop1.brand);

//yeni bilgi eklemek
laptop1.version = "10.15.7"


console.log(laptop1);
console.log(laptop1.version);


//key değerlerine ulaşmak
keys = Object.keys(laptop1)

console.log(Object.keys(laptop1));

keys.forEach(key => {
    console.log("key bilgisi: ",key);
    console.log("value bilgisi: ",laptop1[key]);

})

//value değerlerine ulaşmak
values = Object.values(laptop1)

console.log(Object.values(laptop1));



values.forEach(value => {
    console.log("value: ",value);
})


//objelere method eklemek


let userSettings = {

    user_name: "Huzeyfe",
    user_lastName: "yetkiner",
    birth: "29.07.1999",

    shortName: function(){return `${this.user_name[0].toUpperCase()}.${this.user_lastName[0].toUpperCase()}`}
}

console.log(userSettings.shortName())