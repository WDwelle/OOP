class Ninja{
    constructor(name, health){
        this.name = name;
        this.speed = 3;
        this.health = health;
        this.strenth = 3;
    }
    
    sayName(){console.log(this.name);}
    showStats(){console.log(this.name, this.health, this.speed, this.strenth);}
    drinkSake(){this.health = (this.health + 10);}
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.name = name;
        this.speed = 10;
        this.strenth = 10;
        this.health = 200;
    }

    speakWisdom(){console.log("If it compiles on your first try you might be dead");}
}

const superSensei = new Sensei("Master Ugway");
superSensei.showStats();
superSensei.speakWisdom();
//const ninja1 = new Ninja("Hyabusa", 100);
//ninja1.sayName();
//ninja1.drinkSake();
//ninja1.showStats();