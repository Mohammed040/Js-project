// // const { bodyParser } = require("json-server");

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const fatherName = document.querySelector("#father-name");
const address = document.querySelector("#address");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent default form submission

  const nameValue = name.value.trim();
  const fatherNameValue = fatherName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const passwordValue = password.value.trim();
  const addressValue = address.value.trim();

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
  try{
   const response = await fetch("http://localhost:3000/users", {

    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
      if (!response.ok) {
        alert("Failed to save data. Please try again.");
          
        // form.reset();
        // Redirect to login page
      } 
      window.location.href = "login.html";
      alert("Data saved successfully.");
      console.log("Redirecting to login page...");
       // Ensure this path is correct
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while saving data. Please try again.");
    }
  });

// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const password = document.querySelector("#password");
// const fatherName = document.querySelector("#father-name");
// const address = document.querySelector("#address");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const nameValue = name.value.trim();
//   const emailValue = email.value.trim();
//   const phoneValue = phone.value.trim();
//   const passwordValue = password.value.trim();
//   const fatherNameValue = fatherName.value.trim();
//   const addressValue = address.value.trim();

//   // Validation
//   if (nameValue == "" || !isNaN(nameValue)) {
//     alert("Please enter a valid Name.");
//     name.focus();
//     return;
//   }

//   if (emailValue == "") {
//     alert("Please enter the Email.");
//     email.focus();
//     return;
//   }

//   if (phoneValue == "" || phoneValue.length !== 10) {
//     alert("Please enter a valid Phone Number.");
//     phone.focus();
//     return;
//   }

//   if (passwordValue == "" || passwordValue.length < 5) {
//     alert("Please enter a valid Password.");
//     password.focus();
//     return;
//   }

//   if (fatherNameValue == "" || !isNaN(fatherNameValue)) {
//     alert("Please enter a valid Father's Name.");
//     fatherName.focus();
//     return;
//   }

//   if (addressValue == "") {
//     alert("Please enter the Address.");
//     address.focus();
//     return;
//   }

//   // Create new user object
//   const newUser = {
//     name: nameValue,
//     "phone-number": phoneValue,
//     email: emailValue,
//     "father-name": fatherNameValue,
//     address: addressValue,
//     password: passwordValue,
//   };

//   try {
//     let response = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to save data.");
//     }

//     alert("Data saved Successfully.");
//     console.log("Redirecting to login page...");
//     // window.location.href = "./Login/login.html";
//     window.location.href = "http://localhost:3000/login.html";

//   } catch (error) {
//     console.error("Error:", error);
//     alert("An error occurred while saving data. Please try again.");
//   }
// });









// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const phone = document.querySelector("#phone");
// const password = document.querySelector("#password");
// const fatherName = document.querySelector("#father-name");
// const address = document.querySelector("#address");


// form.addEventListener("submit",async (e)=>{
//     e.preventDefault()
//     // alert("hello")

//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const passwordValue = password.value.trim();
//     const fatherNameValue = fatherName.value.trim();
//   const addressValue = address.value.trim();
    
//     if(nameValue == ""){
//         e.preventDefault();
//         alert("Please enter the Name.")
//         name.focus();
//         return false;
//     }
//     if(!isNaN(nameValue)){
//         e.preventDefault();
//         alert("Please enter the valid Name.")
//         name.focus();
//         return false;
//     }

//     if(emailValue== ""){
//         e.preventDefault();
//         alert("Please enter the Email.")
//         email.focus();
//         return false;
//     }

//     if(phoneValue==""){
//         e.preventDefault();
//         alert("Please enter the Phone Number.")
//         phone.focus();
//         return false;
//     }
//     if(phoneValue.length<10||phoneValue.length>10){
//         e.preventDefault();
//         alert("Please enter the Valid Phone Number.")
//         phone.focus();
//         return false;
//     }
//     if(passwordValue==""){
//         e.preventDefault();
//         alert("Please enter the Password.")
//         password.focus();
//         return false;
//     }
//     if(passwordValue.length<5){
//         e.preventDefault();
//         alert("Please enter the valid Password.")
//         password.focus();
//         return false;
//     }
//     if(fatherNameValue == ""){
//         e.preventDefault();
//         alert("Please enter the Father's Name.")
//         fatherName.focus();
//         return false;
//     }
//     if(!isNaN(fatherNameValue)){
//         e.preventDefault();
//         alert("Please enter the valid Father's Name.")
//         fatherName.focus();
//         return false;
//     }
//     if(addressValue == ""){
//         e.preventDefault();
//         alert("Please enter the Address.")
//         address.focus();
//         return false;
//     }
    
//     // Create new user object
//     const newUser = {
//                 "name":nameValue,
//                 "phone-number":phoneValue,
//                 "email":emailValue,
//                 "father-name":fatherNameValue,
//                 "address":addressValue,
//                 "password":passwordValue
//     };

//     try{
//         let response = await fetch("http://localhost:3000/users",{
//             method : "POST",
//         Headers : {
//             "Content-Type":"application/json",
//         },
//         body : JSON.stringify(newUser),
//         })
        
//         if(!response.ok){
//             throw new Error("Failed to save data.")
//         }       

//         alert("Data saved Successfully.");
//         window.location.href = "login.html"
//         console.log("Response status:", response.status);

//     }
//     catch(error){
//         console.error("error : ",error)
//         alert("An error occurred while saving data. Please try again.")
//     }   

// })

// // fetch("http://localhost:3000/users",
//     //     {
//     //         method: "POST",
//     //         Headers : {
//     //             "Content-Type": "application/json",
//     //         },
//     //         body : JSON.stringify(newUser),
//     //     }
//     // )
