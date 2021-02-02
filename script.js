"use strict";

// #1 VENDING MACHINE
// Create four buttons. Each button represents a different product with a different price. Also
// display a total, which starts at $0.00. Whenever a button is clicked, update the total by adding
// the price of that item.

let total = 0;
let totalParagraph = document.querySelector(".total");

let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}`;
});

peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}`;
});

gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}`;
});

// #2 MAKE MONEY
// Create a form with two inputs: a number input (or range input) for count and a select input for the type of coin: Penny, Nickel, Dime, or Quarter.
// ● When the form is submitted, add the specified number of “coins” to the page, each with text from the “Which coin?” input. For example, the diagram below shows what would be displayed after submitting the form.
// ● Whenever the form is submitted, it should continue adding additional coins, notremoving the previous coins.
// ● Finally, whenever a coin is clicked, remove just that the clicked coin from the page.

// let makeMoney = document.querySelector(".make-money");

// makeMoney.addEventListener("submit", (event) => {}

//     event.preventDefault();
//     contactsContainer.innerHTML = ""; //whatever is in html of contacts container needs to be removed.
//     let formData = new FormData(contactForm);
//     let firstName = formData.get("name");
//     let number = formData.get("number");
//     let newObject = {
//       name: firstName,
//       number: number,
//     };
//     contactForm.reset();
//     contacts.push(newObject);
//     display();
//     console.log(contacts);
// });

// #3 LIGHT BULB
// Start with a “light bulb” div and four buttons. The light bulb starts off with a dark background.
// ● When the “on” button is clicked, the background changes to light (or remains light if it was already light)
// ● When the “off” button is clicked, the background changes to dark (or remains dark if it was already dark)
// ● When the “toggle” button is clicked, the background changes to light if it was dark and dark if it was light.
// ● When the “end” button is clicked, the light bulb div is completely removed from the page (not just hidden) and the four buttons become disabled

let lightBulb = document.querySelector(".light-bulb");

lightBulb.addEventListener("click", () => {
  lightBulb.classList.toggle("alternate");
});
