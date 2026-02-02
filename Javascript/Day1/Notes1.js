// //Creating a variable and assigning a value
// let age=23;
// let name="Zarar";
// let isStudent=true;

// let score;
// console.log(score);
// score=95;
// console.log(score);


// // 1.NUMBER Represents numeric values, both integers and decimals.
// let age1= 24; 
// let price= 99.99; 
// let temperature= -15;
// let distance = 1.5e6;

// // 2.Sting Represents textual data. Strings must be enclosed in quotes.
// let name1 = "Tony Stark";
// let greeting = 'Hello World'; 
// let message = `Welcome, ${name1}`;
// let age2 = 23;
// let info = `I am ${age2} years old`;

// //REPl
// let aa = 1;
// let b = 2;
// console.log(aa + b);
// let cc = "Hello";
// let dd = "World";
// console.log("Hello " + "World");

// //Boolean
// let isStuent = true;
// let isLoggedIn = false;
// if (isStudent) {
//   console.log("Student discount applied!");//Often used in conditions.
// }
// //Undefined
// let score1;
// console.log(score1);
// console.log(typeof score1);
// //Null
// let user = null;//Explicitly saying it has no value
// user = { name: "Alice", id: 101 };//later,when user logs in
// //BigInt
// let bigNumber = 99700949795n;

// //Checking data type
// console.log(typeof 25);
// console.log(typeof "hello");
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 123n);

// //Arithematic operator
// //Addition
// let sum = 5 + 3;
// //Substraction
// let difference = 10 - 3;
// //Multiplication
// let product = 4 * 5;
// //Division
// let quotient = 20 / 4;
// //Modulo
// let check = 10 % 3;
// //Exponentiation
// let squared = 5 ** 2;
// //combine
// let result1 = 5 + 3 * 2 - 1 / 5 % 3;

// //String Concatenation with +
// let firstNamee = "Tony";
// let secondName = "Stark";
// let fullName = firstNamee + secondName;

// //NAN(not a number)
// let result2 = 0 / 0;//nan
// console.log(typeof NaN);//number
// console.log(result2.isNaN);//Checking for NaN(true)

// //Operator Precedence
// // Example 1: Multiplication before addition
// let result3 = 5 + 3 * 2;
// // Step 1: 3 * 2 = 6
// // Step 2: 5 + 6 = 11
// console.log(result3); // 11
// // Example 2: Using parentheses to change order
// let reslt4 = (5 + 3) * 2;
// // Step 1: (5 + 3) = 8
// // Step 2: 8 * 2 = 16
// console.log(reslt4); // 16
// // Example 3: Complex expression
// let rsult5 = (5 + 2) / 7 + 1 * 2;
// // Step 1: (5 + 2) = 7
// // Step 2: 7 / 7 = 1
// // Step 3: 1 * 2 = 2
// // Step 4: 1 + 2 = 3
// console.log(rsult5); // 3
// // Example 4: Exponentiation has high precedence
// let result4 = 2 + 3 ** 2;
// // Step 1: 3 ** 2 = 9
// // Step 2: 2 + 9 = 11
// console.log(result4); // 11
// // Example 5: Same precedence, left to right
// let result5 = 10 / 2 * 3;
// // Step 1: 10 / 2 = 5 (left to right)
// // Step 2: 5 * 3 = 15
// console.log(result5); // 15

// //Assignment Operator
// //basic assignment(=)
// let x = 10;
// //Addition assignment
// let y = 10;
// y += 20;//y = y + 20;
// console.log("im here" + y);
// //Substraction
// let z = 10;
// z -= 20;//z = z - 20
// //Multiplication
// let a = 10;
// a *= 50;//a = a * 50
// //Division
// let c = 20;
// c /= 10; //c = c / 10
// //Modulo
// let d = 12;
// d %= 17;
// //Exponentiation
// let v = 1;
// v **= 3;

// //Unary operator
// //Increment operator(++)
// let count1 = 5;
// let resul2 = count1++;//post increment
// console.log(resul2); // 5 (uses old value)
// console.log(count1); // 6 (now incremented)
// // Step by step:
// // 1. result = count (result gets 5)
// // 2. count = count + 1 (count becomes 6)
// let count = 5;
// let result = ++count;
// console.log(result); // 6 (uses new value)
// console.log(count); // 6 (incremented)
// // Step by step:
// // 1. count = count + 1 (count becomes 6)
// // 2. result = count (result gets 6)
// //Comaprison
// let A = 10;
// let B = x++; // Post-increment
// console.log(a); // 10 (old value)
// console.log(x); // 11 (incremented)
// let C = 10;
// let D = ++y; // Pre-increment
// console.log(b); // 11 (new value)
// console.log(y); // 11 (incremented)

// //Decrement operator(--)
// let sore = 10;//Post-decrement
// let rsult = score--;
// console.log(result); // 10 (old value)
// console.log(score); // 9 (decremented)
// let scre = 10;//Pre-decremnet
// let reult = --scre;
// console.log(result); // 9 (new value)
// console.log(score); // 9 (decremented)

// //Practice question
// let num = 5;
// let newNum = num++; // newNum = 5, num = 6
// newNum = ++num; // num = 7, newNum = 7
// console.log(num); // 7
// console.log(newNum); // 7

// //Common uses
// //loop counter
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// //counting down
// let countdown = 10;
// while (countdown > 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log("Blast off!");
