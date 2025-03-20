function store(stock, delivery){
    class Product{
        constructor(name, quantity){
            this.name = name;
            this.quantity = quantity;
        }
    }

    let counter = 0;
    
    let product = '';
    let quantity = 0;
    const products = [];

    for (const currentProduct of stock) {
        counter++;
        if(counter % 2 === 0){
            quantity = Number(currentProduct);
        }
        else{
            product = currentProduct;
            continue;
        }

        const newProduct = new Product(product, quantity);
        products.push(newProduct);
    }

    counter = 0;
    for (const currentProduct of delivery) {
        counter++;
        if(counter % 2 === 0){
            quantity = Number(currentProduct);
        }
        else{
            product = currentProduct;
            continue;
        }

        if(products.find(p => p.name === product)){
            const foundProduct = products.find(p => p.name === product);
            foundProduct.quantity += quantity;
        }
        else{
            const newProduct = new Product(product, quantity);
            products.push(newProduct);
        }
    }

    for (const product of products) {
        console.log(`${product.name} -> ${product.quantity}`);
    }
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );