const USERS = ["AYSE","MehMET","aLİ","zeyneP","kerim"]


const NEW_USERS = USERS.map(user => user.toLowerCase())

console.log(NEW_USERS);

// const USERS_OBJ = USERS.map( user => {
//     return {userName: user, shortName: `${user[0].toUpperCase()}.`, newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`}
// })

//YUKARIDAKİ İLE AYNI İŞLEMİ YAPIYOR
const USERS_OBJ = USERS.map( user => (
    {userName: user, shortName: `${user[0].toUpperCase()}.`, newName: `${user[0].toUpperCase()}${user.slice(1).toLowerCase()}`}
    )
)

console.log(USERS_OBJ);