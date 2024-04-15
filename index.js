// Define the URL for your local API
const API_URL = 'http://localhost:3000/ramen';

// Function to display all ramen images
async function displayRamens() {
  const response = await fetch(API_URL);
  const ramens = await response.json();
  
  const ramenMenu = document.getElementById('ramen-menu');
  ramenMenu.innerHTML = ''; // Clear previous content
  
  ramens.forEach(ramen => {
    const img = document.createElement('img');
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener('click', () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// Function to handle click on a ramen image
function handleClick(ramen) {
  const ramenDetail = document.getElementById('ramen-detail');
  ramenDetail.innerHTML = `<p>${ramen.comment}</p><p>Rating: ${ramen.rating}</p>`;
}

// Function to add submit listener to the form
function addSubmitListener() {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const newRamen = {
      name: formData.get('name'),
      image: formData.get('image'),
      rating: formData.get('rating'),
      comment: formData.get('comment')
    };

    // Display the new ramen in the menu
    const ramenMenu = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenu.appendChild(img);
  });
}

// Main function to start the program logic
function main() {
  displayRamens();
  addSubmitListener();
}

// Invoke main function after DOM has fully loaded
document.addEventListener('DOMContentLoaded', main);
