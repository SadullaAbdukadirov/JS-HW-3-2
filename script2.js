do {
    var quantity = +prompt('Write the quantity');
    
} while (quantity <= 0 || isNaN(quantity));



let symbol = '-'
let symbol2 = '*'
let answer = '';

for (let i = 0; i < quantity; i++) {
    answer += symbol
    if (i == 0) {
        console.log(symbol2);
    }else {
        console.log(answer + symbol2)    
    }
    
}