class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power;
        this.res = res;
    }
    attack(target){

    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play(target){
        if( target instanceof Unit){
            target.stat
        } else {
            throw Error("target must be a unit");
        }
        
    }
}