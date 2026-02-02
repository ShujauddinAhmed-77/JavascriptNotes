// //syncronous execution
// console.log("step1");
// console.log("step2");

// //the blocking problem
// console.log("before the long calculation");

// //5sec
// for(let i=0; i<5000;i++){
//     //heavy calculation
// };
// console.log("after the heavy execution");

// //asynchronous opertaion depends on external factors 
// //reading a file from a disk
// //fetching the data from the server
// //waiting for user input
// //setting a timer

// console.log("starting");
// setTimeout(()=>{
//     console.log("this appears after 2 seconds");
// },2000);

// console.log('ending')

// //I/O bound vs CPU tasks
// //cpu is bounded the processor is working hard
// function fibonacci(n){
//     if(n<=1) return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log("calculating");
// let result = fibonacci(40);//take time
// console.log("Result:",result)
// console.log("DONE");

// //example of cpu bound tasks
// //complex maathematical calcualtions
// //image processing 
// //video encoding
// //sorting massive arrays
// //running algoritms

// //i/o waiting for external resource
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response=>response.json())
//     .then(data=>console.log(data));
// console.log("request sent,but not waiting");

// //examples of I/O bound tasks
// //network requests(api's)
// //database queries 
// //reading /writing files
// //user input(clicks/keyboard)

// //settimeout
// //mulitple
// console.log("open cgc portal");
// setTimeout(() => {
//     console.log("header loaded")
// }, 1000);

// setTimeout(() => {
//     console.log("students data loaded")
// }, 2000);

// setTimeout(() => {
//     console.log("footer loaded")
// }, 500);

// console.log("portal structure ready");

// //form submission simulaiton
// function submitform(){
//     console.log("submitting form");

//     setTimeout(() => {
//         console.log("formsubmitted successsfully")
//         console.log("redirecting to dashboard")
//     }, 1500);
//     console.log("please wait");
// }
// submitform();

// //callbak functions 
// //simple callback function
// function greet(name,callback){
//     console.log("welcome ",name);
//     callback();
// }
// function sayGoodbye(){
//     console.log("goodbye");
// }
// greet("alice",sayGoodbye);

//call back with asynchrounous operation 
// function fetchStudentData(studentId,callback){
//     console.log("fetching data for student ID:",studentId);

//     //simulate database delay
//     setTimeout(()=>{
//         let studentData = {
//             id: studentId,
//             name:"zubair",
//             course: "computer science"
//         };

//         console.log("Data fetched successfully");
//         callback(studentData);//pass data to callback 
//     },2000);
// }
// function displayStudent(data){
//     console.log("Displaying the student:");
//     console.log("Name:",data.name);
//     console.log("Course:",data.course);
// }

//fetchStudentData(101,displayStudent);

// When you drop your car off for service:
// 1. You give the mechanic your phone number (callback)
// 2. You don't stand there waiting in the garage (non-blocking)
// 3. You go about your day (continue other tasks)
// 4. The mechanic calls you back when the car is ready (callback execution)

// function serviceVehicle(carModel,phoneNumber){
//     console.log("received",carModel,"for service");
//     console.log("Customer can leave now");

//     setTimeout(()=>{
//         console.log("service complete");
//         phoneNumber();
//     },3000);
// }
// function customerCallback(){
//     console.log("ring ring your car is ready");
//     console.log("customer returns to pick up car");
// }

// serviceVehicle("Hondacity",customerCallback);

// //call back hell the pyramid of doom
// //sequential task

// //change background color in sequence
// //red 1s orange 1s green 1s blue 1s

