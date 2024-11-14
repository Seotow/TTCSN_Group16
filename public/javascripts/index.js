
document.addEventListener('DOMContentLoaded', function() {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    // Load category img js

    // Modal
    const modal = $('.modal')
    const overLay = $('.modal__overlay')
    const togglePasswords = $$('.toggle-password')

    if(togglePasswords) {
        for(let togglePassword of togglePasswords) {
            togglePassword.onclick = () => {
                togglePassword.classList.toggle('fa-eye-slash')
                let passwordInput = togglePassword.parentElement.querySelector('.form-control')
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            }

        }
    }

    const signInForm = document.querySelector('#signin-form');
    const signUpForm = document.querySelector('#signup-form');

    window.signUp = () => {
        
        modal.classList.add('active')
        signUpForm.classList.add('active')
        signInForm.classList.remove('active')
    }

    window.signIn = () => { 
        modal.classList.add('active')
        signInForm.classList.add('active')
        signUpForm.classList.remove('active')
    }
    if(modal) {
        overLay.onclick = () => {
            modal.classList.remove('active')
        }
    }

    const links = $$('a[href="#"]')

    for(let link of links) {
        link.onclick = showInfoMessage
    }

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[name="email"]').value;
        const password = e.target.querySelector('input[name="password"]').value;
        const rememberMe = document.getElementById("remember").checked;

        // Fetch by email and password
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, rememberMe })
        })
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                window.location.href = window.location.href;
            } else {
                showErrorMessage(data.message)
            }
        })
        .catch(err => {
            showErrorMessage("Có lỗi xảy ra vui lòng thử lại sau")
            console.log(err)
        })
    }); 


    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = e.target.querySelector('input[name="name"]').value; // thêm trường tên
        const phone = e.target.querySelector('input[name="phone"]').value; // thêm trường điện thoại
        const email = e.target.querySelector('input[name="email"]').value;
        const password = e.target.querySelector('input[name="password"]').value;

        // Gửi yêu cầu đăng ký
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, phone, email, password }) // bao gồm tên và điện thoại
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = window.location.href;
            } else {
                showErrorMessage(data.message);
            }
        })
        .catch(err => {
            showErrorMessage("Có lỗi xảy ra vui lòng thử lại sau");
            console.error(err);
        });
    });

    const addToCartBtns = $$('.product-hover-footer')

    addToCartBtns.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault()
            const productId = this.dataset.id;
            const name = this.dataset.name;
            const image = this.dataset.image
            const price = this.dataset.price
            const quantity = this.dataset.quantity;

            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, name, image, price, quantity, buyQuantity: 1 }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data)
                    updateCartView(data.cart);
                    showSuccessMessage("Thêm thành công")
                } else {
                    showErrorMessage("Có lỗi xảy ra, vui lòng thử lại sau!")
                }
            })
            .catch(err => {
                console.error(err);
                showErrorMessage("Có lỗi xảy ra, vui lòng thử lại sau!")
            });
        });
    });

    function updateCartView(cart) {
        const cartListHeader = $(".header-cart__list")
        cartListHeader.classList.remove('header-cart__list--empty')
        cartListHeader.classList.add('header-cart__list--hascart')
        const cartItemsContainer = $('.header-cart__items');
        const cartQuantitySpan = $('.header-cart__quantity');
        cartItemsContainer.innerHTML = ''; // Clear existing items

        cart.forEach((cartItem, index) => {
            console.log(cartItem)
            const cartItemElement = document.createElement('li');
            cartItemElement.classList.add('header-cart__item');
            cartItemElement.setAttribute('data-index', index);
            cartItemElement.innerHTML = `
                <a href="product/${cartItem.productId}" class="header-cart__item-link">
                    <img src="./images/products/${cartItem.image}" alt="" class="header-cart__item-img">
                    <span class="header-cart__item-name">${cartItem.name}</span>
                    <span class="header-cart__item-right">
                        <span class="header-cart__item-price">₫${formatPrice(cartItem.price)}</span>
                        <span class="header-cart__item-quantity">x${cartItem.buyQuantity}</span>
                    </span>
                </a>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        cartQuantitySpan.innerText = cart.length;
    }

    // Search
    const searchBtn = $("#header-search__btn")
    const searchInput = $("#header-search__input")

    const handleSearch = (query) => {
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    };

    searchBtn.onclick = () => handleSearch(searchInput.value);

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch(searchInput.value);
        }
    });

    const historyList = $(".header-search__history")
    
    searchInput.onfocus = (e) => {
        historyList.classList.add('show')
    }
    const searchHistoryItems = $$('.header-search__history-item');
    searchHistoryItems.forEach(item => {
        item.onclick = function(e) {
            console.log(e)
            const query = this.dataset.query;
            handleSearch(query);
        }
    });
})