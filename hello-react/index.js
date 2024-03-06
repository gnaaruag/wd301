/* eslint-disable no-unused-vars */
console.log("This is a typescript file!!!");
var newUser = {
    name: "Jane",
    id: 1,
    isAdmin: false
};
var nameV = "hello";
nameV = 42;
nameV = false;
function printHello() {
    console.log("Hello!");
}
function throwError() {
    throw new Error("An error occurred!");
}
function addUser(user) {
    return user.name + " added successfully";
}
var userName = "Jane"; // type: string
var userID = 10; // type: number
var uniqueID = userName + userID;
