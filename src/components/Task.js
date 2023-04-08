import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";

const Task = ({ task }) => {
    const dispatch = useTasksDispatch();
    const [edit, setEdit] = useState(false);

    const update = (value) =>
        dispatch({
            type: "UPDATE",
            task: { ...task, ...value },
        });

    return (
        <div className="task">
            <span>
                <input
                    type={"checkbox"}
                    checked={task.done}
                    onChange={(e) => update({ done: e.target.checked })}
                />
                {edit ? (
                    <input
                        type={"text"}
                        autoFocus={true}
                        value={task.task}
                        onFocus={(e) => e.target.select()}
                        onKeyDown={(e) => e.key === "Enter" && setEdit(false)}
                        onChange={(e) => update({ task: e.target.value })}
                    />
                ) : (
                    <span>{task.task}</span>
                )}
            </span>
            <span>
                {edit ? (
                    <i
                        className="fa-solid fa-lg fa-floppy-disk"
                        onClick={() => setEdit(false)}
                    ></i>
                ) : (
                    <i
                        className="fa-solid fa-lg fa-edit"
                        onClick={(e) => setEdit(true)}
                    ></i>
                )}
                <i
                    className="fa-solid fa-lg fa-trash-can"
                    onClick={() => dispatch({ type: "DELETE", id: task.id })}
                ></i>
            </span>
        </div>
    );
};

export default Task;
