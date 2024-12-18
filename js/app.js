// Global variables to hold products and cart
let products = [];
let cart = [];

// Load products and hero images on page load
function loadProducts() {
    products = mockProductData; // Assuming mockProductData is already defined
    displayProducts(products);
    displayHeroImages(heroimagesource); // Assuming heroimagesource is already defined
}

// Display hero images in the carousel
function displayHeroImages(images) {
    const imageCarousel = document.getElementById('image-carousel');
    imageCarousel.innerHTML = ''; // Clear the carousel before populating

    images.forEach((imageSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = `Hero Image ${index + 1}`;
        imgElement.className = 'carousel-image';
        imageCarousel.appendChild(imgElement);
    });

    let currentIndex = 0;
    const carouselImages = document.querySelectorAll('.carousel-image');
    const intervalTime = 3000; // Time interval in milliseconds
    let carouselInterval;

    // Function to change the active image
    function changeImage(newIndex = currentIndex) {
        carouselImages.forEach((img, index) => {
            img.classList.toggle('active', index === newIndex); // Toggle 'active' class
        });
        currentIndex = newIndex;
    }

    // Start the carousel
    function startCarousel() {
        carouselInterval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % carouselImages.length;
            changeImage(nextIndex);
        }, intervalTime);
    }

    // Stop the carousel
    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Attach event listeners for navigation buttons
    document.getElementById('prev-button').addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        changeImage(prevIndex);
    });

    document.getElementById('next-button').addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % carouselImages.length;
        changeImage(nextIndex);
    });

    // Pause and resume on hover
    imageCarousel.addEventListener('mouseover', stopCarousel);
    imageCarousel.addEventListener('mouseout', startCarousel);

    // Initialize the first image and start carousel
    changeImage(0);
    startCarousel();
}


// Display products in the grid
function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear the grid before populating

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p><strong>Price:</strong> ₹${product.price.toFixed(2)}</p>
            <p><strong>Rating:</strong> ${product.rating} <span>★</span></p>
            <a href="product-details.html?id=${product.id}" class="details-link">View Details</a>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart!`);
    }
}

// Filter products based on category, price, rating, and other criteria
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const rating = document.getElementById('rating-filter').value;
    const minPrice = parseFloat(document.getElementById('price-min-range').value);
    const maxPrice = parseFloat(document.getElementById('price-max-range').value);

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    if (rating) {
        filteredProducts = filteredProducts.filter(product => product.rating >= rating);
    }
    filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);

    displayProducts(filteredProducts);
}

// Sort products based on price or rating
function sortProducts() {
    const sortBy = document.getElementById('sort-options').value;

    if (sortBy === "price-asc") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
        products.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(products);
}

// Update the price range labels dynamically
function updatePriceRange() {
    const minPrice = document.getElementById('price-min-range').value;
    const maxPrice = document.getElementById('price-max-range').value;
    document.getElementById('price-min').textContent = minPrice;
    document.getElementById('price-max').textContent = maxPrice;

    filterProducts();
}

// Search products based on the search input
function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

// Reset all filters and display all products
function resetFilters() {
    document.getElementById('category-filter').value = '';
    document.getElementById('price-min-range').value = 80;
    document.getElementById('price-max-range').value = 1000;
    document.getElementById('rating-filter').value = '';
    document.getElementById('sort-options').value = '';
    document.getElementById('price-min').textContent = '80';
    document.getElementById('price-max').textContent = '1000';

    displayProducts(products);
}

// Toggle between grid and list view
function toggleView() {
    const productGrid = document.getElementById('product-grid');
    productGrid.classList.toggle('list-view');
}

// Event listeners for filter inputs to trigger filter functions on change
document.getElementById('category-filter').addEventListener('change', filterProducts);
document.getElementById('rating-filter').addEventListener('change', filterProducts);
document.getElementById('price-min-range').addEventListener('input', updatePriceRange);
document.getElementById('price-max-range').addEventListener('input', updatePriceRange);
document.getElementById('sort-options').addEventListener('change', sortProducts);
document.getElementById('search-bar').addEventListener('input', searchProducts);

// Load products and hero images on page load
window.onload = loadProducts;
