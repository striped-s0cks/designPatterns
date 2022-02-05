import DuckSimulator from "./DuckSimulator";

const duckSimulator = new DuckSimulator();
const duckSimulatorLogs = duckSimulator.runSimulation();

const appDiv = document.getElementById('app');
appDiv.innerHTML = `
    <h1>Strategy Pattern</h1>
    <div>${duckSimulatorLogs.join('</br>')}</div>
`;
