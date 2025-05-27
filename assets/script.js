"use strict";

window.onload = function () {
  console.log("window.onload triggered");

  const username = prompt("Enter username:");
  const password = prompt("Enter password:");

  const encodedPassword = btoa(password);
  console.log("Username:", username);
  console.log("Encoded Password:", encodedPassword);

  // Username: admin
  // Password: 123456 → Base64: MTIzNDU2
  if (username !== "admin" || encodedPassword !== "MTIzNDU2") {
    console.log("Access denied");
    alert("Access denied");
    document.body.innerHTML =
      "<h1 style='color: red; text-align: center;'>Unauthorized</h1>";
  } else {
    console.log("Access granted");
    alert("Welcome, " + username + "!");
  }
};

const articles = document.querySelectorAll("article");
let visible = false;

function slideDown(el) {
  console.log("slideDown called on:", el);
  el.style.display = "block";
  el.style.height = "auto";
  const height = el.scrollHeight + "px";
  el.style.height = "0";
  requestAnimationFrame(() => {
    el.style.height = height;
  });
}

function slideUp(el) {
  console.log("slideUp called on:", el);
  el.style.height = "0";
}

setInterval(() => {
  console.log("Toggling articles visibility:", visible ? "hide" : "show");
  articles.forEach((article) => {
    if (visible) {
      slideUp(article);
    } else {
      slideDown(article);
    }
  });
  visible = !visible;
}, 3000);
