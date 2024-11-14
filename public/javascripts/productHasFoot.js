const addToCartBtns = $$('.product-hover-footer')

addToCartBtns.forEach(button => {
    button.addEventListener('click', function(e) {
        addToCard(e);
    });
});