import Duck from "../Duck";
import Quack from '../QuackBehaviors/Quack';
import FlyWithWings from "../FlyBehaviors/FlyWithWings";

export default class MallardDuck extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack();
        this.flyBehavior = new FlyWithWings();
    }

    public display(): string {
        return 'I am a real Mallard duck!';
    }
}
