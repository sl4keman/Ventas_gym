document.addEventListener('DOMContentLoaded', () => {
    let carrito = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    function actualizarCarrito() {
        cartCount.innerText = carrito.length;
        cartItems.innerHTML = '';
        let total = 0;
        
        if (carrito.length > 0) {
            carrito.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.innerText = `${item.nombre} - $${item.precio.toLocaleString()} COP`;
                cartItems.appendChild(itemDiv);
                total += item.precio;
            });
        } else {
            cartItems.innerHTML = '<p>El carrito está vacío.</p>';
        }

        cartTotal.innerText = total.toLocaleString();
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const producto = button.closest('.producto');
            const nombre = producto.getAttribute('data-nombre');
            const precio = parseInt(producto.getAttribute('data-precio'), 10);

            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });
});
