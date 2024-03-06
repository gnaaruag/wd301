console.log("This is a typescript file!!!");

type StringArray = string[];

interface User {
	name: string;
	id: number;
	isAdmin: boolean;
}

let newUser: User = {
	name: "Jane",
	id: 1,
	isAdmin: false
};

let nameV: any = "hello";
nameV = 42;
nameV = false;

function printHello(): void {
	console.log("Hello!");
}

function throwError(): never {
	throw new Error("An error occurred!");
}

function addUser(user: User): string {
    return user.name + " added successfully";
}

let userName = "Jane";  // type: string
let userID = 10;  // type: number
let uniqueID = userName + userID;
