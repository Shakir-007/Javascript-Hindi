const jsuser = {
    name : "Shakir",
    age : 27,
    location : "jaipur",
    email : "shakir@gmail.com",
    isloogedin : false,
    lastLoggedindays: ["saturday", "sunday"]
}

// console.log(jsuser.name);
// console.log(jsuser["location"]);

jsuser.greeting = function Myfun(jsuser) {
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greeting());