function showTime(){
    const TIME = new Date();
    let h = TIME.getHours();
    let m = TIME.getMinutes();
    let s = TIME.getSeconds();
    let d = TIME.getDay();
    let day = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let currentDay = day[d].toString();    
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = h + ":" + m +":"+s +" "+currentDay;
    setTimeout(showTime,1000);
}



let nameInfo = prompt("Adınız Nedir?:")
let myName = document.querySelector("#myName")

myName.innerHTML = nameInfo



showTime();