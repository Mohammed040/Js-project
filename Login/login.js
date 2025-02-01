const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit",async (e) => {
  e.preventDefault(); // Prevent form submission

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Validation for Email and Password
  if (emailValue === "") {
    alert("Please enter the Email.");
    email.focus();
    return false;
  }

  if (passwordValue === "") {
    alert("Please enter the Password.");
    password.focus();
    return false;
  }

  // Fetch users from the json-server
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      // Check if user exists with matching email and password
      const user = data.find((user) => user.email === emailValue);

      if (!user) {
        alert("Email not found. Please enter a valid email.");
        email.focus();
        return false;
      }

      // If email found, check password
      if (user.password !== passwordValue) {
        alert("Incorrect password. Please try again.");
        password.focus();
        return false;
      }

      // If both email and password match
      alert(`Welcome, ${user.name}!`);
      window.location.href="/index.html"
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error checking your login details.");
    });
  

});
