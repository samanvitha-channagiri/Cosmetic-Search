// Get product ID from URL query string
let productId = new URLSearchParams(window.location.search).get('id');
let product = mockProductData.find(p => p.id === parseInt(productId));

// Display product details and reviews
window.onload = function() {
    if (product) {
        // Display product details
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `₹ ${product.price.toFixed(2)}`;
        document.getElementById('product-rating').textContent = product.rating;
        document.getElementById('product-brand').textContent = product.brand;
        document.getElementById('product-ingredients').textContent = product.ingredients;
        document.getElementById('product-shades').textContent = product.shades ? product.shades.join(', ') : 'N/A';
        
        // Display reviews
        const reviewList = document.getElementById('review-list');
        if (product.reviews && product.reviews.length > 0) {
            product.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerHTML = `
                    <p><strong>${review.reviewer}</strong> <span>(${review.rating} stars)</span></p>
                    <p>${review.reviewText}</p>
                `;
                reviewList.appendChild(reviewElement);
            });
        } else {
            reviewList.innerHTML = `<p>No reviews yet. Be the first to review this product!</p>`;
        }

        // Load random related products
        loadRandomRelatedProducts();
    }
};

// Add to Cart Function
function addToCart() {
    alert('Added to Cart');
}

// Buy Now Function
function buyNow() {
    alert('Proceeding to Checkout');
}

// Submit Review Function
function submitReview() {
    const reviewText = document.getElementById('review-input').value;
    if (reviewText) {
        const reviewList = document.getElementById('review-list');
        const review = document.createElement('div');
        review.classList.add('review');
        review.innerHTML = `
            <p><strong>You</strong> <span>(5 stars)</span></p>
            <p>${reviewText}</p>
        `;
        reviewList.appendChild(review);
        document.getElementById('review-input').value = ''; // Clear the input field
    }
}

// Load Random Related Products Function
function loadRandomRelatedProducts() {
    // Create a random list of products, excluding the current product
    let relatedProducts = [...mockProductData];
    relatedProducts = relatedProducts.filter(p => p.id !== product.id); // Exclude the current product

    // Shuffle the array to randomize the order
    relatedProducts = shuffleArray(relatedProducts);

    // Select a few random products (e.g., 4 products)
    const randomProducts = relatedProducts.slice(0, 4);

    const relatedProductsList = document.getElementById('related-products-list');
    if (randomProducts.length > 0) {
        randomProducts.forEach(p => {
            const productElement = document.createElement('div');
            productElement.classList.add('related-product');
            productElement.innerHTML = `
                <img src="${p.image}" alt="${p.name}">
                <h5>${p.name}</h5>
                <p> ₹${p.price.toFixed(2)}</p>
                <a href="productDetail.html?id=${p.id}">View Product</a>
            `;
            relatedProductsList.appendChild(productElement);
        });
    } else {
        relatedProductsList.innerHTML = `<p>No related products available.</p>`;
    }
}

// Function to shuffle an array (Fisher-Yates Shuffle Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
