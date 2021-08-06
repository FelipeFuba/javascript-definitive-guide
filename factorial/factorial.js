function factorial(n) {
    var product = 1;
    while(n > 1) {
        product *= n;
        n--;
    } return product;
}
factorial(6)
console.log(factorial(6)) // 720