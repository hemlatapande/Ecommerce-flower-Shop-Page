document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');

    // Dummy Product Data
    const products = [
        { id: 1, name: 'Roses', price:150, image: 'Rose.jpg' },
        { id: 2, name: 'Lilies', price:200, image: 'Lilies.jpg' },
        { id: 3, name: 'Sunflowers', price:250, image: 'sunflower.jpg' }
    ];

    // Function to generate product cards
    function generateProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product');

        const image = document.createElement('img');
        image.src = `images/${product.image}`;
        image.alt = product.name;

        const name = document.createElement('h3');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent =  '\u20B9' + product.price;

        const button = document.createElement('button');
        button.textContent = 'Add To Cart';

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(button);

        productsContainer.appendChild(card);
    }

    // Generate product cards
    products.forEach(product => {
        generateProductCard(product);
    });
});
