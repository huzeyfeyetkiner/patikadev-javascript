// Obje Destructuring:

let settings = {
    userName: "Huzo",
    password: "Huzo123",
    isActive: false,
    ip: "127.0.1.0",
    serverName: "kodluyoruz.org"
}

// ***obje içindeki bilgilerin tek seferde çekilmesi

// let userName = settings.userName
// console.log(userName)

// ***rename && destructuring yapımı
//let {userName: user,password,isActive,ip:serverIP,serverName} = settings

// console.log(user,password,isActive,serverIP,serverName);
// console.log(settings);
// console.log(user);


let {userName:userName2,password:password2,isActive:isActive2, ...newSettings} = settings

console.log(userName2,password2,isActive2,newSettings);

// **Object destructuring ile kopyalama işlemi

// **settings içeriğide değişiyor
// let settings2 = settings 
// settings2.userName = "Changed info"

let settings2 = {...settings}
settings2.userName = "Changed info"


console.log("settings:", settings);
console.log("settings2:", settings2);


let score = [100, 200, 300, 400]

let [score1,score2,...otherScore] = [...score]

console.log(score1,score2,otherScore);

let copyOfScore = [...score]

copyOfScore[0] = 1
console.log(copyOfScore);

let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;

console.log(foo);