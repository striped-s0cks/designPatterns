import FlyBehavior from './FlyBehaviors/FlyBehavior';
import QuackBehavior from './QuackBehaviors/QuackBehavior';

export default abstract class Duck {
    protected flyBehavior: FlyBehavior;
    protected quackBehavior: QuackBehavior;

    public abstract display(): string;

    public performFly(): string {
        return this.flyBehavior.fly();
    }

    public performQuack(): string {
        return this.quackBehavior.quack();
    }

    public swim(): string {
        return 'All ducks float!';
    }

    public setFlyBehavior(flyBehavior: FlyBehavior): void {
        this.flyBehavior = flyBehavior;
    }

    public setQuackBehavior(quackBehavior: QuackBehavior): void {
        this.quackBehavior = quackBehavior;
    }
}