// const PRODUCTS = ["Laptop","Phone","Car","Playstation","Speaker","Mouse","Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(product => product.length>5)

// NEW_PRODUCTS.forEach(item => console.log(item))

// const USERS = [
//     {fullName : "Huzeyfe Yetkiner", isActive: true},
//     {fullName : "Furkan Yetkiner", isActive: true},
//     {fullName : "Nursel Yetkiner", isActive: false}
// ]


// // const ACTIVE_USERS = USERS.filter( user => user.isActive == true) ****AŞAĞIDAKİ İLE AYNI İŞLEMİ YAPIYOR
// const ACTIVE_USERS = USERS.filter( user => user.isActive)

// console.log(ACTIVE_USERS);

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

const age_filter = person.filter(person => person.age>30)
console.log(age_filter);

// const lang_filter = person.filter(function(p) {
//     for(let i=0;i<person.length;i++){
//         return p.languages[i] =="JavaScript"
//     }
// })

//yukarıdaki çözümle aynı işlemi yapıyor
const lang_filter = person.filter(p => p.languages.includes("JavaScript"))
console.log(lang_filter);