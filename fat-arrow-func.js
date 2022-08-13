

function hello(firstName){
    console.log("Hello ", firstName)
}

hello("Javascript")

const helloFunctionV1 = (firstName) => {console.log("Hello ",firstName)}
helloFunctionV1("huzo")

const helloFunctionV2 = firstName => console.log("Hello", firstName)  //tek satırda ve tek değişkende parantezlere ve süslü parantezlere gerek yok
helloFunctionV2("huzo")

const helloFunctionV3 = (firstName,lastName) => 
console.log(`Hello ${firstName} ${lastName}`)
helloFunctionV3("huzo","yetkiner")

const helloFunctionV4 = (firstName,lastName) => {
    let info = `Hello ${firstName} ${lastName}`
    console.log(`Hello ${firstName} ${lastName}`)
    return info
}
helloFunctionV4("huzo","yetk")

