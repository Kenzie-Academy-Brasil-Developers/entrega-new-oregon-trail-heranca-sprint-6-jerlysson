const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { medico } = require("./../../app");
const passengers = require('./WagonSteps')
const cacador = require('./HunterSteps')
/**GIVEN */
Given('um nome ao Medico de {string}', function (string) {
    medico.name = string
});
Given('sempre inicio a viajem saudavel', function () {
    medico.isHealthy = true
});
Given('sempre inicio com {int} refeições', function (int) {
    medico.food = int
});

/**WHEN */
When('o Medico parar para verificar a saude dos viajantes', function () {

  });
When('o Medico encontrar algum viajante nao saudavel', function () {
    for(let index=0; index < passengers.length;index++){
        if(passengers[index].isHealthy){
            return true
        }else{
            return false
        }
    }
  });
When('o Medico pedir {int} refeição ao Caçador', function (int) {
    return cacador.food > int
    });
    
  /**THEN */

Then('o Medico cura esse viajente e perde uma refeição', function () {
    for(let index=0; index < passengers.length;index++){
        if(passengers[index].isHealthy){
            passengers[index].isHealthy= true
            medico.food-= 1
        }
    }
    return 'pending';
});
Then('o medico ganha essa refeição', function () {

  });




