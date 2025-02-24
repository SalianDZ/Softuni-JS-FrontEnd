function speedLimit(speed, area){
    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;
    let result = '';

    if (area === 'motorway') {
        if (speed > motorway) {
            if ((speed - motorway) <= 20) {
                result = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - speeding`;
            }
            else if ((speed - motorway) <= 40) {
                result = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - excessive speeding`;
            }
            else{
                result = `The speed is ${speed - motorway} km/h faster than the allowed speed of ${motorway} - reckless driving`;
            }
        }
        else{
            result = `Driving ${speed} km/h in a ${motorway} zone`; 
        }
    }
    else if (area === 'interstate') {
        if (speed > interstate) {
            if ((speed - interstate) <= 20) {
                result = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - speeding`;
            }
            else if ((speed - motorway) <= 40) {
                result = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - excessive speeding`;
            }
            else{
                result = `The speed is ${speed - interstate} km/h faster than the allowed speed of ${interstate} - reckless driving`;
            }
        }
        else{
            result = `Driving ${speed} km/h in a ${interstate} zone`; 
        }
    }
    else if (area === 'city') {
        if (speed > city) {
            if ((speed - city) <= 20) {
                result = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - speeding`;
            }
            else if ((speed - city) <= 40) {
                result = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - excessive speeding`;
            }
            else{
                result = `The speed is ${speed - city} km/h faster than the allowed speed of ${city} - reckless driving`;
            }
        }
        else{
            result = `Driving ${speed} km/h in a ${city} zone`; 
        }
    }
    else{
        if (speed > residential) {
            if ((speed - residential) <= 20) {
                result = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - speeding`;
            }
            else if ((speed - residential) <= 40) {
                result = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - excessive speeding`;
            }
            else{
                result = `The speed is ${speed - residential} km/h faster than the allowed speed of ${residential} - reckless driving`;
            }
        }
        else{
            result = `Driving ${speed} km/h in a ${residential} zone`; 
        }
    }

    console.log(result);
}