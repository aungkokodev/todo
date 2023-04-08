import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export const useTasks = () => useContext(TasksContext);
export const useTasksDispatch = () => useContext(TasksDispatchContext);

export const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
};

const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case "ADD":
            return [...tasks, action.task];
        case "UPDATE":
            return tasks.map((task) =>
                task.id === action.task.id ? action.task : task
            );
        case "DELETE":
            return tasks.filter((task) => task.id !== action.id);
        case "DELETE_DONE":
            return tasks.filter((task) => !task.done);
        default:
            throw Error("Unknown action " + action.type);
    }
};

const initialTasks = [
    { id: 1, task: "Task 1", done: false },
    { id: 2, task: "Task 2", done: true },
    { id: 3, task: "Task 3", done: false },
];
