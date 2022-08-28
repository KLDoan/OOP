class Apple {
    constructor() {
        this.weight = 10
    }
    getWeight() {
        return this.weight;
    }
}
const apple = new Apple()
var appleWeight = apple.getWeight()
//human
class Human {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this.weight = 0
    }
    getName() {
        return this.name
    }
    getGender() {
        return this.gender;
    }
    talk() {
        console.log("Hello tao la ")
    }
    eat() {
        for (let i = 0; i < appleWeight; i++) {
            apple.getWeight -= 1;
            this.weight += 1;
            return this.weight;
        }
    }
    getHumanWeight() {
        return this.weight;
    }
    checkApple() {
        return appleWeight;
    }
}
const human = new Human("Adam", "male");
let human_name = human.getName();
let human_gender = human.getGender();
let eatApple = human.eat();
let human_weight = human.getHumanWeight();
let checkAppleweight = human.checkApple();
