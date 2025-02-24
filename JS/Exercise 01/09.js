function print(fruit, weight, money){
    let totalPrice = (weight / 1000.0) * money;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight / 1000.0).toFixed(2)} kilograms ${fruit}.`);
}

print('orange', 2500, 1.80);