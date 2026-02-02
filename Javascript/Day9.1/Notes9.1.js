// // // **JavaScript Day 9: Modern Array Methods (Part 1)**
// // 1. The forEach Method

// // Array.forEach((element,index,array)=>{
// //     //code to execute for each element
// // });


// // Example 1: Print all elements
// let fruits =["Apple","BAnana","Mango","Orange"];
// fruits.forEach((fruits)=>{
//     console.log(fruits);
// });


// // Example 1: Print all elements
// let colors =["Red","Green","Blue"];
// colors.forEach((color,index)=>{
//     console.log(`${index}:${color}`);

// });

// // Example 3: Calculate sum using external variable
// let numbers =[10,20,3040,50];
// let sum =0;
// numbers.forEach((num)=>{
//     sum+=num;

// });
// console.log(`Total${sum}`);//total:150


// // Example 4: Add formatted prices
// let prices =[99,149,299,499];
// prices.forEach((price)=>{
//     console.log(`${price}.00`);

// });


// // Example 5: Push to another array
// let names =["alice","bob","charlie"];
// let upperNames= [];
// names.forEach((name)=>{
//     upperNames.push(name.toUpperCase());

// });
// console.log(upperNames);



// // Example 6: Print multiplication table
// let numberss=[1,2,3,4,5];
// numbers.forEach((num)=>{
// console.log(`5*${num}=${5*num}`);

// });


// // Example 7: Working with objects
// let students =[
//     {name:"Rahul",age:20},
//     {name:"Priya",age:22},
//     {name:"Arjun",age:19}
// ];

// students.forEach((student)=>{
//     console.log(`${student.name} is${student.age}years old`);

// });


// //Example 8: Checking conditions
// let scores=[85,92,78,45,90];
// scores.forEach((score)=>{
//     if(score>80){
//         console.log(`${score} -Excelent`);

//     }else{
//         console.log(`${score}- Keep trying`);

//     }

// });



// //2. The map Method
// let numberse =[1,2,3,4,5];
// let doubled =numbers.map((num)=>num*2);

// console.log(doubled);
// console.log(numbers);


// // Example 2: Convert to uppercase
// let namess=["alice","bob","charlie"];
// let upperNamess = namess.map((namess)=>namess.toUpperCase());
// console.log(upperNames);



// // Example 3: Square all numbers
// let nums =[2,3,4,5];
// let squares=nums.map((num)=>num**2);
// console.log(squares);



// //Example 4: Extract object properties

// let students1=[
//     {name:"John",marks:85},
//     { name: "Sarah", marks: 92 },
//     { name: "Mike", marks: 78 }
// ];
// let names1=students1.map((student)=>student.name);
// console.log(names1);


// //Example 5: Add GST to prices

// let prices1 =[100,200,150,300];
// let prices1WithGST=prices1.map((price)=>price*1.18);
// console.log(prices1WithGST);



// //Example 6: Create full names
// let firstNames=["Raj","Priya","Amit"];
// let lastNames=["Sharma","Patel","Kumar"];
// let fullNames=firstNames.map((firstName,index)=>{
//     return`${firstName}${lastNames[index]}`;
// });
// console.log(fullNames);



// // Example 7: Format as currency

// let amounts =[100,250,500,1000];
// let formatted=amounts.map((amount)=>`${amount}.00`);
// console.log(formatted);




// //Example 8: Create HTML elements

// let items=["Home","About","Services","Contact"];
// let menuItems=items.map((item)=>`<li>${item}</li>`);
// console.log(menuItems);


// // Example 9: Temperature conversion

// let celsius =[0,10,20,30,40];
// let fahrenheit =celsius.map((temp)=>(temp*9/5)+32);
// console.log(fahrenheit);



// //Example 10: Add index to items

// let fruits1 =["Apple","Banana","Mango"];
// let numberedList=fruits1.map((fruit,index)=>`${index+1}.${fruit}`);
// console.log(numberedList);


// //3. The filter Method
// //Example 1: Get even numbers

// let numbers2=[1,2,3,4,5,6,7,8,9,10];
// let evens = numbers2.filter((num)=> num % 2 ==0);
// console.log(evens);


// //Example 2: Get odd numbers

// let numbers3 =[15,22,31,44,57,60];
// let odds= numbers.filter((num)=>num % 2 !==0);
// console.log(odds);

// //Example 3: Get passing grades

// let grades=[45,78,89,34,92,56,67];
// let passing=grades.filter((grade)=>50);
// console.log(passing);

// // Example 4: Filter by string length

// let words=["hi","hello","bye","goodbye","hey"];
// let longWords= words.filter((word)=>word.length>3);
// console.log(longWords);


// //Example 5: Get adults only

// let people = [
//  { name: "John", age: 17 },
//  { name: "Sarah", age: 22 },
//  { name: "Mike", age: 15 },
//  { name: "Emma", age: 25 },
//  { name: "Tom", age: 16 }
// ];

// let adults = people.filter((person)=>person.age>=18);
// console.log(adults);



