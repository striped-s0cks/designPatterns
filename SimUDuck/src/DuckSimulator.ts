import Duck from "./Duck";
import MallardDuck from "./Ducks/MallardDuck";
import ModelDuck from "./Ducks/ModelDuck";
import FlyRocketPowered from "./FlyBehaviors/FlyRocketPowered";

export default class DuckSimulator {
    runSimulation(): string[] {
        const logs: string[] = [];

        const mallard = new MallardDuck();
        logs.push(mallard.display());
        logs.push(mallard.performQuack());
        logs.push(mallard.performFly());
        logs.push(mallard.swim());
        logs.push('------------------')

        const model = new ModelDuck();
        logs.push(model.display());
        logs.push(model.performQuack());
        logs.push(model.performFly());
        model.setFlyBehavior(new FlyRocketPowered());
        logs.push(model.performFly());

        return logs;
    }
}
