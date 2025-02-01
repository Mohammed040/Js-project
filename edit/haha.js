


let products = []; // Variable to store fetched data

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('Products:', response);
    console.log(hello)
    console.table(response)
    products = await response.json(); // Assign the fetched data to the variable
    console.log('Products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Call the function to fetch data
fetchProducts();
