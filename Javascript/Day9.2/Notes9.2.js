// // 1. The reduce Method

// // Example 1: Sum of all numbers

// let numbers =[1,2,3,4,5];
// let sum =numbersreduce((total,num)=>{
//     return total+num;

// },0);
// console.log(sum);


// // Example 2: Product of all numbers
// {
// let numbers=[1,2,3,4,5];
// let product=numbers.reduce((result,num)=>result*num,1);
// console.log(product);

// }


// // Example 3: Calculate total price

// {

// let cart = [
//  { item: "Shirt", price: 500 },
//  { item: "Shoes", price: 1200 },
//  { item: "Hat", price: 300 }
// ];
// let total =cart.reduce((sum,product)=>sum+product.price);
// console.log(total);

// }


// // Example 4: Count occurrences
// {

// let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];

// let count =fruits.reduce((counter,ruit)=>{
//     counter[fruit]=(counter[fruit]||0)+1;
//     return counter;

// });
// console.log(count);
// }



// //Example 5: Flatten nested arrays
// {
// let nested =[[1,2],[3,4],[5,6]];
// let flat=nested.reduce((acc,arr)=>acc.concat(arr),[]);
// console.log(flat);

// }

// //Example 6: Find longest word

// let words = ["hi", "hello", "hey", "goodbye"];

// let longest =words.reduce((longest,word)=>{
//     return word.length>longest.length?word:longest;

// },"");
// console.log(longest);




// // Example 7: Group by category
// {
// items = [
//  { name: "Apple", type: "fruit" },
//  { name: "Carrot", type: "vegetable" },
//  { name: "Banana", type: "fruit" },
//  { name: "Potato", type: "vegetable" }
// ];
// let grouped=items.reduce((result,item)=>{
//     if(!result[item.type]){
//         result[item.type]=[];
//     }
//     result[item.type].push(item.name);
//     return result;

// },{});
// console.log(grouped);


// }



// // Example 8: Calculate average
// {
// let scores =[85,90,78,92,88];
// let sum =scores.reduce((total,scre)=>total+scores,0);
// let average=sum/scores.length;
// console.log(average);

// }



// // 2. Finding Maximum in Array

// //Example 1: Find maximum number
// let numbers = [45, 78, 23, 89, 34, 12];
// let max = numbers.reduce((maximum, num) => {
//  return num > maximum ? num : maximum;
// });
// console.log(max); // 89


// //Example 2: Find maximum with initial value
// let numbers = [45, 78, 23, 89, 34];
// let max = numbers.reduce((maximum, num) => {
//  return num > maximum ? num : maximum;
// }, numbers[0]);
// console.log(max);


// //Example 3: Find minimum number
// let numbers = [45, 78, 23, 89, 34, 12];
// let min = numbers.reduce((minimum, num) => {
//  return num < minimum ? num : minimum;
// });
// console.log(min);


// //Example 4: Find highest price
// let products = [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 },
//  { name: "Monitor", price: 15000 }
// ];
// let maxPrice = products.reduce((max, product) => {
//  return product.price > max ? product.price : max;
// }, 0);
// console.log(maxPrice)



// //Example 5: Find student with highest marks

// let students = [
//  { name: "Rahul", marks: 85 },
//  { name: "Priya", marks: 92 },
//  { name: "Arjun", marks: 78 }
// ];
// let topper = students.reduce((highest, student) => {
//  return student.marks > highest.marks ? student : highest;
// });
// console.log(topper);


// //3. Default Parameters

// // Example 1: Simple greeting

// function greet(name = "Guest") {
//  console.log(`Hello, ${name}!`);
// }
// greet("Alice"); 
// greet(); 



// //Example 2: Calculate with tax

// function calculateTotal(price, taxRate = 0.18) {
//  return price + (price * taxRate);
// }
// console.log(calculateTotal(1000)); 
// console.log(calculateTotal(1000, 0.10));



// //Example 3: Multiple defaults

// function createUser(name, age = 18, country = "India") {
//  return { name, age, country };
// }
// console.log(createUser("Raj"));

