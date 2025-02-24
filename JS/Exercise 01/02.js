function vacation(number, type, day) {
    let price= 0;
    let total = 0;
    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            }
            else if(day === 'Saturday'){
                price = 9.80;
            }
            else if(day === 'Sunday'){
                price = 10.46;
            }

            total = number * price;

            if (number >= 30) {
                total = total - (total * 0.15);
            }
        break;
        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            }
            else if(day === 'Saturday'){
                price = 15.60;
            }
            else if(day === 'Sunday'){
                price = 16;
            }

            total = number * price;

            if(number >= 100){
                total-= 10*price;
            }
        break;
        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            }
            else if(day === 'Saturday'){
                price = 20;
            }
            else if(day === 'Sunday'){
                price = 22.50;
            }

            total = number * price;

            if (number >= 10 && number <= 20) {
                total = total - (total * 0.05)
            }
        break;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}