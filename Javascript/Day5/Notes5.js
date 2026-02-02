// // Example1: Print Number 1to5
// for(let i=1; i<=5; i++){
//     console.log(i);
// }


// // Example2:Print odd Numbers from 1 to 15
// for (let i=1; i<=15; i+=2){
//     console.log(i);
// }


// // Example 3: Print Even Numbers from 2 to 10
// for (let i = 2; i <= 10; i += 2) {
//      console.log(i);
// }


// // Example 4: Multiplication Table of 5
// for (let i=1; i<=10; i++) {
//  console.log(`5 x ${i} = ${5 * i}`);
// }


// // Example 5: Countdown from 10 to 1
// for (let i=10; i>=1; i--){
//     console.log(i);
// }
// console.log("Blast off!");


// // Infinite Loops (Warning!)
// // Cause 1: Missing Updation
// for (let i = 1; i <= 5; ){
//  console.log(i);
// }


// //Cause 2: Wrong Updation Direction
// for (let i = 1; i >= 0; i++) {
//  console.log(i);
// }


// // Cause 3: Omitting the Condition
// for (let i = 1; ; i++) {
//  console.log(i);
// }


// // Example 1: Fixed Version - Proper Updation
// for (let i = 1; i <= 5; i++) {
//  console.log(i);
// }


// // Example 2: Fixed Version - Correct Direction
// for (let i = 10; i >= 0; i--) {
//  console.log(i);
// }


// // Example 4: Infinite Loop with while
// let count = 0;
// while (count < 5) {
//  console.log(count);
// }


// // Example 5: Fixed While Loop
// let count = 0;
// while (count < 5) {
//  console.log(count);
//  count++; // Now it will stop at 5
// }


// // Nested for Loops
// // Example 1: Basic Nested Loop
// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer loop: ${i}`);
//     for (let j = 1; j <= 3; j++) {
//       console.log(` Inner loop: ${j}`);
//  }
// }