// console.log(createUser("Priya", 25));

// console.log(createUser("Tom", 30, "USA"));


// // Example 4: Power function

// function power(base, exponent = 2) {
//  return base ** exponent;
// }
// console.log(power(5)); 
// console.log(power(5, 3));
// console.log(power(2, 4));


// //Example 5: Calculate discount

// function applyDiscount(price, discount = 10) {
//  return price - (price * discount / 100);
// }
// console.log(applyDiscount(1000)); 
// console.log(applyDiscount(1000, 20)); 


// //Example 6: Array slice with defaults

// function getElements(arr, start = 0, end = arr.length) {
//  return arr.slice(start, end);
// }
// let numbers = [1, 2, 3, 4, 5];
// console.log(getElements(numbers)); 
// console.log(getElements(numbers, 2)); 
// console.log(getElements(numbers, 1, 3))


// // Example 7: Using expressions as defaults
// function multiply(a, b = a * 2) {
//  return a * b;
// }
// console.log(multiply(5)); 
// console.log(multiply(5, 3));


// // 4. Spread Operator ( ... )

// let original = [1, 2, 3, 4];
// let copy = [...original];
// console.log(copy); 
// // Proof they're different arrays
// copy.push(5);
// console.log(original);
// console.log(copy); 


// //Example 2: Merge two arrays
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let merged = [...arr1, ...arr2];
// console.log(merged);


// //Example 3: Add elements while copying
// let numbers = [2, 3, 4];
// let expanded = [1, ...numbers, 5, 6];
// console.log(expanded);


// //Example 4: Combine multiple arrays

// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "potato"];
// let dairy = ["milk", "cheese"];
// let groceries = [...fruits, ...vegetables, ...dairy];
// console.log(groceries);



// // Example 5: Spread string into array

// let word = "HELLO";
// let letters = [...word];
// console.log(letters);



// // Example 6: Insert in middle

// let start = [1, 2];
// let end = [5, 6];
// let middle = [3, 4];
// let complete = [...start, ...middle, ...end];
// console.log(complete);



// //Example 7: Pass array elements as function arguments
// function sum(a, b, c) {
//  return a + b + c;
// }
// let numbers = [1, 2, 3];
// console.log(sum(...numbers));



// //Example 8: Find max in array

// let numbers = [45, 78, 23, 89, 34];
// let max = Math.max(...numbers);
// console.log(max); 



// //6. Spread with Object Literals
// // Example 1: Copy an object

// let original = { name: "John", age: 25 };
// let copy = { ...original };
// console.log(copy); 
// // Proof they're different objects
// copy.age = 30;
// console.log(original); 
// console.log(copy); 

// // Example 2: Add new properties
// let user = { name: "Alice", age: 22 };
// let updatedUser = { ...user, city: "Mumbai" };
// console.log(updatedUser);


// //Example 3: Override properties

// let user = {
//  name: "Tony Stark",
//  email: "tony@stark.com",
//  age: 45
// };
// let updatedUser = {
//  ...user,
//  email: "ironman@stark.com", // Override
//  city: "New York" // Add new
// };
// console.log(updatedUser);



// //Example 4: Merge multiple objects

// let personal = { name: "Rahul", age: 25 };
// let contact = { email: "rahul@email.com", phone: "9876543210" };
// let address = { city: "Delhi", country: "India" };
// let complete = { ...personal, ...contact, ...address };
// console.log(complete);


// // Example 5: Update nested object (shallow copy issue)

// let user = {
//  name: "John",
//  address: { city: "Mumbai", pin: 400001 }
// };
// let updated = { ...user, name: "Johnny" };
// console.log(updated);



// //Example 6: Add computed properties

// let product = { name: "Laptop", price: 50000 };
// let withTax = {
//  ...product,
//  tax: product.price * 0.18,
//  total: product.price * 1.18
// };
// console.log(withTax);



// //7. Rest Operator ( ... )

// // Example 1: Collect all arguments

