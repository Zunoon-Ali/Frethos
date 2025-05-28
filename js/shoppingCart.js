document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    function loadCart() {
        cartItemsContainer.innerHTML = ""; // Clear existing content
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let total = 0;

        cart.forEach((item, index) => {
            // Ensure price is a valid number
            const numericPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
            const itemTotal = numericPrice * item.quantity;
            total += itemTotal;

            const itemDiv = document.createElement("div");
            itemDiv.className = "bg-white shadow rounded p-4 flex justify-between items-center";

            itemDiv.innerHTML = `
                <div class="flex w-full items-center justify-between">
                    <!-- Left: Image and details -->
                    <div class="flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded" />
                        <div class="flex flex-col space-y-1">
                            <h2 class="text-lg font-semibold">${item.name}</h2>
                            <p class="text-gray-500">Color: ${item.color}</p>
                            <p class="text-gray-700">Price: ${item.price}</p>
                        </div>
                    </div>

                    <!-- Right: Quantity and Delete -->
                    <div class="flex items-center space-x-4">
                        <input 
                            type="number" 
                            min="1" 
                            value="${item.quantity}" 
                            data-index="${index}" 
                            class="quantityInput w-16 border rounded px-2 py-1 text-center"
                        />
                        <button 
                            data-index="${index}" 
                            class="deleteBtn text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(itemDiv);
        });

        totalPriceElement.textContent = `Total: Rs ${total.toFixed(2)}`;
    }

    // Event delegation for quantity changes
    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("quantityInput")) {
            const index = e.target.getAttribute("data-index");
            const newQty = parseInt(e.target.value);
            if (!isNaN(newQty) && newQty > 0) {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart[index].quantity = newQty;
                localStorage.setItem("cart", JSON.stringify(cart));
                loadCart();
            }
        }
    });

    // Event delegation for delete buttons
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            const index = e.target.getAttribute("data-index");
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.splice(index, 1); // Remove item
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        }
    });

    loadCart(); // Initial cart load
});
