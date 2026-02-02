// // *1. Introduction to Object Literals*
// //Example 1: Simple student object
// let student = {
//  name: "Alice",
//  age: 20,
//  grade: "A"
// };


// //Example 2: Product object
// let product = {
//  title: "Laptop",
//  price: 45000,
//  inStock: true
// };


// // Example 3: Geographic location
// let location = {
//  latitude: "28.7041° N",
//  longitude: "77.1025° E",
//  city: "Delhi"
// };


// // *2. Accessing Object Properties*
// // Example 1: Using dot notation
// let student = { name: "Alex", age: 21, city: "Seattle" };
//   console.log(student.name); 
//   console.log(student.age);


// // Example 2: Using bracket notation
//     console.log(student["city"]); 
//     console.log(student["name"]); 


// // Example 3: When to use bracket notation (spaces in key)
// let person = { "first name": "John", "last name": "Doe" };
//    console.log(person["first name"]); 


// // Example 4: Using variables with bracket notation
// let key = "age";
//    console.log(student[key]);


// // Example 5: Mixed access
// let car = { brand: "Toyota", model: "Camry", year: 2024 };
//    console.log(car.brand); // "Toyota"
//    console.log(car["model"]); // "Camry"


// //*3. Modifying Objects (Add, Update, Delete)*
// // Example 1: Updating existing properties
// let student = { name: "Alex", age: 21, city: "Seattle" };
//   student.age = 22;
//   student.city = "Boston";

//   console.log(student); 


// // Example 2: Adding new properties
// student.grade = "A+";
// student.major = "Computer Science";

//   console.log(student);


// // Example 3: Deleting properties
// delete student.city;
//   console.log(student);


// // Example 4: Multiple modifications
// let product = { name: "Phone", price: 30000 };
// product.price = 28000; 
// product.brand = "Samsung"; 
// delete product.name; 
// console.log(product); 


// // Example 5: Using bracket notation for modifications
// let car = { brand: "Honda" };
// car["model"] = "Civic";
// car["year"] = 2024;
// console.log(car);



// // *4. Nested Objects (Object of Objects)*
// // Example 1: Basic nested objects
// let userDatabase = {
//  user1: { name: "Alice", grade: "A+", city: "Austin" },
//  user2: { name: "Bob", grade: "B", city: "Denver" }
// };

// console.log(userDatabase.user1.name);
// console.log(userDatabase.user2.grade); 


// // Example 2: Company departments
// let company = {
//  engineering: { employees: 50, manager: "John" },
//  sales: { employees: 30, manager: "Sarah" },
//  hr: { employees: 10, manager: "Mike" }
// };

// console.log(company.engineering.employees); 
// console.log(company.sales.manager); 


// // Example 3: Student records with subjects
// let students = {
//  student1: { name: "Emma", math: 85, science: 90 },
//  student2: { name: "Oliver", math: 78, science: 88 }
// };

// console.log(students.student1.math); 
// console.log(students.student2.science); 


// // Example 4: Product inventory by category
// let inventory = {
//  electronics: { laptops: 25, phones: 50 },
//  clothing: { shirts: 100, pants: 75 }
// };

// console.log(inventory.electronics.laptops);
// console.log(inventory.clothing.shirts); 


// // Example 5: Accessing and modifying nested values
// let school = {
//  classA: { students: 30, teacher: "Ms. Smith" },
//  classB: { students: 28, teacher: "Mr. Brown" }
// };

// school.classA.students = 32;
// school.classB.teacher = "Ms. Johnson";

// console.log(school.classA.students); 
// console.log(school.classB.teacher);



// // *5. Array of Objects*
// // Example 1: List of students
// let students = [
//  { name: "Alice", age: 20, grade: "A" },
//  { name: "Bob", age: 21, grade: "B" },
//  { name: "Charlie", age: 19, grade: "A+" }
// ];

// console.log(students[0].name); 
// console.log(students[1].grade); 
// console.log(students.length); 


// // Example 2: Product catalog
// let products = [
//  { id: 101, name: "Laptop", price: 45000 },
//  { id: 102, name: "Mouse", price: 500 },
//  { id: 103, name: "Keyboard", price: 1500 }
// ];

// console.log(products[0].name); 
// console.log(products[2].price); 


// // Example 3: Social media posts
// let posts = [
//  { username: "user1", content: "Hello World!", likes: 50 },
//  { username: "user2", content: "JavaScript is fun", likes: 120 },
//  { username: "user3", content: "Coding daily", likes: 85 }
// ];

