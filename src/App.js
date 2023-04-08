import "./App.css";
import { TasksProvider } from "./contexts/TasksContext";
import { FilterProvider } from "./contexts/FilterContext";
import Panel from "./components/Panel";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
    return (
        <TasksProvider>
            <div className="bg"></div>
            <Panel>
                <Header />
                <AddTask />
                <FilterProvider>
                    <TaskList />
                    <Filter />
                </FilterProvider>
            </Panel>
        </TasksProvider>
    );
};

export default App;
