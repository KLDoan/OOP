class Apple {
    constructor() {
        this.weight = 10
    }
    getWeight() {
        console.log("apple weight is " + this.weight);
        return this.weight;
    }

}
const apple = new Apple()
var appleWeight = apple.getWeight()
// human
class Human {
    constructor(name, gender,) {
        this.name = name;
        this.gender = gender;
        this.weight = 20

    }
    getName() {
        return this.name;
    }
    getGender() {
        console.log("my gender is " + this.gender);
    }

    eat() {
        if (appleWeight > 0) {
            this.weight++;
            appleWeight--;
        }
    }
    say() {
        console.log("hello my name is " + this.name);
    }
    getWeight() {
        console.log(this.weight);
    }
}
const Adam = new Human("Adam", "male");
const Eva = new Human("Eva", "female")
var say = Adam.say() + Adam.getGender() + Eva.say() + Eva.getGender()
function AdamEat() {
    let AdamEat = Adam.eat()
    console.log("now weight is " + Adam.weight + " and apple weight is " + appleWeight)
}
function EvaEat() {
    let EvaEat = Eva.eat()
    console.log("now weight is " + Eva.weight + " and apple weight is " + appleWeight)


}



