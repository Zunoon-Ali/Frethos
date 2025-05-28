function openModal(product) {
    document.getElementById('modalImage').src = product.imageUrl;
    document.getElementById('modalImage').alt = product.name;

    // Set href for the anchor to open full image in new tab
    document.getElementById('modalImageLink').href = product.imageUrl;

    document.getElementById('modalTag').innerText = product.tag;
    document.getElementById('modalName').innerText = product.name;
    document.getElementById('modalBrand').innerText = product.brand;
    document.getElementById('modalOldPrice').innerText = "RS " + product.previousPrice;
    document.getElementById('modalSalePrice').innerText = "RS " + product.salePrice;

    // Show modal (remove hidden)
    document.getElementById('productModal').classList.remove('hidden');
}


document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('productModal').classList.add('hidden');
});

document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') {
        document.getElementById('productModal').classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const qtyInput = document.getElementById('quantity');
    const increaseBtn = document.getElementById('qtyIncrease');
    const decreaseBtn = document.getElementById('qtyDecrease');

    increaseBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        qtyInput.value = currentQty + 1;
    }
    );

    decreaseBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
            qtyInput.value = currentQty - 1;
        }
    })
});

// Load the modal HTML content
qtyInput.addEventListener('input', (e) => {
    if (qtyInput.value < 1) {
        qtyInput.value = 1;
    }
})