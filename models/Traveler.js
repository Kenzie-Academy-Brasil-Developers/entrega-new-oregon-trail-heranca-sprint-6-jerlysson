class Traveler {
    constructor(name, isHealthy, food){
        this.name = name;
        this.isHealthy = isHealthy;
        this.food = food;
    }

    hunt(){
        this.food+=2;
    }
    eat(){
        if(this.food <1){
            this.isHealthy = false
        }else{
            this.food-= 1;
        }
    }
}

module.exports = Traveler;