import FlyBehavior from "./FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
    fly(): string {
        return 'I am flying!';
    }
}
