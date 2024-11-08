document.addEventListener('DOMContentLoaded', function() {

    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const calcSum = () => {
        let totalSum = 0;
        $$('.cart-item').forEach(item => {
            const itemPrice = item.dataset.price
            const itemQuantity = item.dataset.buyquantity
            totalSum += itemPrice * itemQuantity;
        });
        $('.total-price').innerText = `đ${formatPrice(totalSum)}`;
    }

    // Cart process
    const updateQuantity = (index, type) => {
        fetch('/update-cart-quantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index, type })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const cartItem = $(`.cart-item[data-index="${index}"]`);
                const quantityInput = cartItem.querySelector('.product-details-input');
                const cartSum = cartItem.querySelector('.cart-sum-price');
                const price = cartItem.dataset.price
                quantityInput.value = data.newQuantity;
                cartItem.dataset.buyquantity = data.newQuantity;
                cartSum.innerText = `đ${formatPrice(price * data.newQuantity)}`;

                // Update total sum
                calcSum()
            } else {
                showErrorMessage('Không thể xóa sản phẩm');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    const deleteCartItem = (index) => {
        fetch('/delete-cart-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const cartItem = $(`.cart-item[data-index="${index}"]`);
                cartItem.remove();

                calcSum()
            } else {
                showErrorMessage('Không thể xóa sản phẩm');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    $$('.minus-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            updateQuantity(index, 'decrease');
        });
    });

    $$('.plus-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            updateQuantity(index, 'increase');
        });
    });
    $$('.cart-delete-action').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteCartItem(index);
        });

        calcSum()
    });


    // Checkout process
    $('#payment').onclick = () => {
        $('.modal').classList.add('active')
        $('.auth-form.payment').classList.add('active')
    }

    $('.modal').onclick = (e) => {
        if(e.target == $('.modal__overlay')) {
            $('.modal').classList.remove('active')
        }
    }
    const checkoutForm = $('#payment-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(checkoutForm);
            const data = Object.fromEntries(formData.entries());

            // Get cart from product
            const cartItems = [];
            document.querySelectorAll('.cart-item').forEach(item => {
                const productId = item.dataset.id;
                const price = parseFloat(item.dataset.price);
                const buyQuantity = parseInt(item.querySelector('.product-details-input').value);
                cartItems.push({ productId, price, buyQuantity });
            });
            console.log(data)
            data.cartItems = cartItems;

            fetch('/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data.success)
                if (data.success) {
                    window.location.href = '/'
                } else {
                    showErrorMessage(data.message);
                }
            })
            .catch(err => {
                console.log('Error:', err);
            });
        });
    }
});