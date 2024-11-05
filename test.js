const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    //Importo la funcion desde app,js
    const {fromEuroToDollar} = require('./app.js');
    //Uso la funcion como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    //Si 1 euro son 1.07 dolares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    //Hago mi comparacion 
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One euro should be 156.3 yenes", function() {
    //Importo la funcion desde app.js
    const{fromDollarToYen} = require('./app.js');
    //Uso la funcion como debe ser usada
    const yenes = fromDollarToYen(10);
    //Convertimos 10 dolares a euros
    let valueInEuros = 10 / 1.07;
    //Convertimos el resultado en euros a yenes
    const expected = valueInEuros * 156.5;
    expect(yenes).toBe(expected);
});

test("One euro should be 0.87 pounds", function() {
    //Importo la funcion desde app.js
    const{fromYenToPound} = require('./app.js');
    //Uso la funcion como debe ser usada
    const pounds = fromYenToPound(2550.6);
    //Convertimos 2550.6 yenes a euros
    let valueInEuro = 2550.6 / 156.5;
    //Convertimos el resultado en euros a pounds
    const expected = valueInEuro * 0.87;
    expect(pounds).toBe(expected);
});