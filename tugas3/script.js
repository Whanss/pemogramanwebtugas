const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const priceIDR = button.getAttribute('data-price-idr');
        if (priceIDR) {
            button.innerHTML = priceIDR;  
        }
    });

    button.addEventListener('mouseleave', () => {
        const priceUSD = button.getAttribute('data-price');
        if (priceUSD) {
            button.innerHTML = priceUSD; 
        }
    });
});
