//const userr = new Object()
// const userr = {}
// userr.name = "Aman"
// userr.id = "123ab"
// userr.isLoggedIn = false

// console.log(userr)
// const user2 = {
//     email : "something@gmail.com",
//     fullName : {
//     userFullName : {
//     firstName : "Rahul",
//     lastName : "pandey"

//         }
//     }
// }
// console.log(user2.fullName)

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"a",4: "b"}
const obj3 = {5:"a",6: "b"}
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)