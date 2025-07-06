// assets/js/main.js

// Import components (if using modules, otherwise they are global)
// import { createHeader, createFooter, updateCartItemCount, saveCartToLocalStorage, loadCartFromLocalStorage } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
    // Append header and footer to all pages
    const body = document.body;
    body.prepend(createHeader()); // Add header at the top
    body.appendChild(createFooter()); // Add footer at the bottom

    // Initialize cart from local storage and update count
    const cart = loadCartFromLocalStorage();
    updateCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));

    // --- Global Event Listeners or Common Logic ---

    // Example: Smooth scrolling for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more global JavaScript logic here that applies to most or all pages.
});

// Helper function to get URL parameters (useful for checkout, etc.)
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// You can add specific logic for different pages based on their ID or class
// For example, if you have a #home-page, #menu-page, etc.

// Example: Function for adding to cart (can be used on menu.html)
function addToCart(item) {
    let cart = loadCartFromLocalStorage();
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCartToLocalStorage(cart);
    updateCartItemCount(cart.reduce((total, cartItem) => total + cartItem.quantity, 0));
    alert(`${item.name} added to cart!`);
}

// Example: Function for removing from cart (can be used on cart.html)
function removeFromCart(itemId) {
    let cart = loadCartFromLocalStorage();
    cart = cart.filter(item => item.id !== itemId);
    saveCartToLocalStorage(cart);
    updateCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));
}

// Example: Function for updating cart item quantity (can be used on cart.html)
function updateCartQuantity(itemId, newQuantity) {
    let cart = loadCartFromLocalStorage();
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex > -1) {
        if (newQuantity <= 0) {
            cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
        } else {
            cart[itemIndex].quantity = newQuantity;
        }
    }
    saveCartToLocalStorage(cart);
    updateCartItemCount(cart.reduce((total, item) => total + item.quantity, 0));
}