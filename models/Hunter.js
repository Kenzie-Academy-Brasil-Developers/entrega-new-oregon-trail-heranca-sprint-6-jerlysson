const Traveler = require("./Traveler");

class Hunter extends Traveler{
    constructor(name,isHealthy,food){
        super(name,isHealthy,food)
    }
    hunt(){
        this.food+=5;
    }
    eat(){
        if(this.food < 2){
            this.isHealthy = false;     
        }else{
            this.food-=2;
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if(traveler.food > numOfFoodUnits){
            traveler.food -= numOfFoodUnits
        }

    }
}



module.exports = Hunter;