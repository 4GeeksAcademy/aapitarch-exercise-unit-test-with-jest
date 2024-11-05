const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3));

// Un euro es:
let oneEurols = {
    "JPY": 156.5, //yen japones
    "USD": 1.07, //dolar estadounidense
    "GBP": 0.87, //libra esterlina
}

//Declaramos una funcion con el nombre eaxto "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    //Convertimos el valor de dolares a euros
    let valueInEuros =  valueInDollar / oneEurols.USD;
    //Convertimos el valor de euros a yenes
    let valueInYen = valueInEuros * oneEurols.JPY;
    //Retornamos el valor en yenes
    return valueInYen;
}

//Declaramos una funcion con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    //Convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.07;
    //Retornamos el valor en dolares
    return valueInDollar;
}

//Declaramos una funcion con el nombre exacto "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    //Convertimos el valor de yenes a euros
    let valueInEuro = valueInYen / oneEurols.JPY;
    //Convertimos el valor de euros a libras
    let valueInPound = valueInEuro * oneEurols.GBP;
    //Retornamos el valor en libras
    return valueInPound;
}


module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};

