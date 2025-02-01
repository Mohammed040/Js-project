// // const { bodyParser } = require("json-server");





const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const fatherName = document.querySelector("#father-name");
const address = document.querySelector("#address");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  const nameValue = name.value.trim();
  const fatherNameValue = fatherName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();
  const passwordValue = password.value.trim();

  // Validation
  if (nameValue == "" || !isNaN(nameValue)) {
    alert("Please enter the valid Name.");
    name.focus();
    return false;
  }
  if (fatherNameValue == "" || !isNaN(fatherNameValue)) {
    alert("Please enter the valid Father's Name.");
    fatherName.focus();
    return false;
  }
  

  if (emailValue == "") {
    alert("Please enter the Email.");
    email.focus();
    return false;
  }

  if (phoneValue == "" || phoneValue.length < 10 || phoneValue.length > 10) {
    alert("Please enter the valid Phone Number.");
    phone.focus();
    return false;
  }
  
  if (passwordValue == "" || passwordValue.length < 5) {
    alert("Please enter the valid Password.");
    password.focus();
    return false;
  }
  
  if (addressValue == "") {
    alert("Please enter the Address.");
    address.focus();
    return false;
  }

  // Create new user object
  const newUser = {
    name: nameValue,
    "fatherName": fatherNameValue,
    email: emailValue,
    "phone": phoneValue,
    address: addressValue,
    password: passwordValue,
  };

  // Save user data using fetch

  fetch("http://localhost:3000/users",{
    method : "POST",
    headers : {
      "content-Type": "application/json"
    },
    body : JSON.stringify(newUser),
  })
  .then((response)=>{
    if(response.ok){
      window.location.href ="/index.html";
      alert("User added Successfully.")
    }
    else{
      alert("Failed to save data. Please try again.")
    }
  })
  .catch((error => {
    console.error("Error : ", error);
    alert("An error occurred while saving data.")
  }));



  // fetch("http://localhost:3000/users", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(newUser),
  // })
  //   .then((response) => {
  //     if (response.ok) {
  //         window.location.href = "/index.html"; // Change "/index.html" to your actual login page path
  //       alert("Employee added Successfully.");
  //       // form.reset();
  //       // Redirect to login page
  //     } else {
  //       alert("Failed to save data. Please try again.");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     alert("An error occurred while saving data.");
  //   });
});