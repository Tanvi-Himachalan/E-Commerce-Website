document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Demo credentials
  if (username === "admin" && password === "1234") {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("error-msg").innerText =
      "Invalid username or password";
  }
});
