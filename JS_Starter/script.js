//! DOM Start

/* var bodyElement = document.querySelector("body");
isYellow = false;

setInterval(() => {
  if (isYellow) {
    bodyElement.style.backgroundColor = "white";
  } else {
    bodyElement.style.backgroundColor = "yellow";
  }
  isYellow = !isYellow;
}, 1000);
 */

//!  Select Methods in DOM

/*var selectById = document.getElementById("oakParagraph");
console.log(selectById);

var selectWithClass = document.getElementsByClassName("background");
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName("h1");
console.log(selectWithTag);

var selectWithQueryTag = document.querySelector("h1");
console.log(selectWithQueryTag);

var selectWithQueryId = document.querySelector("#oakParagraph");
console.log(selectWithQueryId);

var selectWithQueryClass = document.querySelector(".background");
console.log(selectWithQueryClass);

var selectWithQueryAllClass = document.querySelectorAll(".background");
console.log(selectWithQueryAllClass);
*/

//! Manipulation Methods

// var divToManipulate = document.querySelector(".background");

//? Manipulating style

/* divToManipulate.style.height = "30px";
divToManipulate.style.width = "400px";
divToManipulate.style.backgroundColor = "red";
divToManipulate.style.fontSize = "30px";
divToManipulate.style.border = "5px solid black"; */

//? Accessing and Removing classes

/* divToManipulate.classList.add("newClass");
divToManipulate.classList.remove("newClass");

divToManipulate.classList.toggle("newClass");
divToManipulate.classList.toggle("newClass"); */

//? Manipulating text

/* var oakParagraph = document.querySelector("#oakParagraph");

console.log(oakParagraph.textContent);
oakParagraph.textContent = "This is the new text content";

console.log(oakParagraph.innerHTML);
oakParagraph.innerHTML = "This is the new <strong>inner</strong> text"; */

//? Manipulating attributes

/* var oakLink = document.querySelector("a");

console.log(oakLink.getAttribute("href"));

oakLink.setAttribute(
  "href",
  "https://www.oakacademy.co.uk/courses/javascript-course/",
);

console.log(oakLink.getAttribute("href"));

oakLink.textContent = "OAK Academy JS Course"; */

//! Event Handlers

/* var button1 = document.querySelector("#btn1");

button1.addEventListener("click", () => {
  console.log("You clicked this button");
});
 */

//! Quiz

/* var ulSelect = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

ulSelect.addEventListener("click", () => {
  ulSelect.style.backgroundColor = "blue";
});

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    this.style.color = "white";
  });
} */

//! Quiz

// var todoItems = document.querySelectorAll(".todoItem");

// for (let i = 0; i < todoItems.length; i++) {
//   todoItems[i].addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "blue";
//     event.target.style.color = "white";
//   });

//   todoItems[i].addEventListener("mouseleave", (event) => {
//     event.target.style.backgroundColor = "white";
//     event.target.style.color = "black";
//   });
// }
