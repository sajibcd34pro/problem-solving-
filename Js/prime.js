// 9 is not a prime number
num = Number(prompt(`type your number: `));
count = 0;

if (num ===1 || num ===0) {
    document.write(`${num} is neither a prime nor a composite number.`);
}else if (num > 1) {
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            count++;
            break
        }
    }
    if (count === 0) {
        document.write(`${num} is a prime number`);
    }else {
        document.write(`${num} is Not a prime number`)
    }
}else {
    document.write(`enter a valid number`);
}