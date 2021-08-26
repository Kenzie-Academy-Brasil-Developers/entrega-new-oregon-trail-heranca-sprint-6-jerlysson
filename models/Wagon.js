class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = []
    }
    join(passenger){
        if(this.passengers.length === this.capacity ){
            return false
        }else{
            this.passengers.push(passenger);
        }
    }
    getAvailableSeatCount(){
        let vagas=0
        if(this.passengers.length === 0 ){
            return this.capacity;
        }else{
            vagas = this.capacity - this.passengers.length;
        }
        return vagas
    }
    shouldQuarantine(){
        let arr = this.passengers;
        for(let i=0;i<arr.length;i++){
            if(arr[i].isHealthy === 'false'){
                return true
            } 
        }
        return false
    }
    totalFood(){
        let arr = this.passengers;
        let total = 0
        for(let i=0; i< arr.length;i++){
            total+= Number(arr[i].food);
        }
        return total;
    }
}

module.exports = Wagon;