// // Example 2: Multiplication Table (1 to 5)
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5; j++) {
//       row += (i * j) + "\t";
//  }
//     console.log(row);
// }


// // Example 3: Pattern Printing - Right Triangle
// for (let i = 1; i <= 5; i++) {
//    let pattern = "";
//    for (let j = 1; j <= i; j++) {
//    pattern += "* ";
//  }
//   console.log(pattern);
// }


// // Example 4: Number Grid
// for (let row = 1; row <= 4; row++) {
//    let line = "";
//    for (let col = 1; col <= 4; col++) {
//      line += `(${row},${col}) `;
//  }
// console.log(line);
// }


// // Example 5: Inverted Triangle Pattern
// for (let i = 5; i >= 1; i--) {
//    let pattern = "";
//    for (let j = 1; j <= i; j++) {
//     pattern += "* ";
//  }
//   console.log(pattern);
// }


// // *The while Loop*
// // Example 1: Count from 1 to 5
// let i = 1;
// while (i <= 5) {
//    console.log(i);
//    i++;
// }


// // Example 2: Sum Numbers Until Target Reached
// let sum = 0;
// let num = 1;

// while (sum < 50) {
//  sum += num;
//  console.log(`Added ${num}, sum is now ${sum}`);
//  num++;
// }

// console.log(`Final sum: ${sum}`);


// // Example 3: Password Validation (Simplified)
// let password = "";
// let attempts = 0;

// while (password !== "secret123" && attempts < 3) {
//  password = prompt("Enter password:");
//  attempts++;

//  if (password === "secret123") {
//  console.log("Access granted!");
//  } else if (attempts < 3) {
//  console.log(`Wrong password. ${3-attempts} attempts remaining.`);
//  } else {
//  console.log("Access denied. Too many attempts.");
//  }
// }


// // Example 4: Halving Until Below Threshold
// let number = 1000;

// while (number > 1) {
//  number = number / 2;
//  console.log(number);
// }


// // Example 5: Finding First Power of 2 Greater Than Value
// let target = 1000;
// let power = 1;
// let exponent = 0;
// while (power <= target) {
//  exponent++;
//  power = 2 ** exponent;
// }
// console.log(`2^${exponent} = ${power} is the first power of 2 greater than ${target}`);


// // *The do...while Loop*
// // Example 1: Menu System
// let choice;

// do {
//  console.log("Menu:");
//  console.log("1. Play");
//  console.log("2. Settings");
//  console.log("3. Exit");
//  choice = prompt("Enter your choice:");

//  if (choice === "1") {
//  console.log("Starting game...");
//  } else if (choice === "2") {
//  console.log("Opening settings...");
//  }
// } while (choice !== "3");

// console.log("Goodbye!");


// // Example 2: Dice Roll Until Six
// let roll;
// let attempts = 0;

// do {
//  roll = Math.floor(Math.random() * 6) + 1; // Random 1-6
//  attempts++;
//  console.log(`Roll ${attempts}: ${roll}`);
// } while (roll !== 6);

// console.log(`Got a 6 after ${attempts} attempts!`);


// // Example 3: Input Validation - Must Be Positive
// let number;

// do {
//  number = prompt("Enter a positive number:");
//  number = Number(number);

//  if (number <= 0 || isNaN(number)) {
//  console.log("Invalid input. Please enter a positive number.");
//  }
// } while (number <= 0 || isNaN(number));

// console.log(`You entered: ${number}`);


// // Example 4: Countdown with At Least One Execution
// let count = 0; 

// do {
//  console.log(`Count: ${count}`);
//  count++;
// } while (count < 0);


// // Example 5: ATM Withdrawal
// let balance = 1000;
// let continueTransaction;

// do {
//  let amount = Number(prompt(`Balance: $${balance}. Enter withdrawal amount:`));

//  if (amount > 0 && amount <= balance) {
//  balance -= amount;
//  console.log(`Withdrew $${amount}. New balance: $${balance}`);
//  } else {
//  console.log("Invalid amount.");
//  }

//  continueTransaction = prompt("Another transaction? (yes/no)");
// } while (continueTransaction === "yes" && balance > 0);

// console.log(`Final balance: $${balance}`);


// // *Loop Control: break and continue*
// // Example 1: Find First Number Divisible by 7
// for (let i = 1; i <= 100; i++) {
//  if (i % 7 === 0) {
//      console.log(`First number divisible by 7: ${i}`);
//      break; // Stop searching once found
//  }
// }


// // Example 2: Search in Array
// let fruits = ["apple", "banana", "orange", "grape", "mango"];
// let searchFor = "orange";
// let found = false;

// for (let i = 0; i < fruits.length; i++) {
//  if (fruits[i] === searchFor) {
//    console.log(`Found ${searchFor} at index ${i}`);
//    found = true;
//    break; // No need to continue searching
//  }
// }

// if (!found) {
//    console.log(`${searchFor} not found`);
// }


// // Example 3: Password Attempts Limit
// let correctPassword = "secret123";
// let maxAttempts = 3;

// for (let attempt = 1; attempt <= maxAttempts; attempt++) {
//  let password = prompt(`Attempt ${attempt}: Enter password`);

//  if (password === correctPassword) {
//     console.log("Access granted!");
//  break; // Exit loop on successful login
//  } else if (attempt === maxAttempts) {
//     console.log("Access denied. No more attempts.");
//  } else {
//     console.log("Wrong password. Try again.");
//  }
// }


// // Example 4: Print Numbers, Skip 3
// for (let i = 0; i <= 5; i++) {
//  if (i === 3) {
//    continue; // Skip when i is 3
//  }
//    console.log(i);
// }


// // Example 5: Print Only Even Numbers Using continue
// for (let i = 1; i <= 10; i++) {
//  if (i % 2 !== 0) {
//    continue; // Skip odd numbers
//  }
//    console.log(i);
// }


// // *Iterating Over Arrays*
// // Example 1: Print All Array Elements
// let cities = ["London", "Paris", "Tokyo", "New York", "Sydney"];

// for (let i = 0; i < cities.length; i++) {
//    console.log(`${i}: ${cities[i]}`);
// }


// // Example 2: Calculate Sum of Numbers
// let scores = [85, 92, 78, 95, 88];
// let sum = 0;

// for (let i = 0; i < scores.length; i++) {
//  sum += scores[i];
// }

// let average = sum / scores.length;
// console.log(`Total: ${sum}, Average: ${average}`);


// // Example 3: Find Maximum Value
// let numbers = [23, 67, 12, 89, 45, 91, 34];
// let max = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) {
//  if (numbers[i] > max) {
//  max = numbers[i];
//  }
// }

// console.log(`Maximum value: ${max}`);


// // Example 4: Reverse Print an Array
// let colors = ["red", "green", "blue", "yellow"];

// console.log("Original order:");
// for (let i = 0; i < colors.length; i++) {
//  console.log(colors[i]);
// }

// console.log("\nReverse order:");
// for (let i = colors.length -1; i >=0; i--) {
//  console.log(colors[i]);
// }


// // Example 5: Filter Array (Create New Array with Conditions)
// let ages = [12, 25, 17, 30, 15, 40, 19];
// let adults = [];

// for (let i = 0; i < ages.length; i++) {
//  if (ages[i] >= 18) {
//  adults.push(ages[i]);
//  }
// }

// console.log("Adults:", adults);


// // *Nested Arrays (2D Arrays)*
// // Example 6: Iterate Through 2D Array
// let teams = [
//  ["Alice", "Bob"],
//  ["Charlie", "David"],
//  ["Eve", "Frank"]
// ];

// for (let i = 0; i < teams.length; i++) {
//    console.log(`Team ${i + 1}:`);
//  for (let j = 0; j < teams[i].length; j++) {
//       console.log(` - ${teams[i][j]}`);
//  }
// }


// // Example 7: 2D Array - Student Grades
// let grades = [
//  [85, 90, 78], // Student 1's scores
//  [92, 88, 95], // Student 2's scores
//  [76, 82, 80] // Student 3's scores
// ];

// for (let student = 0; student < grades.length; student++) {
//  let sum = 0;
//  for (let test = 0; test < grades[student].length; test++) {
//     sum += grades[student][test];
//  }
//  let average = sum / grades[student].length;
//  console.log(`Student ${student + 1} average: ${average.toFixed(2)}`);
// }


// // Example 8: Matrix Addition
// let matrix1 = [[1, 2], [3, 4]];
// let matrix2 = [[5, 6], [7, 8]];
// let result = [];

// for (let i = 0; i < matrix1.length; i++) {
//  result[i] = [];
//  for (let j = 0; j < matrix1[i].length; j++) {
//     result[i][j] = matrix1[i][j] + matrix2[i][j];
//  }
// }

// console.log(result);


// // *The for...of Loop*
// // Example 1: Iterate Through Array
// let colors = ["Red", "Blue", "Green", "Yellow"];

// for (let color of colors) {
//    console.log(color);
// }


// // Example 2: Sum Array Elements
// let prices = [19.99, 29.99, 49.99, 9.99];
// let total = 0;

// for (let price of prices) {
//  total += price;
// }
// console.log(`Total: $${total.toFixed(2)}`);


// // Example 3: Iterate Through String
// let word = "JavaScript";

// for (let char of word) {
//    console.log(char);
// }


// // Example 4: Count Vowels in String
// let sentence = "Hello World";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let char of sentence) {
//  if (vowels.includes(char)) {
//  count++;
//  }
// }
// console.log(`Number of vowels: ${count}`);


// // Example 5: Nested for...of with 2D Array
// let departments = [
//  ["Alice", "Bob", "Charlie"],
//  ["David", "Eve"],
//  ["Frank", "Grace", "Henry", "Ivy"]
// ];

// for (let department of departments) {
//  for (let employee of department) {
//     console.log(employee);
//  }
// }


// // *Practical Application: Guessing Game*
// // Example 1: Favorite Movie Guessing Game
// let favoriteMovie = "Inception";
// let guess = "";
// while (guess !== favoriteMovie && guess !== "quit") {
//  guess = prompt("Guess my favorite movie (or type 'quit' to give up):");

//  if (guess === favoriteMovie) {
//  console.log("🎉 Correct! You guessed it!");
//  } else if (guess === "quit") {
//  console.log(`You gave up. It was ${favoriteMovie}.`);
//  } else {
//  console.log("❌ Wrong! Try again.");
//  }
// }


// // Example 2: Number Guessing Game with Hint
// let secretNumber = Math.floor(Math.random() * 100) + 1;
// let guess = 0;
// let attempts = 0;

// while (guess !== secretNumber) {
//  guess = Number(prompt("Guess a number between 1 and 100:"));
//  attempts++;

//  if (guess === secretNumber) {
//     console.log(`🎉 Correct! You guessed it in ${attempts} attempts!`);
//  } else if (guess < secretNumber) {
//     console.log("📈 Too low! Try higher.");
//  } else {
//     console.log("📉 Too high! Try lower.");
//  }
// }


// // Example 3: Word Scramble Game
// let words = ["javascript", "programming", "computer", "developer"];
// let word = words[Math.floor(Math.random() * words.length)];
// let scrambled = word.split('').sort(() => Math.random() - 0.5).join('');

// console.log(`Unscramble this word: ${scrambled}`);

// let guess = "";
// while (guess !== word) {
//    guess = prompt("Your answer:").toLowerCase();

//  if (guess === word) {
//    console.log("✅ Correct!");
//  } else {
//    console.log("❌ Try again!");
//  }
// }


// // Example 4: Rock Paper Scissors (Best of 3)
// let playerWins = 0;
// let computerWins = 0;
// let choices = ["rock", "paper", "scissors"];

// while (playerWins < 2 && computerWins < 2) {
//  let playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
//  let computerChoice = choices[Math.floor(Math.random() * 3)];


//    console.log(`You: ${playerChoice}, Computer: ${computerChoice}`);

//    if (playerChoice === computerChoice) {
//    console.log("It's a tie!");
//  } else if (
//    (playerChoice === "rock" && computerChoice === "scissors") ||
//    (playerChoice === "paper" && computerChoice === "rock") ||
//    (playerChoice === "scissors" && computerChoice === "paper")
//  ) {
//     playerWins++;
//     console.log(`You win this round! Score: You ${playerWins} - ${computerWins} Computer`);
//  } else {
//    computerWins++;
//    }
// }
//   if (playerWins > computerWins) {
//    console.log("🎉 You won the game!");
// }  else {
//    console.log("💻 Computer won the game!");
// }


// // Example 5: Simple Quiz Game
// let questions = [
//   { q: "What is 5 + 3?", a: "8" },
//   { q: "Capital of France?", a: "paris" },
//   { q: "How many days in a week?", a: "7" }
// ];

// let score = 0;

// for (let item of questions) {
//  let answer = prompt(item.q).toLowerCase();

//  if (answer === item.a.toLowerCase()) {
//    console.log("✅ Correct!");
//    score++;
//  } else {
//    console.log(`❌ Wrong! The answer was ${item.a}`);
//  }
// }
//    console.log(`Final Score: ${score}/${questions.length}`);