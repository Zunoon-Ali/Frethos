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
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1 { text-align: center; }
                .item { margin-bottom: 15px; }
                .total { font-weight: bold; border-top: 1px solid #000; margin-top: 20px; padding-top: 10px; }
            </style>
        </head>
        <body>
            <h1>🛒 Checkout Receipt</h1>
            <div>
    `;

    let grandTotal = 0;

    cart.forEach((item, index) => {
        const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
        const totalItemPrice = price * item.quantity;
        grandTotal += totalItemPrice;

        receiptHTML += `
            <div class="item">
                <p><strong>Item ${index + 1}</strong></p>
                <p>Name: ${item.name}</p>
                <p>Color: ${item.color}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Unit Price: Rs ${price.toFixed(2)}</p>
                <p>Total: Rs ${totalItemPrice.toFixed(2)}</p>
            </div>
        `;
    });

    receiptHTML += `
            <div class="total">
                Grand Total: Rs ${grandTotal.toFixed(2)}
            </div>
            <p style="text-align:center; margin-top: 40px;">✅ Thank you for shopping with us!</p>
        </div>
        <script>
            window.onload = function() {
                window.print();
                window.onafterprint = function() {
                    window.close();
                };
            }
        </script>
        </body>
        </html>
    `;

    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();

    // Reset cart data AFTER a short delay (give time for print window to open)
    setTimeout(() => {
        localStorage.removeItem("cart"); // Clear cart
        if (typeof loadCart === "function") {
            loadCart(); // Reload cart if this function exists
        } else {
            location.reload(); // Fallback: just reload the page
        }
    }, 500); // 0.5s delay to avoid clearing too early
}

 