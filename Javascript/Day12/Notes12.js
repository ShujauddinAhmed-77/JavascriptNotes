// // **JavaScript Day 12: DOM Events**
// // *2. Event Listeners with addEventListener*
// // Example 1: Basic Button Click
// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//  console.log("Button was clicked!");
//  alert("You clicked me!");
// });


// // Example 2: Multiple Listeners on Same Element
// let button = document.querySelector("#myBtn");

// button.addEventListener("click", function() {
//  console.log("First action");
// });

// button.addEventListener("click", function() {
//  console.log("Second action");
// });


// // Example 3: Paragraph Click Counter
// let para = document.querySelector("p");
// let count = 0;
// para.addEventListener("click", function() {
//  count++;
//  para.innerText = `You clicked me ${count} times!`;
// });


// // *3. Mouse & Pointer Events*
// // Example 1: Hover Color Change
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function() {
//  box.style.backgroundColor = "yellow";
//  console.log("Mouse entered!");
// });
// box.addEventListener("mouseleave", function() {
//  box.style.backgroundColor = "white";
//  console.log("Mouse left!");
// });


// // Example 2: Click to Toggle Visibility
// let hideBtn = document.querySelector("#hideBtn");
// let content = document.querySelector("#content");
// hideBtn.addEventListener("click", function() {
//  if (content.style.display === "none") {
//  content.style.display = "block";
//  hideBtn.innerText = "Hide";
//  } else {
//  content.style.display = "none";
//  hideBtn.innerText = "Show";
//  }
// });


// // Example 3: Double Click to Edit
// let heading = document.querySelector("h1");
// heading.addEventListener("dblclick", function() {
//  heading.innerText = "You double-clicked me!";
//  heading.style.color = "red";
// })


// // Example 4: Interactive Card Hover
// let card = document.querySelector(".card");
// card.addEventListener("mouseenter", function() {
//  card.style.transform = "scale(1.1)";
//  card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });
// card.addEventListener("mouseleave", function() {
//  card.style.transform = "scale(1)";
//  card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });



// // *4. The this Keyword in Event Listeners*
// // Example 1: Universal Color Changer
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let button = document.querySelector("button");
// function changeColor() {
//  this.style.backgroundColor = "lightblue";
//  console.log(this.innerText + " was clicked!");
// }

// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// button.addEventListener("click", changeColor);


// // Example 2: Toggle Class on Click
// let boxes = document.querySelectorAll(".box");
// function toggleActive() {
//  this.classList.toggle("active");
// }
// // Apply to all boxes
// for (let box of boxes) {
//  box.addEventListener("click", toggleActive);
// }


// // Example 3: Delete Button
// let deleteButtons = document.querySelectorAll(".delete-btn");
// function removeItem() {
//  this.parentElement.remove(); // Remove the parent div
//  console.log("Item deleted!");
// }
// for (let btn of deleteButtons) {
//  btn.addEventListener("click", removeItem);
// }


// // Example 4: Highlight on Hover (Multiple Elements)
// let menuItems = document.querySelectorAll(".menu-item");
// function highlight() {
//  // Remove highlight from all items first
//  for (let item of menuItems) {
//  item.style.fontWeight = "normal";
//  }
//  // Highlight only the clicked one
//  this.style.fontWeight = "bold";
// }
// for (let item of menuItems) {
//  item.addEventListener("click", highlight);
// } 


// // *5. Keyboard Events*
// // Example 1: Display Typed Character
// let input = document.querySelector("input");
// input.addEventListener("keydown", function(event) {
//  console.log("Key:", event.key);
//  console.log("Code:", event.code);
// });


// // Example 2: Arrow Key Navigation (Game Controls)
// let player = document.querySelector("#player");
// document.addEventListener("keydown", function(event) {
//  if (event.code === "ArrowUp") {
//  console.log("Move Up");
//  player.style.top = (parseInt(player.style.top) - 10) + "px";
//  } else if (event.code === "ArrowDown") {
//  console.log("Move Down");
//  player.style.top = (parseInt(player.style.top) + 10) + "px";
//  } else if (event.code === "ArrowLeft") {
//  console.log("Move Left");
//  player.style.left = (parseInt(player.style.left) - 10) + "px";
//  } else if (event.code === "ArrowRight") {
//  console.log("Move Right");
//  player.style.left = (parseInt(player.style.left) + 10) + "px";
//  }
// });


// // Example 3: Enter Key to Submit
// let searchBox = document.querySelector("#search");
// searchBox.addEventListener("keydown", function(event) {
//  if (event.key === "Enter") {
//  console.log("Searching for:", searchBox.value);
//  alert("You searched for: " + searchBox.value);
//  }
// });

// // Example 4: Keyboard Shortcut (Ctrl + S)
// document.addEventListener("keydown", function(event) {
//  if (event.ctrlKey && event.key === "s") {
//  event.preventDefault(); // Stop browser from saving page
//  console.log("Custom save triggered!");
//  alert("Content saved!");
//  }
// });


// // Example 5: Character Limit Warning
// let textarea = document.querySelector("textarea");
// let counter = document.querySelector("#counter");
// textarea.addEventListener("keyup", function() {
//  let length = textarea.value.length;
//  counter.innerText = length + " / 100 characters";

//  if (length > 100) {
//  counter.style.color = "red";
//  } else {
//  counter.style.color = "black";
//  }
// });


// // *6. Form Events & preventDefault()*
// // Example 1: Basic Form Submission Prevention
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//  event.preventDefault(); // STOP the page reload!
//  console.log("Form submitted!");
// });


// // Example 2: Login Form Handler
// let loginForm = document.querySelector("#loginForm");
// loginForm.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let username = document.querySelector("#username").value;
//  let password = document.querySelector("#password").value;

//  console.log("Username:", username);
//  console.log("Password:", password);

//  alert("Welcome, " + username + "!");
// });


// // Example 3: Form Validation
// let signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let email = document.querySelector("#email").value;
//  let age = document.querySelector("#age").value;

//  if (age < 18) {
//  alert("You must be 18 or older to sign up!");
//  } else if (!email.includes("@")) {
//  alert("Please enter a valid email!");
//  } else {
//  alert("Signup successful!");
//  console.log("User registered:", email);
//  }
// });


// // Example 4: Search Form with Results Displa
// let searchForm = document.querySelector("#searchForm");
// let results = document.querySelector("#results");
// searchForm.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let query = document.querySelector("#searchInput").value;
//  results.innerText = `You searched for: "${query}"`;

//  // Clear the input
//  document.querySelector("#searchInput").value = "";
// });



// // *7. Extracting Form Data*
// // Example 1: Get Input Value
// let nameInput = document.querySelector("#name");
// let btn = document.querySelector("#submitBtn");
// btn.addEventListener("click", function() {
//  let userName = nameInput.value; // Use .value for inputs!
//  console.log("Name entered:", userName);
// });


// // Example 2: Multiple Input Fields
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//  event.preventDefault();

//  let firstName = document.querySelector("#firstName").value;
//  let lastName = document.querySelector("#lastName").value;
//  let email = document.querySelector("#email").value;

//  console.log("Full Name:", firstName + " " + lastName);
//  console.log("Email:", email);
// });


// // Example 3: Dropdown Selection
// let dropdown = document.querySelector("#country");
// let btn = document.querySelector("#selectBtn");
// btn.addEventListener("click", function() {
//  let selected = dropdown.value;
//  console.log("Selected country:", selected);
//  alert("You selected: " + selected);
// });


// //*8. Change vs Input Events*
// // Example 1: Live Character Counter (input)
// let textArea = document.querySelector("textarea");
// let counter = document.querySelector("#charCount");
// textArea.addEventListener("input", function() {
//  let count = textArea.value.length;
//  counter.innerText = count + " characters";
// });


// // Example 2: Final Submission (change)
// let nameField = document.querySelector("#name");
// nameField.addEventListener("change", function() {
//  console.log("Final name:", nameField.value);
//  alert("Name saved: " + nameField.value);
//  })


// // Example 3: Live Search Suggestions (input)
// let searchBox = document.querySelector("#search");
// let suggestions = document.querySelector("#suggestions");
// searchBox.addEventListener("input", function() {
//  let query = searchBox.value;

//  if (query.length > 0) {
//  suggestions.innerHTML = `
//  <p>Searching for: ${query}</p>
//  <p>Result 1: ${query} tutorial</p>
//  <p>Result 2: ${query} guide</p>
//  `;
//  } else {
//  suggestions.innerHTML = "";
//  }
// })


// // Example 4: Password Strength Meter (input)
// let password = document.querySelector("#password");
// let strength = document.querySelector("#strength");
// password.addEventListener("input", function() {
//  let length = password.value.length;

//  if (length < 4) {
//  strength.innerText = "Weak";
//  strength.style.color = "red";
//  } else if (length < 8) {
//  strength.innerText = "Medium";
//  strength.style.color = "orange";
//  } else {
//  strength.innerText = "Strong";
//  strength.style.color = "green";
//  }
// });


// // Example 5: Comparison - Both Events Together
// let input = document.querySelector("#myInput");
// // Fires on every keystroke
// input.addEventListener("input", function() {
//  console.log("Typing...", input.value);
// });
// // Fires only when done (blur or Enter)
// input.addEventListener("change", function() {
//  console.log("Final value:", input.value);
//  alert("You entered: " + input.value);
//  })


// 9. Practice Activity: Interactive Text Editor