// console.log(posts[1].username); 
// console.log(posts[0].likes); 


// // Example 4: Course list
// let courses = [
//  { name: "Math", id: 101, credits: 3 },
//  { name: "Physics", id: 102, credits: 4 },
//  { name: "Chemistry", id: 103, credits: 3 }
// ];

// console.log(courses[0].credits); 
// console.log(courses[1].name);


// // Example 5: Modifying array of objects
// let cars = [
//  { brand: "Toyota", model: "Camry", year: 2020 },
//  { brand: "Honda", model: "Civic", year: 2021 }
// ];

// cars[0].year = 2024;
// cars.push({ brand: "Ford", model: "Mustang", year: 2023 });

// console.log(cars[0].year); 
// console.log(cars[2].brand); 


// // 6. *The Math Object - Introduction*
// // Example 1: Math constants
// console.log(Math.PI); 
// console.log(Math.E);


// // Example 2: Absolute value
// console.log(Math.abs(-42));
// console.log(Math.abs(15)); 
// console.log(Math.abs(-7.5));


// // Example 3: Power (exponentiation)
// console.log(Math.pow(2, 3)); 
// console.log(Math.pow(5, 2)); 
// console.log(Math.pow(10, 3));


// // Example 4: Rounding down and up
// console.log(Math.floor(4.9));
// console.log(Math.floor(4.1)); 
// console.log(Math.ceil(4.1)); 
// console.log(Math.ceil(4.9)); 


// // Example 5: Using Math.PI for calculations
// let radius = 5;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;

// console.log(circumference);
// console.log(area);


// // *7. Math.random() - Generating Random Numbers*
// //// Example 1: Basic random decimal
// console.log(Math.random()); 
// console.log(Math.random());
// console.log(Math.random()); 


// // Example 2: Random decimal scaled to 10
// let num = Math.random() * 10;

// console.log(num); 


// // Example 3: Random decimal scaled to 100
// let percentage = Math.random() * 100;

// console.log(percentage);


// // Example 4: Multiple random numbers
// console.log(Math.random() * 5); 
// console.log(Math.random() * 20); 
// console.log(Math.random() * 50);

// // Example 5: Understanding the range
// console.log(Math.random()); 
// console.log(Math.random() * 10); 
// console.log(Math.random() * 100);



// // *8. Generating Random Integers*
// // Example 1: Random integer from 1 to 10 (step by step)
// let step1 = Math.random(); 
// let step2 = step1 * 10;
// let step3 = Math.floor(step2); 
// let step4 = step3 + 1; 

// console.log(step4); 


// // Example 2: Random integer from 1 to 10 (one line)
// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random); 


// // Example 3: Random integer from 1 to 100
// let random100 = Math.floor(Math.random() * 100) + 1;
// console.log(random100);


// // Example 4: Random integer from 1 to 6 (dice roll)
// let diceRoll = Math.floor(Math.random() * 6) + 1;
// console.log(diceRoll);


// // Example 5: Random integer from 1 to 5
// let rating = Math.floor(Math.random() * 5) + 1;
// console.log(rating); 



// // *9. Random Number Formula*
// // Example 1: Random number from 1 to 10
// let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

// console.log(num);


// // Example 2: Random number from 5 to 10
// let num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

// console.log(num2); // 5, 6, 7, 8, 9, or 10


// // Example 3: Random number from 50 to 100
// let num3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

// console.log(num3);


// // Example 4: Random number from 20 to 30
// let num4 = Math.floor(Math.random() * (30 - 20 + 1)) + 20;

// console.log(num4);


// // Example 5: Random number from -10 to 10
// let num5 = Math.floor(Math.random() * (10 - (-10) + 1)) + (-10);

// console.log(num5);



// // *10. Practical Random Number Applications*
// // Example 1: Random dice roll (1-6)
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log("You rolled: " + dice);


// // Example 2: Random choice from array
// let colors = ["red", "green", "blue", "yellow"];
// let randomIndex = Math.floor(Math.random() * colors.length);

// console.log("Random color: " + colors[randomIndex]);


// // Example 3: Random quiz question selector
// let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
// let randomQ = Math.floor(Math.random() * questions.length);

// console.log("Random question: " + questions[randomQ]);


// // Example 4: Random ID generator (1000-9999)
// let id = Math.floor(Math.random() * 9000) + 1000;

// console.log("Generated ID: " + id);


// // Example 5: Random percentage (0-100)
// let percentage = Math.floor(Math.random() * 101);

// console.log("Random percentage: " + percentage + "%");