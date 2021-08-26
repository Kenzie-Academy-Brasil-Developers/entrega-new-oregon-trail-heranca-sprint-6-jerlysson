const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");

/**GIVEN */
Given('um nome ao Caçador de {string}', function (string) {
    cacador.name = string
});
Given('ele sempre inicia com {int} refeições', function (int) {
    cacador.food = int;
});
Given('ele sempre inicia a viajem saudavel.', function () {
    cacador.isHealthy = true;
});

/**WHEN */
When('o Caçador sair para caçar {int} vezes', function (int) {
    for(let index=0; index < int; index++){
        cacador.hunt()
    }
});

When('o Caçador parar para comer {int} vezes', function (int) {
    for(let index=0; index < int; index++){
        cacador.eat()
    }
});
When('o Caçador doar {int} refeições', function (int) {
    cacador.giveFood()
});

/**THEN */
Then('ele deve ter {int} refeições', function (int) {
    assert.strictEqual(cacador.food,int);
});
Then('o Caçador deve ter {int} refeições', function (int) {
    assert.strictEqual(cacador.food,int)
});
Then('segue viajem com uma boa saude', function () {
    return cacador.isHealthy
});
Then('o Caçador deve ter menos de {int} refeições', function (int) {
    return cacador.food < int
});

module.exports = cacador