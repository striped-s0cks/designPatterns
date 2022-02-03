import DuckSimulator from "./DuckSimulator";

const duckSimulator = new DuckSimulator();

const simulatorOutputs = [
    duckSimulator.simulateDisplay(),
    duckSimulator.simulateFly(),
    duckSimulator.simulateQuack(),
    duckSimulator.simulateSwim()
];

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>SimUDuck</h1>
<div>${simulatorOutputs.join('</br>')}</div>
`;
