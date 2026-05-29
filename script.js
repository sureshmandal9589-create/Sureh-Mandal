// Search Button Function

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

  const searchInput = document.querySelector(".search-box input").value;

  if(searchInput === ""){
    alert("Please enter a product name");
  } else {
    alert("Searching for: " + searchInput);
  }

});


// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});






// Add To Cart Button

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    alert("Product Added To Cart");

  });

});