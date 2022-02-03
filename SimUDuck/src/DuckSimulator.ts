import Duck from "./Duck";
import MallardDuck from "./Ducks/MallardDuck";

export default class DuckSimulator {
    private mallard: Duck;

    constructor() {
        this.mallard = new MallardDuck();
    }

    simulateDisplay(): string {
        return this.mallard.display();
    }

    simulateFly(): string {
        return this.mallard.performFly();
    }

    simulateQuack(): string {
        return this.mallard.performQuack();
    }

    simulateSwim(): string {
        return this.mallard.swim();
    }
}
