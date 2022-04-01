const menu = document.getElementById("menu");
const ul = document.querySelector("ul");
menu.addEventListener("click", () => {
  console.log("clicked");
  ul.classList.toggle("active");
});

//
