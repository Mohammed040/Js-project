// Get query parameters from the URL
const params = new URLSearchParams(window.location.search);
// alert(params)

// Extract values
const name = params.get('name');
const fatherName = params.get('fatherName');
const email = params.get('email');
const phone = params.get('phone');
const address = params.get('address');
const password = params.get('password');
console.log(`id : ${params.get('id')}`)
// alert(`name : ${name} f-n : ${fatherName} email : ${email} phone : ${phone} address : ${address} id : ${id}`)

// Populate the form fields
document.getElementById('name').value = name || '';
document.getElementById('father-name').value = fatherName || '';
document.getElementById('email').value = email || '';
document.getElementById('phone').value = phone || '';
document.getElementById('address').value = address || '';
document.getElementById('password').value = password || '';


document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const updatedData = {
      name: document.getElementById('name').value.trim(),
      fatherName: document.getElementById('father-name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      address: document.getElementById('address').value.trim(),
      password: document.getElementById('password').value.trim(),
    };
  
    try {
      const response = await fetch(`http://localhost:3000/users/${params.get('id')}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
    //   if (!response.ok) {
    //     throw new Error(`Failed to update user.Status: ${response.status}`);
    //   }
    window.location.href = "../index.html"
  
      alert('User updated successfully!');
      // window.location.href = '/index.html'; // Redirect to main page
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user. Please try again.');
    }
  });
  