// assets/js/components.js

// Function to create a standard header for all pages
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('main-header');
    header.innerHTML = `
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="assets/images/logo.jpg" alt="Food Order Logo">
                </a>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="cart.html">Cart (<span id="cart-item-count">0</span>)</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                </ul>
            </nav>
        </div>
    `;
    return header;
}

// Function to create a standard footer for all pages
function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('main-footer');
    footer.innerHTML = `
        <div class="container">
            <p>&copy; ${new Date().getFullYear()} Food Order. All rights reserved.</p>
        </div>
    `;
    return footer;
}

// Function to update the cart item count in the header
function updateCartItemCount(count) {
    const cartItemCountSpan = document.getElementById('cart-item-count');
    if (cartItemCountSpan) {
        cartItemCountSpan.textContent = count;
    }
}

// Function to store cart data in local storage
function saveCartToLocalStorage(cart) {
    localStorage.setItem('foodOrderCart', JSON.stringify(cart));
}

// Function to load cart data from local storage
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('foodOrderCart');
    return cartData ? JSON.parse(cartData) : [];
}

// Export functions if using modules (e.g., in a build system)
// For simple direct inclusion in HTML, they will be globally available.
// If you are using type="module" in your script tags:
/*
export {
    createHeader,
    createFooter,
    updateCartItemCount,
    saveCartToLocalStorage,
    loadCartFromLocalStorage
};
*/