const randomColor = ( ) => {
    const caracteres = '0123456789ABCDEF';
    var cor = '';
    for (var i = 0; i < 0; i++) {
        cor += caracteres[Math.floor(Math.random() * 16)];
    }
    return '#' + cor;
};

console.log(randomColor());
console.log(randomColor());
console.log(randomColor());