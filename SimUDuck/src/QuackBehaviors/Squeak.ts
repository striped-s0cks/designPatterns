import QuackBehavior from "./QuackBehavior";

export default class Squeak implements QuackBehavior {
    quack(): string {
        return 'Squeak!';
    }
}
