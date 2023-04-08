import { useFilter } from "../contexts/FilterContext";
import { useTasks } from "../contexts/TasksContext";
import { useTasksDispatch } from "../contexts/TasksContext";

const Footer = () => {
    const { filter, setFilter } = useFilter();
    const tasks = useTasks();
    const dispatch = useTasksDispatch();
    const itemsLeft = tasks.filter((t) => !t.done).length;

    return (
        <div className="filter">
            <span>
                {itemsLeft} {itemsLeft > 1 ? "items" : "item"} left
            </span>
            <span>
                <button
                    onClick={(e) => setFilter("all")}
                    style={{ color: filter === "all" && "var(--color-1)" }}
                >
                    All
                </button>
                <button
                    onClick={(e) => setFilter("active")}
                    style={{ color: filter === "active" && "var(--color-1)" }}
                >
                    Active
                </button>
                <button
                    onClick={(e) => setFilter("done")}
                    style={{ color: filter === "done" && "var(--color-1)" }}
                >
                    Done
                </button>
            </span>
            <button onClick={() => dispatch({ type: "DELETE_DONE" })}>
                Clear completed
            </button>
        </div>
    );
};

export default Footer;
