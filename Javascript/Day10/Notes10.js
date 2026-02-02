// // *JavaScript Day 10: The Document Object Model (DOM)*
// // Example 1: Select the Main Image
// let mainImage = document.getElementById("mainImg");
// console.log(mainImage);


// // Example 2: Select the Heading
// let heading = document.getElementById("heading1");
// console.log(heading);


// // Example 3: Check if Element Exists
// let element = document.getElementById("nonexistent");
// console.log(element);



// // *4. Selecting Elements by Class Name*
// // Example 1: Select All Small Images
// let oldImages = document.getElementsByClassName("oldImg");
// console.log(oldImages);

// console.log


// Example 2: Access Individual Elements
// let oldImages1 = document.getElementsByClassName("oldImg");
// console.log(oldImages1[0]); 
// console.log(oldImages1[1]);
// console.log(oldImages1[2]);


// // Example 3: Loop Through the Collection
// let oldImages = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldImages.length; i++) {
//  console.log(oldImages[i]);
// }


// // Example 4: Select Box Links
// let boxLink=document.getElementsByClassName("boxLink");
// console.log(boxLink.Link);


// // *5. Selecting Elements by Tag Name*
// // Example 1: Select All Paragraphs
// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);


// // Example 3: Select All Links
// let allLinks = document.getElementsByTagName("a");
// console.log(allLinks);

// console.log(allLinks.length);


// // Example 4: Select All Images
// let allImages = document.getElementsByTagName("img");
// console.log(allImages);


// // *6. Query Selectors (The Modern Way!)*
// // Example 1: Select by ID
// let heading = document.querySelector("#heading1");
// console.log(heading);


// // Example 2: Select by Class (First Match Only)
// let firstOldImage = document.querySelector(".oldImg");
// console.log(firstOldImage);


// // Example 3: Select All Elements with querySelectorAll
// let allOldImages = document.querySelectorAll(".oldImg");
// console.log(allOldImages);


// // Example 4:Selecct by Tag
// let firstparagraph=document.querySelector("p");
// console.log(firstparagraph);


// // Example 5: Complex Selectors (Links Inside a Specific Div)
// let boxLinks= document.querySelectorAll(".box a");
// console.log(boxLinks);


// //*8. innerText*
// // Example 1: Get Visible Text
// let para=document.querySelector("#description");
// console.log(para.innerText);


// // Example 2: Change Heading Text
// let heading = document.querySelector("#heading1");
// heading.innerText = "Our Amazing Solar System";


// // Example 3: Get Text from Multiple Elements
// let firstPara = document.querySelector("p");
// console.log(firstPara.innerText);


// // *9. textContent*
// // Example 1: Get All Text Content
// let para=document.querySelector("#description");
// console.log(para.textContent);


// // Example 2: Change Text Content
// let heading=document.querySelector("h1");
// heading.textContent="Welcome to Space!";


// // Example 3: Compare with innerText
// let element= document.querySelector("#descrition");
// console.log(element.innerText);
// console.log(element.innerContent);



// // *10. innerHTML*
// // Example 1: See the HTML Structure
// let para=document.querySelector("p");
// console.log(para.innerHTML);


// // Example 2: Add HTML Tag
// let heading=document.querySelector("#heading1");
// heading.innerHTML="<u>The Solar System</u>";


// // Example 3: Add Complex HTML
// let heading=document.querySelector("h1");
// heading.innerHTML="The<span style='color:gold;'>Solar</span>System";


// // Example 4: Read Links from Paragraph
// let para=document.querySelector("p");
// console.log(para.innerHTML);