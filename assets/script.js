window.onload = function () {
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");

  const encodedPassword = btoa(password);

  // Username: admin
  // Password: 123456 → Base64: MTIzNDU2
  if (username !== "admin" || encodedPassword !== "MTIzNDU2") {
    alert("Access denied");
    document.body.innerHTML =
      "<h1 style='color: red; text-align: center;'>Unauthorized</h1>";
  } else {
    alert("Welcome, " + username + "!");
  }
};

const articles = document.querySelectorAll("article");
let visible = false;

function slideDown(el) {
  el.style.display = "block";
  el.style.height = "auto";
  const height = el.scrollHeight + "px";
  el.style.height = "0";
  requestAnimationFrame(() => {
    el.style.height = height;
  });
}

function slideUp(el) {
  el.style.height = "0";
}

setInterval(() => {
  articles.forEach((article) => {
    if (visible) {
      slideUp(article);
    } else {
      slideDown(article);
    }
  });
  visible = !visible;
}, 3000);
