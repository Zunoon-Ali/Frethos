let productData = [];
let currentPage = 1;
let itemsPerPage = 8;

// This needs to be GLOBAL for onclick in HTML to work
function handleCardClick(card) {
    const product = {
        name: card.getAttribute('data-name'),
        imageUrl: card.getAttribute('data-image'),
        tag: card.getAttribute('data-tag'),
        brand: card.getAttribute('data-brand'),
        previousPrice: card.getAttribute('data-previous_price'),
        salePrice: card.getAttribute('data-sale_price'),
    };
    openModal(product); // call modal.js function
}

async function loadProducts() {
    try {
        let response = await fetch('js/product_data.json');
        productData = await response.json();

        renderProducts();

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            const totalPages = Math.ceil(productData.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
            }
        });

    } catch (error) {
        console.error("Error Loading Product Data:", error);
    }
}

function renderProducts() {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let productsToDisplay = productData.slice(start, end);

    let productContainer = document.getElementById('products');
    productContainer.innerHTML = "";

    let cardHtml = '';
    productsToDisplay.forEach(product => {
        cardHtml += `
    <div 
      class="product_card xl:w-1/4 md:w-1/3 p-4 group cursor-pointer"
      onclick="handleCardClick(this)"
      data-name="${product.name}"
      data-image="${product.image}"
      data-tag="${product.tag}"
      data-brand="FRETHOS"
      data-previous_price="${product.previous_price}"
      data-sale_price="${product.sale_price}"
    >
      <div class="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:scale-105">
          <img class="h-50 rounded w-full object-contain object-center my-2 group-hover:hidden"
              src="${product.image}" alt="${product.name}" />
          <img class="h-50 rounded w-full object-contain object-center my-2 hidden group-hover:block"
              src="assets/images/frethos_logo.png" alt="Black Shirt Back" />
          <h3 class="bg-black tracking-widest text-white text-xs py-1 px-2 font-medium rounded-full title-font hover:text-white hover:bg-indigo-500 transition duration-300 ease-in-out inline-block hover:font-bold my-2">
              ${product.tag}
          </h3>
          <h2 class="text-sm text-gray-900 font-medium title-font my-2 hover:font-bold hover:text-indigo-500 transition duration-300 ease-in-out hover:underline cursor-pointer">
              ${product.name}
          </h2>
          <span class="title-font text-xs text-white p-2 bg-black hover:font-bold rounded-full my-2 inline-block hover:bg-indigo-500 transition duration-300 ease-in-out">
              FRETHOS
          </span>
          <p class="leading-relaxed text-xs">
              <del> RS ${product.previous_price}</del> &nbsp;
              <strong class="hover:underline cursor-pointer text-sm">RS ${product.sale_price}</strong>
          </p>
      </div>
    </div>`;
    });
    productContainer.innerHTML += cardHtml;

    updatePagination();
    toggleButtons();
}

function updatePagination() {
    const totalPages = Math.ceil(productData.length / itemsPerPage);
    document.getElementById("pagination").innerText = `page:  ${currentPage} of ${totalPages}`;
}

function toggleButtons() {
    const totalPages = Math.ceil(productData.length / itemsPerPage);
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

loadProducts();
