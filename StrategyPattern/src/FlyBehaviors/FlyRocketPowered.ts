import FlyBehavior from "./FlyBehavior";

export default class FlyRocketPowered implements FlyBehavior {
    public fly(): string {
        return 'I am flying with a rocket!';
    }
}