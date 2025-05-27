document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  if (path === "/history") {
    document.body.innerHTML =
      "<h1 style='color: red; text-align: center; color:#002626; margin-top: 20px'>403 Forbidden</h1>";
    return;
  }
  if (path.startsWith("/history/")) {
    return;
  }
  document.body.style.display = "none";
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");
  const encodedPassword = btoa(password);
  if (username !== "lime" || encodedPassword !== "bGltZTEyMw==") {
    document.body.style.display = "block";
    document.body.innerHTML =
      "<h1 style='color: red; text-align: center; color:#002626; margin-top: 20px'>Unauthorized</h1>";
  } else {
    document.body.style.display = "block";
  }
});
