import { useTasks } from "../contexts/TasksContext";
import { useFilter } from "../contexts/FilterContext";
import Task from "./Task";

const TaskList = () => {
    const tasks = useTasks();
    const { filter } = useFilter();
    let tasksToDisplay = [];

    switch (filter) {
        case "all":
            tasksToDisplay = tasks;
            break;
        case "active":
            tasksToDisplay = tasks.filter((t) => !t.done);
            break;
        case "done":
            tasksToDisplay = tasks.filter((t) => t.done);
            break;
        default:
            throw Error();
    }

    return (
        <div className="tasklist">
            {tasksToDisplay.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
