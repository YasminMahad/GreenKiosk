function fetchProducts() {
    fetch('localhost:5000/products')
        .then((res) => res.json())
        .then(data => console.log(data));
}


let response = await fetch('localhost:5000/products');
let text = await response.text()
let getProduct = document.querySelector('#products');
products.innerHTML = kiosk.html;
fetchProducts()


function fetchFruits() {
    fetch('localhost:5000/products/fruList')
        .then((res) => res.json())
        .then(data => console.log(data));
}

function fetchVegetable() {
    fetch('localhost:5000/products/vegList')
        .then((res) => res.json())
        .then(data => console.log(data));
}







