// //Example 6: Get names starting with 'A'
// let names3 =["Alice","Bob","Andrew","Charlie","Amanda"];
// let aNames= names3.filter((name)=>name[0]==="A");
// console.log(aNames);



// //Example 7: Filter affordable items

// let products = [
//  { name: "Laptop", price: 50000 },
//  { name: "Mouse", price: 500 },
//  { name: "Keyboard", price: 1500 },
//  { name: "Monitor", price: 15000 }
// ];

// let affordable= products.filter((product)=>product.price<=2000);
// console.log(affordable);

// //Example 8: Remove specific items

// let cart =["apple","banana","apple","mango","apple","orange"];
// let withoutApples =cart.filter((item)=>item !=="apple")
// console.log(withoutApples);


// //Example 9: Get positive numbers
// let numbers4 =[5,-3,8,-1,0,12,-7,4];
// let positives=numbers4.filter((num)=>num>0);
// console.log(positives);



// //Example 10: Get completed tasks

// let tasks = [
//  { task: "Buy milk", done: true },
//  { task: "Clean room", done: false },
//  { task: "Study", done: true },
//  { task: "Exercise", done: false }
// ];
// let completed=tasks.filter((item)=>item.done ===true);
// console.log(completed);



// //4. some and every Methods

// //Example 1: Check if all are adults

// let ages =[20,25,18,30,22];
// let allAdults=ages.every((age)=>age>=18);
// console.log(allAdults);


// //Example 2: Check if all failed
// let ages1= [20,25,17,30,22];
// let allAdults1=ages.every((age)=>age>=18);
// console.log(allAdults1);

// //Example 3: Check if all numbers are positive
// {
// let numbers=[5,10,15,20];
// let allPositive =numbers.every((num)=>num>0);
// console.log(allPositive);


// }

// // Example 4: Check if all students passed
// let marks=[78,85,92,67,89];
// let allPassed=marks.every((mark)=>mark>=50);
// console.log(allPassed);


// //Example 5: Check if all products are in stock
// {
// let products = [
//  { name: "Laptop", inStock: true },
//  { name: "Mouse", inStock: true },
//  { name: "Keyboard", inStock: false }
// ];
// let allAvailable=products.every((product)=>product.inStock === true);
// console.log(allAvailable);

// }


// //Example 1: Check if any teenager exists
// {
// let ages =[20,25,17,30,22];
// let hasTeenager=ages.some((age)=>age<18);
// console.log(hasTeenager);

// }

// //Example 2: Check if any negative number 
// {
//  let numbers =[5,10,-3,20,15];
//  let hasNegative=numbers.some((num)=>num<0);
//  console.log(hasNegative);

// }


// //Example 3: Check if any student failed
// {
// let marks=[78,85,92,45,89];
// let anyoneFailed=marks.some((mark)=>mark<50);
// console.log(anyoneFailed);

// }

// //Example 4: Check if any product is cheap

// {
// let prices=[1500,2000,450,3000];
// let hasCheepItem=prices.some((price)=>price<500);
// console.log(hasCheepItem);

// }

// // Example 5: Check if any task is incomplete
// {
// let tasks = [
//  { task: "Buy milk", done: true },
//  { task: "Clean room", done: false },
//  { task: "Study", done: true }
// ];

// let hasIncomplete =tasks.some((item)=>item.done=== false);
// console.log(hasIncomplete);

// }


// // 4.3 Comparing some and every
// //Example 1: Age checking

// {
// let ages =[20,25,18,30,22];

// //every -All must be adults
// let allAdults=ages.every((age)=>age>=18);
// console.log(allAdults);


// // some - AT LEAST ONE must be adult
// let someAdults =ages.every((age)=>age>=18);
// console.log(allAdults);



// // some - AT LEAST ONE must be adult
// {
// let someAdults=ages.some((age)=>age>=18);
// console.log(someAdults);


// }


// }


// {
// //Example 2: With one failing case
// let ages = [20, 25, 15, 30, 22];

// // every - ALL must be adults (fails because of 15)
// let allAdults=ages.every((age)=>age>=18);
// console.log(allAdults);



// // some  - AT LEAST ONE must be adult (passes because others are adults)
// let someAdults=ages.some((age)=>age>=18);
// console.log(someAdults);
// }

// //Example 3: Numbers check
// {
// let numbers = [2, 4, 6, 8, 10];
// // every - ALL must be even
// let allEven=numbers.every((num)=>num%2 ===0);
// console.log(allEven);

// // some - AT LEAST ONE must be even
// let someEven=numbers.some((num)=> num% 2 ===0);
// console.log(someEven);
// }

// //Example 4: Empty cart scenario
// {
// let prices = [150, 200, 300];
// // every - ALL must be affordable
// let allAffordable = prices.every((price)=>price<=100);
// console.log(allAffordable);

// //some -AT LEASATONE must be affordable
// let someAffordable=prices.some((price)=>price<=100);
// console.log(someAffordable);
// }
