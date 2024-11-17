const productsWrapper = document.querySelector('.products__wrapper')

const GET_PRODUCTS = 'http://localhost:5000/products'

async function fetchProduct() {
    const res = await fetch(GET_PRODUCTS);
    const body = await res.json();
    const products = body.data

    products.forEach(async (item) => {
        const newElement = await creatProductCard(item);
        productsWrapper.appendChild(newElement);
    });

    console.log(products);
}

fetchProduct();

async function creatProductCard(data) {
    const el = document.createElement('div');
    el.classList.add('card');

    el.innerHTML = `
        <img src="${data.image}" alt="">
        <h3>${data.name}</h3>
    `;

    return el;
}