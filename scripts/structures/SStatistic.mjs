export class SStatistic{
    constructor() {
    }

    setID(id){
        this.id = id;
    }

    setType(type){
        this.type = type;
    }

    setPosAmount(amount){
        this.posAmount = amount;
    }

    setNegAmount(amount){
        this.negAmount = amount;
    }

    getSum(){
        return this.negAmount + this.posAmount;
    }
}