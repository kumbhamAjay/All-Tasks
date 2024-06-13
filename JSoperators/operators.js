
console.log(10 + 10);     //20
console.log(10 + "10"); //1010
console.log(10 + +"10");  //20
console.log(10+"10"+10);  //101010
console.log(10+ +"10" + 10);//30
console.log(10 - "2");//8
console.log(10 - "2" - "8");//0
console.log(10+"2" - "2");//100
console.log(10>9>8);//false 10 > 9: This comparison evaluates to true because 10 is greater than 9.

//true > 8: Now, the expression is true > 8. In JavaScript, when comparing a boolean with a number, the boolean true is coerced to the number 1.
console.log(10 * "10");//100
console.log(100 / "100");//100
console.log(100/"0");//Infinity
console.log(100 + +"100" - "100" * "100");//-9800
console.log(1 == "1");//true
console.log(1 === "1");//flase
console.log(1 == "one");//false
console.log(1 === "one");//false
console.log(1+true);//2
console.log(1 - true);//0
console.log(1 + true - false);//2
console.log("1" + true);//1true
console.log(+"1" + true);//2
console.log(undefined == undefined);//true
console.log(undefined === undefined);//true
console.log(null == null);//true
console.log(null === null);//true
console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(2+NaN);//NaN
console.log("2"+NaN);//2NaN
console.log("2"+undefined);//2undefined
console.log(2+undefined);//NaN
console.log(typeof "123");//string
console.log(typeof 2);//number
console.log(typeof true);//boolean
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof []);//object
console.log(typeof 1n);//bigint
console.log(typeof 1n+2n);//bigint2
console.log(typeof 1+2n);//number2
//console.log(typeof 1/1n);//TypeError: Cannot mix BigInt and other types, use explicit conversions
//1. What is the value of granted after the operation:
// 1. What is the value of x after the operation: x = 5 + 3 * 2;?
console.log(x = 5 + 3 * 2)

// 2. What is the value of y after the operation: y = 12 - 4 / 2;?
console.log(y = 12 - 4 / 2)

// 3. What is the value of z after the operation: z = 7 + 2 * 3 - 1;?
console.log(z = 7 + 2 * 3 - 1)

// 4. What is the value of a after the operation: a = 9 % 3 + 2;?
console.log(a = 9 % 3 + 2)

// 5. What is the value of b after the operation: b = 15 / 3 * 2;?
console.log(b = 15 / 3 * 2)

// 6. What is the value of c after the operation: c = 24 >> 2;?
console.log(c = 24 >> 2)

// 7. What is the value of d after the operation: d = 17 & 3;?
console.log(d = 17 & 3)

// 8. What is the value of e after the operation: e = 28 ^ 2;?
console.log(e = 28 ^ 2)

// 9. What is the value of f after the operation: f = 11 + 3 << 2;?
console.log(f = 11 + 3 << 2)

// 10. What is the value of g after the operation: g = 25 - 5 | 3;?
console.log(g=25-5|3);

let username = "admin";
let password = "password";
let granted = (username === "admin" && password === "password") ? true : false;
console.log(granted)//true


//1. What is the value of message after the operation:

let username4 = "user";
let password4 = "wrongpassword";
let message = (username4 === "admin" && password4 === "password") ? "Login successful!" : "Invalid credentials.";
console.log(message)//Invalid credentials

//1. What is the value of access after the operation:

let username3 = "admin";
let password3 = "password";
let access = (username3 === "admin" || password3 === "password") ? "Granted" : "Denied";
console.log(access)//Granted

//1. What is the value of status after the operation:

let username1 = "";
let password1 = "password";
let status = (username1 !== "" && password1 === "password") ? "Logged in" : "Please enter username and password";
console.log(status);//Please enter username and password

//1. What is the value of authenticated after the operation:

let username2 = "admin";
let password2 = "wrongpassword";
let authenticated = (username2 === "admin" && password2 === "password") ? true : false;

console.log(authenticated)//false

// 1. What is the value of name after the operation:

let user = { name: "John" };
let name = user?.name ?? "Unknown";

console.log(name)//John


// 1. What is the value of price after the operation:

let product = { price: null };
let price = product?.price ?? "N/A";
console.log(price)//N/A


// 1. What is the value of address after the operation:

let customer = { address: { street: "123 Main St" } };
let address = customer?.address?.street ?? "Not available";
console.log(address)//123 Main St


// 1. What is the value of phone after the operation:

let contact = { phone: null };
let phone = contact?.phone ?? "Not provided";
console.log(phone)//Not provided


// 1. What is the value of description after the operation:

let item = { description: "" };
let description1 = item?.description ?? "No description available";
console.log(description1)//