// function sum(...numbers) {
//  return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3)); // 6
// console.log(sum(5, 10, 15, 20)); // 50
// console.log(sum(100, 200, 300, 400)); 


// // Example 2: First and rest

// function announce(winner, ...others) {
//  console.log(`Winner: ${winner}`);
//  console.log(`Runners-up: ${others.join(", ")}`);
// }
// announce("Alice", "Bob", "Charlie", "David");



// // Example 3: Multiple fixed parameters + rest

// function createTeam(captain, viceCaptain, ...players) {
//  return {
//  captain,
//  viceCaptain,
//  players
//  };
// }
// let team = createTeam("Virat", "Rohit", "Dhoni", "Hardik", "Bumrah");
// console.log(team);


// //Example 4: Calculate average

// function average(...numbers) {
//  let sum = numbers.reduce((total, num) => total + num, 0);
//  return sum / numbers.length;
// }
// console.log(average(10, 20, 30)); // 20
// console.log(average(85, 90, 78, 92));


// // Example 5: Filter and collect
// function getEvens(...numbers) {
//  return numbers.filter(num => num % 2 === 0);
// }
// console.log(getEvens(1, 2, 3, 4, 5, 6, 7, 8));
// // [2, 4, 6, 8]




// // Example 6: Multiply all by a factor

// function multiplyAll(fator, ...numbers) {
//  return numbers.map(num => num * factor);
// }
// console.log(multiplyAll(2, 1, 2, 3, 4)); // [2, 4, 6, 8]
// console.log(multiplyAll(10, 5, 6, 7)); 

// // Example 7: Combine first, last, and middle

// function describePodium(first, second, ...others) {
//  console.log(`Gold: ${first}`);
//  console.log(`Silver: ${second}`);
//  console.log(`Others: ${others.join(", ")}`);
// }
// describePodium("India", "Australia", "England", "Pakistan", "South Africa");



// // 8. Spread vs Rest Comparison
// // Visual Example
// // SPREAD - Expands array into individual elements
// let arr = [1, 2, 3];
// console.log(...arr); // Output: 1 2 3 (three separate values)
// // REST - Collects individual elements into array
// function collect(...items) {
//  console.log(items); // Output: [1, 2, 3] (one array)
// }
// collect(1, 2, 3);


// // 9. Array Destructuring
// // Example 1: Basic destructuring
// let colors = ["Red", "Green", "Blue"];
// let [first, second, third] = colors;
// console.log(first); 
// console.log(second);
// console.log(third); 


// //Example 2: Partial destructuring

// let numbers = [1, 2, 3, 4, 5];
// let [first, second] = numbers;
// console.log(first); // 1
// console.log(second); // 2


// // Example 3: Skip elements
// let numbers = [10, 20, 30, 40, 50];
// let [first, , third, , fifth] = numbers;
// console.log(first); // 10
// console.log(third); // 30
// console.log(fifth); // 50

// // Example 4: Swap variables
// let a = 5;
// let b = 10;
// [a, b] = [b, a]; // Swap
// console.log(a); // 10
// console.log(b); // 5

// //Example 5: With default values
// let [a = 1, b = 2, c = 3] = [10, 20];
// console.log(a); // 10 (from array)
// console.log(b); // 20 (from array)
// console.log(c); ; // 3



// //Example 6: Rest in destructuring
// let numbers = [1, 2, 3, 4, 5];
// let [first, second, ...rest] = numbers;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]


// // Example 7: Nested array destructuring
// let data = [1, [2, 3], 4];
// let [a, [b, c], d] = data;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4



// //Example 8: Function return destructuring
// function getScores() {
//  return [95, 87, 92];
// }
// let [highest, middle, lowest] = getScores();
// console.log(highest); // 95
// console.log(middle); // 87
// console.log(lowest); // 92


// // 10. Object Destructuring
// // Example 1: Basic object destructuring
// let student = {
//  name: "Rahul",
//  age: 20,
//  grade: "A"
// };
// let { name, age, grade } = student;
// console.log(name); // "Rahul"
// console.log(age); // 20
// console.log(grade); // "A"