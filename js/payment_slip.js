function checkoutCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let receiptHTML = `
        <html>
        <head>
            <title>Receipt</title>
            <!-- ✅ Tailwind CSS CDN -->
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-white text-gray-800 p-10">
            <h1 class="text-3xl font-bold text-center mb-8">🧾 Checkout Receipt</h1>
            <div class="space-y-6">
    `;

    let grandTotal = 0;

    cart.forEach((item, index) => {
        const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
        const totalItemPrice = price * item.quantity;
        grandTotal += totalItemPrice;

        receiptHTML += `
            <div class="border p-4 rounded-lg shadow-md">
                <p class="font-semibold text-lg">Item ${index + 1}</p>
                <p><strong>Name:</strong> ${item.name}</p>
                <p><strong>Color:</strong> ${item.color}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Unit Price:</strong> Rs ${price.toFixed(2)}</p>
                <p class="text-green-600 font-bold">Total: Rs ${totalItemPrice.toFixed(2)}</p>
            </div>
        `;
    });

    receiptHTML += `
            <div class="mt-10 text-xl text-center font-extrabold text-green-700">
                Grand Total: Rs ${grandTotal.toFixed(2)}
            </div>
            <p class="text-center mt-8">✅ Thank you for shopping with us!</p>
            </div>

            <script>
                window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                        window.close();
                    };
                };
            <\/script>
        </body>
        </html>
    `;

    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();

    // Optional: Clear cart and reload
    swindow.addEventListener('load', () => {
        // Clear cart from localStorage when page loads
        localStorage.removeItem("cart");

        // If you have a loadCart() function to update UI, call it here
        if (typeof loadCart === "function") {
            loadCart();
        }
    });


}
const resetCartButton = document.getElementById('resetCartButton');

resetCartButton.addEventListener('click', () => {
    // Clear cart from localStorage
    localStorage.removeItem('cart');

    // If you have a function to update cart UI, call it here
    if (typeof loadCart === "function") {
        loadCart();
    } else {
        // Or reload the page as a fallback
        location.reload();
    }
});