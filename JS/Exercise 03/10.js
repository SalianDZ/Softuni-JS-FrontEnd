function factoriel(num1, num2){
    function factorialRecursive(n){
        if (n === 0 || n === 1) return 1;
        return n * factorialRecursive(n - 1);
    }

    const num1F = factorialRecursive(num1);
    const num2F = factorialRecursive(num2);

    console.log((num1F / num2F).toFixed(2));
}

factoriel(5,2);