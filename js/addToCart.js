 document.addEventListener('DOMContentLoaded',function(){
    const addToCartBtn = document.getElementById('addToCartBtn')
    const modalName = document.getElementById('modalName')
    const modalImage = document.getElementById('modalImage')
    const modalSalePrice = document.getElementById('modalSalePrice')
    const qtyInput = document.getElementById('quantity')

    let defaultColor = 'Black';

    const colorBtns = document.querySelectorAll('#coloroptions button')
    colorBtns.forEach((btn)=>{
        btn.addEventListener('click',function(){

            defaultColor = btn.getAttribute('aria-label')

            colorBtns.forEach((b)=>{
                b.classList.remove('ring-4', 'ring-indigo-500')
            })
        })
    })

    addToCartBtn.addEventListener('click',function(){
        const name = modalName.textContent.trim()
        const image = modalImage.src
        const price = modalSalePrice.textContent.trim()
        const quantity = parseInt(qtyInput.value)
        const color = defaultColor;
         
        const itemId = `${name}-${color}`;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingItem = cart.find((item) => item.id === itemId)

        if(existingItem){
            existingItem.quantity += quantity; 
     }else{
        cart.push({
            id: itemId,
            name,
            image,
            price,
            quantity,
            color
        })
     }

     localStorage.setItem("cart",JSON.stringify(cart))
     alert(`${quantity} ${name} (${color}) added to cart!`);

    })

 })