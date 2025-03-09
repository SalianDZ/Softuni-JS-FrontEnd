function passwordChecker(password){
    let isValid = true;
    if(password.length < 6 || password > 10){
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if(!(/^[A-Za-z0-9]+$/.test(password))){
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if(!(/^(?=(?:.*\d){2,}).*$/.test(password))){
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if(isValid){
        console.log('Password is valid');
    }
}

passwordChecker('logIn');