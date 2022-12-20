const number = Number(prompt("type a number: "));
isPrime = true;
if (number === 1 || number === 0) {
    document.write(`${number} is neither a prime nor a composite number.`)
}else if(number > 1){
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false
        } 
    }
    if (isPrime) {
        document.write(`${number} is a prime number`);
    } else {
        document.write(`${number} is not a prime number`);
    }
}else {
    document.write(`please enter a positive number`);
}