// function changeColor(color,delay,callback){
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         console.log("changed to",color);
//         if(callback)callback();        
//     }, delay);
// }
// //the pyramid of doom
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("blue",1000,()=>{
//                 console.log('all colours done');
//             });
//         });
//     });
// });

//user registration flow
//imagine: register->send email ->upadate database ->send welcomeSMS
// function registerUser(username,callback){
//     setTimeout(() => {
//         console.log("user registered:",username);
//     }, 1000);
//     callback()
// }
// function sendVerificationEmail(callback){
//     setTimeout(() => {
//         console.log("verifiation email sent")
//         callback();
//     }, 1000);
// }
// function updateDatabase(callback){
//     setTimeout(() => {
//         console.log("database updated");
//         callback()
//     }, 1000);
    
// }
// function sendWelcomeSMS(callback){
//     setTimeout(() => {
//         console.log("welcome sms sent")
//         callback()
//     }, 1000);
    
// }
// //callback hell immposible to read or debug
// registerUser("john",()=>{
//     sendVerificationEmail(()=>{
//         updateDatabase(()=>{
//             sendWelcomeSMS(()=>{
//                 console.log("registration complete")
//             });
//         });
//     });
// });

//error handling in call back hell is terrible
// getData((err,data)=>{
//     if(err){
//         console.error("error in getdata");
//     }else {
//         processData(data,(err,result)=>{
//             if(err){
//                 console.error("Error in process data");
//             }else{
//                 saveData(result,(err,saved)=>{
//                     if(err){
//                         console.error("error in save data")
//                     }else{
//                         console.log("success");
//                     }
//                 });
//             }
//         });
//     }
// });

//promises the solutions
//creating a promise 
// let myPromise = new Promise((reject,resolve)=>{
//     //asynchronous operation here
//     let success = true;

//     if(success){
//         resolve("operation successfull")//fulfill the promise
//     } else {
//         reject("operation failed")//reject the promise
//     }
// });
//promise example
// let internetSpeed = "fast";
// let downloadFile = new Promise((resolve,reject)=>{
//     console.log("download started...")

//     setTimeout(() => {
//         if(internetSpeed==="fast"){
//             resolve("File downloaded successfully");
//         }else{
//             reject("intrnet speed is slow,download failed");
//         }
//     }, 2000);
// })
// console.log("Dowload initaited");
// console.log(downloadFile);

//database operation
// function saveToDatabase(data){
//     return new Promise((resolve,reject)=>{
//         console.log("saving to database..");

//         setTimeout(() => {
//             let dbAvailable = true;

//             if(dbAvailable){
//                 resolve({
//                     message:"data saved successfully",
//                     id:12345,
//                     timestamp:new Date()
//                 });
//             }else{
//                 reject("database connection failed");
//             }
//         }, 1500);
//     });
// }
// let savePromise = saveToDatabase({name:"john",age:25});
// console.log(savePromise)

//consuming promises
//.then is called when promise is resolved to receive the resolves value
//.catch is called when promise is rejected to recive the error
// let promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("success data is here")
//         reject("failed")
//     }, 1000);
// });

// promise.then((message)=>{
//     console.log(message);
// });
// promsie.catch((error)=>{
//     console.log("error something went wrong");
// })
//correct way of using both together
// let loginStatus = "success";
// let loginPromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if(loginStatus==="success"){
//             resolve("login successful");
//         } else{
//             reject("login failed");
//         }
//     }, 1500);
// });
// loginPromise
//     .then((message)=>{
//         console.log("✅",message)
//         console.log("redirecting to dashboard");
//     })
//     .catch((error)=>{
//         console.log("❌",error);
//         console.log("please try again");
//     });

    // //real api example
    // function fetchUserProfile(userId){
    //     return new Promise((resolve,reject)=>{
    //         console.log("fetching user profile");

    //         setTimeout(()=>{
    //             if(userId>0){
    //                 resolve({
    //                     id:userId,
    //                     name:"priyanka sharma",
    //                     email:"priya@example.com",
    //                     role:"student"
    //                 });
    //             }else{
//                     reject("Invalid user ID");
//                 }
//             },2000);
//         });
//     }
// //success case 
// fetchUserProfile(101)
//     .then((user)=>{
//         console.log("user found");
//         console.log("Name":user.name);
//         console.log("Email:",user.email)
//     })
//     .catch((error)=>{
//         console.log("error",error);
//     });
//     //failure case 
//     fetchUserProfile(-1){
//         .then((user)=>)
//     }