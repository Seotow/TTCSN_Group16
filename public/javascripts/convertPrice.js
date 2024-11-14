// Add . each 3 digits
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Aplly all class contains 'price'
function applyPriceFormatting() {
    const priceElements = document.querySelectorAll('[class*="price"]');
    priceElements.forEach(element => {
        const price = parseFloat(element.innerText.replace(/[^0-9.-]+/g, ""));
        if (!isNaN(price)) {
            element.innerText = `${formatPrice(price)}₫`;
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    applyPriceFormatting();
})