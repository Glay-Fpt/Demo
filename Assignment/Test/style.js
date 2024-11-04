// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    const productName = document.querySelector('h2').textContent;
    const productPrice = parseFloat(document.querySelector('p:nth-of-type(2)').textContent.replace('Price: $', ''));

    addToCartBtn.addEventListener('click', function() {
        const cartItem = {
            name: productName,
            price: productPrice
        };
        addToCart(cartItem);
    });

    function addToCart(item) {
        // Thêm sản phẩm vào giỏ hàng
        console.log('Added to cart:', item);
        // Thêm mã logic để xử lý thêm sản phẩm vào giỏ hàng ở đây
    }
});
