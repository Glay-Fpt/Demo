// script.js
document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cartItems');
    const total = document.getElementById('total');
    const viewCartBtn = document.getElementById('viewCartBtn');
    const cart = document.getElementById('cart');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cartTotal = 0;

    products.forEach(product => {
        const addToCartBtn = product.querySelector('.add-to-cart');
        const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

        addToCartBtn.addEventListener('click', function() {
            const itemName = product.querySelector('h3').textContent;
            const listItem = document.createElement('li');
            listItem.textContent = itemName;
            cartItems.appendChild(listItem);

            cartTotal += price;
            total.textContent = `Total: $${cartTotal.toFixed(2)}`;

            updateCartVisibility();
        });
    });

    function updateCartVisibility() {
        if (cartItems.children.length > 0) {
            cart.classList.remove('hidden');
        } else {
            cart.classList.add('hidden');
        }
    }

    viewCartBtn.addEventListener('click', function() {
        cart.classList.toggle('hidden');
    });

    checkoutBtn.addEventListener('click', function() {
        alert('Thank you for your purchase!');
        cartItems.innerHTML = '';
        cartTotal = 0;
        total.textContent = `Total: $${cartTotal.toFixed(2)}`;
        updateCartVisibility();
    });
});
