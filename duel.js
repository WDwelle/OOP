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
<<<<<<< HEAD
        target.res = target.res - this.power;
=======

>>>>>>> 27facb96013193c1d2217a976542973f976326b0
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
<<<<<<< HEAD
            if(stat = "power"){
                target.power = target.power + this.mag;
            }else{
                target.res = target.res + this.mag
            }
=======
            target.stat
>>>>>>> 27facb96013193c1d2217a976542973f976326b0
        } else {
            throw Error("target must be a unit");
        }
        
    }
}