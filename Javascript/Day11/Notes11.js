// //**JavaScript Day 11: DOM Manipulation**
// // *1. Manipulating Attributes*
// // Example 1: Get the ID of an element
// let solarImg=document.querySelector("Img");
// let idName=solarImg.img.getAttribute('id');
// console.log(idName);


// // Example 2: Change the ID
// let solarImg=document.querySelector('img');
// solarImg.setAttribute('id','galaxy');


// // Example 3: Change the image source
// let solarImg = document.querySelector('img');
// solarImg.setAttribute('src', 'assets/earth.jpg');


// // Example 4: Get and change a link's href
// let link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://nasa.gov');


// // Example 5: Check if an attribute exists
// let heading = document.querySelector('h1');
// let headId = heading.getAttribute('id');
// console.log(headId);



// // *2. Manipulating Style (Inline)*
// // Example 1: Change text color
// let heading = document.querySelector('h1');
// heading.style.color = 'orange';


// // Example 2: Change background color (camelCase!)
// let heading = document.querySelector('h1');
// heading.style.backgroundColor = 'black';


// // Example 3: Change multiple styles
// let para = document.querySelector('p');
// para.style.color = 'white';
// para.style.fontSize = '20px';
// para.style.padding = '15px';


// // Example 4: Change image sizelet img = document.querySelector('img');
// let img = document.querySelector('img');
// img.style.width = '500px';
// img.style.borderRadius = '10px';


// // Example 5: Hide an element
// let box = document.querySelector('.box');
// box.style.display = 'none'; 



// // *3. The classList Property*
// // Example 1: Add a class
// let para = document.querySelector('p');
// para.classList.add('green');


// // Example 2: Remove a class
// let para = document.querySelector('p');
// para.classList.remove('green');


// //  Example 3: Check if a class exists
// let para = document.querySelector('p');
// console.log(para.classList.contains('green'));


// // Example 4: Toggle a class
// let para = document.querySelector('p');
// para.classList.toggle('green'); 
// para.classList.toggle('green'); 


// // Example 5: Toggle on button click
// let box = document.querySelector('.box');
// let btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//  box.classList.toggle('highlight');
//  // Each click adds/removes the highlight class
// });


// // *4. Navigation (DOM Traversal)*
// // Example 1: Find all children of an element
// let box = document.querySelector('.box');
// let boxChildren = box.children;
// console.log(boxChildren);


// // Example 2: Navigate from child to parent
// let list = document.querySelector('ul');
// console.log(list.parentElement);


// // Example 3: Get the next sibling
// let list = document.querySelector('ul');
// let firstItem = list.children[0]; 
// let secondItem = firstItem.nextElementSibling; 
// console.log(secondItem.innerText);


// // Example 4: Access first and last child
// let box = document.querySelector('.box');
// console.log(box.children[0]); 
// console.log(box.children[box.children.length -1]); 


// // Example 5: Navigate through multiple siblings
// let heading1 = document.querySelector('#heading1');
// let nextEl = heading1.nextElementSibling;
// let afterThat = nextEl.nextElementSibling; 
// console.log(afterThat.innerText);



// // *5. Adding Elements to the Page*
// // Example 1: Create and add a button
// let newBtn = document.createElement('button');
// newBtn.innerText = "Explore Universe!";

// let box = document.querySelector('.box');
// box.appendChild(newBtn);


// // Example 2: Add element to the start
// let heading = document.createElement('h3');
// heading.innerText = "Welcome to Space!";

// let body = document.querySelector('body');
// body.prepend(heading);


// // Example 3: Create a paragraph with styling
// let newPara = document.createElement('p');
// newPara.innerText = "The universe is vast and mysterious.";
// newPara.style.color = 'cyan';
// newPara.style.fontSize = '18px';
// let box = document.querySelector('.box');
// box.appendChild(newPara);


// // Example 4: Using insertAdjacentElement (precise placement)
// let badge = document.createElement('span');
// badge.innerText = " 🌟 New!";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('beforeend', badge);


// // Example 5: Add multiple elements
// let list = document.querySelector('ul');
// let item1 = document.createElement('li');
// item1.innerText = "Neptune: Ice Giant";
// let item2 = document.createElement('li');
// item2.innerText = "Uranus: Ice Giant";
// list.appendChild(item1);
// list.appendChild(item2);



// // *6. insertAdjacentElement Positions*
// // Example 1:Add before an element
// let warning = document.createElement('p');
// warning.innerText = "⚠️ Content may change";
// let desc = document.querySelector('#description');
// desc.insertAdjacentElement('beforebegin', warning);


// // Example 2: Add inside, at the start
// let icon = document.createElement('span');
// icon.innerText = "🌍 ";
// let heading = document.querySelector('h1');
// heading.insertAdjacentElement('afterbegin', icon);


// // Example 3: Add inside, at the end
// let arrow = document.createElement('span');
// arrow.innerText = " →";
// let heading = document.querySelector('h2');
// heading.insertAdjacentElement('beforeend', arrow);


// // 7. Removing Elements from the Page
// // Example 1: Remove an element (Modern)
// let oldImg = document.querySelector('.oldImg');
// oldImg.remove();


// // Example 2: Remove using parent (Old way)
// let imageContainer = document.querySelector('.images');
// let oldImg = document.querySelector('.oldImg');
// imageContainer.removeChild(oldImg);


// // Example 3: Remove all images with a class
// let oldImages = document.querySelectorAll('.oldImg');
// // Loop through and remove each one
// for (let img of oldImages) {
//  img.remove();
// }


// // Example 4: Remove on button click
// let btn = document.querySelector('button');
// let box = document.querySelector('.box');
// btn.addEventListener('click', function() {
//  box.remove(); // Box disappears when button is clicked
// });


// // Example 5: Remove a specific child
// let list = document.querySelector('ul');
// let firstItem = list.children[0];
// firstItem.remove(); 



// *8. Practice Exercises*
