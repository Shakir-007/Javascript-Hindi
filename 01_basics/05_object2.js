const tinderUser = {};
tinderUser.Id = "1234abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "shakir@gmail.com",
    fullname: {
        userFullname : {
            firstName : "Mohd",
            lastName : "Zeeshan"
        }
    }  
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname.firstName)

const obj1 = { 1 : "a" , 2 : "b"};
const obj2 = { 3 : "c" , 4 : "d"};

// const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
console.log(obj4)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));