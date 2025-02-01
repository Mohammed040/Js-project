const parentContainer = document.querySelector(".parent");
const searchInput = document.querySelector(".search-wrapper input");
const themeToggle = document.querySelector(".theme-toggle");
const container = document.querySelector("#container");
const section = document.querySelector(".section");
const body = document.body;
// const section = document.getElementsByTagName('.section');  // Access the first (and only) body element

themeToggle.addEventListener("click", () => {
  // body.style.cssText = "background-color: black; color: white;";
  // parentContainer.classList.toggle("dark")
  // body.classList.contains("dark")
  container.classList.toggle("dark");
  // console.log("hello world");
});

let userData = []; // To store the fetched data

// Fetch data from JSON Server
fetch("http://localhost:3000/users") // Replace `/data` with your JSON Server endpoint
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    userData = data; // Store the data for search functionality
    renderUsers(userData); // Initial render of all users
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Function to render users
function renderUsers(users) {
  parentContainer.innerHTML = ""; // Clear existing content

  users.forEach((item) => {
    const container = document.createElement("div");
    // container.classList.add = 'container';
    container.className = "container";

    container.innerHTML = `
        <div class="card">
          <div class="front">
            <div class="first">
              <div class="name">
                <p class="p1">Name</p>
                <p class="p2">:</p>
                <p class="p3">${item.name}</p>
              </div>
              <div class="father-name">
                <p class="p1">Father Name</p>
                <p class="p2">:</p>
                <p class="p3">${item.fatherName}</p>
              </div>
              <div class="email">
                <p class="p1">Email</p>
                <p class="p2">:</p>
                <p class="p3">${item.email}</p>
              </div>
              <div class="phone">
                <p class="p1">Phone Number</p>
                <p class="p2">:</p>
                <p class="p3">${item.phone}</p>
              </div>
            </div>
            <div class="second" id="check">
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
              <img src="/images/download.png" alt="Download" class="download-btn" />
            </div>
          </div>
          <div class="back">
            <div class="address">
              <p class="p1">Address</p>
              <p class="p2">:</p>
              <p class="p3">${item.address}</p>
            </div>
          </div>
        </div>
      `;

    // Add flip functionality

    const card = container.querySelector(".card");
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.toggle("is-flipped");
      console.log("Card flipped:", card.classList.contains("is-flipped"));
    });

    // Optional: Add mouseleave event to flip back
    card.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      card.classList.remove("is-flipped");
    });

    // // Add download functionality
    // const downloadButton = container.querySelector(".download-btn");
    // downloadButton.addEventListener("click", (e) => {
    //   e.stopPropagation(); // Prevent card flip
    //   generatePDF(item);
    // });

    // Add edit and delete event listeners (unchanged)
    const editButton = container.querySelector(".edit");
    const deleteButton = container.querySelector(".delete");

    editButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent card flip

      const queryParams = new URLSearchParams({
        id: item.id,
        name: item.name,
        fatherName: item.fatherName,
        email: item.email,
        phone: item.phone,
        address: item.address,
        password: item.password,
      }).toString();

      window.location.href = `/edit/edit.html?${queryParams}`;
    });

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent card flip

      if (!confirm(`Are you sure you want to delete ${item.name}?`)) {
        return;
      }

      fetch(`http://localhost:3000/users/${item.id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to delete the user");
          }

          const cardElement = deleteButton.closest(".container");
          if (cardElement) {
            cardElement.remove();
          }
          alert(`User with ID ${item.id} deleted successfully`);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Failed to delete the user. Please try again.");
        });
    });

    parentContainer.appendChild(container);
  });
}

// Function to generate and download the PDF
function generatePDF(user) {
  if (window.jspdf && window.jspdf.jsPDF) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add text content
    doc.text("User Details", 10, 10);
    doc.text(`Name: ${user.name}`, 10, 20);
    doc.text(`Father Name: ${user.fatherName}`, 10, 30);
    doc.text(`Email: ${user.email}`, 10, 40);
    doc.text(`Phone: ${user.phone}`, 10, 50);
    doc.text(`Address: ${user.address}`, 10, 60);

    // Save the PDF with user's name
    doc.save(`${user.name}_details.pdf`);
  } else {
    console.error("jsPDF library not found");
  }
}

// Search functionality
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filteredUsers = userData.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm) ||
      user.fatherName.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.phone.toLowerCase().includes(searchTerm)
    );
  });

  renderUsers(filteredUsers); // Render filtered users
});
